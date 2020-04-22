import { checkURL } from './URLChecker';
function handleSubmit(event) {
  event.preventDefault();
  let evalUrl = document.getElementById('url').value;
  const verifyUrl = Client.checkURL(evalUrl);
  if (verifyUrl) {
    postData('http://localhost:8081/add', {
      url: userUrl,
    }).then(function (data) {
      updateUI(data);
    });
    return false;
  }
}

////////////////////////////////////////////////
// /* Function to GET Project Data */         //
// const retrieveData = async (url = '') => { //
//   const request = await fetch(url);        //
//   try {                                    //
//     Transform into JSON                    //
//     const allData = await request.json();  //
//     return allData;                        //
//   } catch (error) {                        //
//     console.log('error', error);           //
//     appropriately handle the error         //
//   }                                        //
// };                                         //
////////////////////////////////////////////////

//////////////////////////
// Function to POST Data//
//////////////////////////
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    // transform into JSON
    const webData = await response.json();
    return webData;
  } catch (error) {
    console.log('error', error);
    // appropriately handle the error
  }
};

//////////////
// Update UI//
//////////////
const updateUI = async (input) => {
  document.getElementById('polarity').innerHTML = input.polarity;
  document.getElementById('polarity_confidence').innerHTML =
    input.polarity_confidence;
  document.getElementById('subjectivity').innerHTML = input.subjectivity;
  document.getElementById('subjectivity_confidence').innerHTML =
    input.subjectivity_confidence;
  document.getElementById('text').innerHTML = input.text;
};
export { handleSubmit };
