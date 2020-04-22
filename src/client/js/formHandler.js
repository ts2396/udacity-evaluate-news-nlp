function handleSubmit(event) {
  event.preventDefault();
  //Get input from form input field
  var input_url = document.querySelectorAll('input[name=test-url]');
  //Verify that input is a valid url
  if (Client.validURL(JSON.parse(JSON.stringify(input_url[0].value)))) {
    console.log('::: FORM INPUT VALID :::');
    console.log('BUILDING REQUEST');
    fetch('http://localhost:3000/article', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: input_url[0].value }),
    })
      .then((res) => res.json())
      .then(function (res) {
        // print for debugging
        console.log(res);
        // Populates html with url information
        document.querySelector('section.url-results #polarity').innerHTML =
          res.polarity;
        document.querySelector('section.url-results #subjectivity').innerHTML =
          res.subjectivity;
        document.querySelector(
          'section.url-results #polarity_confidence'
        ).innerHTML = res.polarity_confidence;
        document.querySelector(
          'section.url-results #subjectivity_confidence'
        ).innerHTML = res.subjectivity_confidence;
        document.querySelector('section.url-results #excerpt').innerHTML =
          res.text;
      });
  } else {
    alert('Invalid URL. Please enter a valid URL');
    document.getElementById('name').value = '';
  }
}
export { handleSubmit };
