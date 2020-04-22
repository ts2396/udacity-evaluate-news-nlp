function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let formText = document.getElementById('url').value
  if (Client.checkUrl(formText)) {
      const postUrl = async (url = '', data = {}) => {
          const response = await fetch(url, {
              method: 'POST',
              credentials: 'same-origin',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
          });

          try {
              const newData = await response.json();
              document.getElementById('results').innerHTML = `<div>Hi ${name}, this is your results\:</div><div>label: ${newData.label}</div><div>code: ${newData.code}</div><div>confidence: ${newData.confidence}</div>`
              return newData
          } catch (error) {
              console.log("error", error);
          }
      };

      postUrl('/all', { url: formText })
  }
}

export { handleSubmit }
