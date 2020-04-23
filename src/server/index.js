const dotenv = require('dotenv');
dotenv.config();

/* Empty JS object to act as endpoint for all routes */
const projectData = [];
var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

/* Dependencies */
const bodyParser = require('body-parser');
// set aylien API credentials
const aylien = require('aylien_textapi');
const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});
console.log(`Your API key is ${process.env.API_KEY}`);

/* Start up an instance of app */
const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('dist'));
console.log(__dirname);

// Initialize all route with a callback function

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
  // res.sendFile(path.resolve('src/client/views/index.html'))
});

/* Spin up the server*/
const port = 8080;
const server = app.listen(port, listening);
function listening() {
  // console.log(server);
  console.log(`running on localhost: ${port}`);
  console.log('API ID: ' + process.env.API_ID);
}

// Initialize all route with a callback function
app.get('/eval', cors(), function (req, res) {
  res.send(mockAPIResponse);
});

// POST route
app.post('/eval', cors(), function (req, res) {
  apiAylien.sentiment({
      text: req.body.userInput,
      mode: req.body.modeOfUserInput
    }, function(error, response) {
      if (error === null) {
        apiResponse = response;  
        console.log(`Response from Aylien API call for sentiment is...`);
        console.log(apiResponse);
        res.send(apiResponse)
      }
    });
    
});

module.exports = app;
