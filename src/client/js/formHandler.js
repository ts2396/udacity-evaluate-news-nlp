import { checkURL } from './URLChecker';

function handleSubmit(event) {
  event.preventDefault();
  const url = document.getElementById('url').value;
  if (Client.checkURL(url)) {
    console.log('Valid URL, Building Request');
    postData('http://localhost:9000/add', {
      url: url,
    }).then(function (data) {
      updateUI(data);
    });
    return false;
  }
}
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  try {
    const someData = await response.json();
    return someData;
  } catch (error) {
    console.log('error', error);
  }
};
const updateUI = async (res) => {
  console.log(res);
  document.getElementById('polarity').innerHTML = res.polarity;
  document.getElementById('subjectivity').innerHTML = res.subjectivity;
  document.getElementById('polarity_confidence').innerHTML =
    res.polarity_confidence;
  document.getElementById('subjectivity_confidence').innerHTML =
    res.subjectivity_confidence;
};
export { handleSubmit };
