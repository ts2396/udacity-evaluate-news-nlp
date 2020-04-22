//Check URL
function checkURL(url) {
  var valid = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  if (valid.test(url)) {
    return true;
  } else {
    return false;
  }
}

export { checkURL };
