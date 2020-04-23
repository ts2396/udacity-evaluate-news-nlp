console.log('I exist still, I am the  Article');

function handleSubmit(event) {
  event.preventDefault();
  //Get input from form input field
  var input_url = document.getElementById('url').value;
  //Verify that input is a valid url
  if (Client.checkURL(input_url)) {
    console.log('::: VALID INPUT:::');
    console.log("::: Form Submitted :::");
    fetch('./shake', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: input_url.value }),
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
