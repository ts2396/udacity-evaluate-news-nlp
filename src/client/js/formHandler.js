console.log('I exist still, I am the  Article');

function handleSubmit(event) {
  event.preventDefault();
  const url = document.querySelectorAll('input[name=url]');
  let userUrl = document.getElementById('url').value;
  if (Client.checkURL(userUrl)) {
    fetch('http://localhost:8081/eval', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: url[0].value }),
    })
      .then((res) => res.json())
      .then(function (res) {
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
        console.log('Url not valid');
      }
    }
    
    export { handleSubmit };
