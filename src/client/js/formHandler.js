function handleSubmit(event) {
  event.preventDefault();
  const formText = document.getElementById('url').value;
  const errormessage = Client.checkURL(formText);
  document.getElementById('err').innerHTML = '';
  if (errormessage) {
    document.getElementById('err').innerHTML = errormessage;
    return;
  }
  fetch('http://localhost:8081/data', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ formText }),
  })
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById('results').innerHTML = res.text;
      document.getElementById('polarity').innerHTML = res.polarity;
      document.getElementById('polarity_confidence').innerHTML =
        res.polarity_confidence.toFixed(2) * 100;
      document.getElementById('subjectivity_confidence').innerHTML =
        res.subjectivity_confidence.toFixed(2) * 100;
    });
}
export { handleSubmit };
