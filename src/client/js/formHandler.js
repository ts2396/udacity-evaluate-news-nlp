import { checkURL } from './URLChecker';

function handleSubmit(event) {
  event.preventDefault();
  const url = document.getElementById('url').value;
  if (Client.checkURL(url)) {
    console.log('BUILDING REQUEST');
    fetch('http://localhost:9000/add', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ url: url }),
    })
      .then((res) => res.json())
      .then(function (res) {
        document.getElementById('polarity').innerHTML = res.polarity;
        document.getElementById('subjectivity').innerHTML = res.subjectivity;
        document.getElementById('polarity_confidence').innerHTML =
          res.polarity_confidence;
        document.getElementById('subjectivity_confidence').innerHTML =
          res.subjectivity_confidence;
      });
  } else {
    alert('URL not found.');
  }
}

export { handleSubmit };
