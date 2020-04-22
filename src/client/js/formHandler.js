function handleSubmit(event) {
  event.preventDefault();
  const baseUrl = 'http://localhost:8081/data';
  const url = document.getElementById('URL').value;
  // Using validateUrl to check if URL is correct
  if (Client.checkUrl(url)) {
    // fetching data
    fetch(baseUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ url: url }),
    })
      .then((res) => res.json())
      .then(function (res) {
        // Manipulating DOM to add data
        document.getElementById('polarity').innerHTML = res.polarity;
        document.getElementById('subjectivity').innerHTML = res.subjectivity;
        document.getElementById('text').innerHTML = res.text;
        document.getElementById('polarity_confidence').innerHTML =
          res.polarity_confidence;
        document.getElementById('subjectivity_confidence').innerHTML =
          res.subjectivity_confidence;
      });
  } else {
    console.log('Url not valid');
  }
}
export { handleSubmit };
