'use strict'
require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
// const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Set default static assets folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

// This will parse our payload from fetch which is sent as a JSON object
// app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// import router for our API
const tweetsRouter = require('./routes/tweets');

// map our router to the '/api' route
app.use('/tweets', tweetsRouter);

app.listen(PORT, () => {
  console.log('tweets!', PORT) ;
});
