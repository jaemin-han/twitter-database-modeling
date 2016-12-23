const express = require('express');
const tweet = express.Router();
const { getTweets, getOneTweet, hashtag } = require('../models/tweets');
// const sendJSONresp = (req, res) => res.json(res.rows);


// handle all the routes**

// Returns ALL of the tweets in
tweet.get('/', getTweets, (req, res) => {
  res.json(res.tweets || []);
});

// Return all of the tweets for that user
tweet.get('/user/:username', getOneTweet, (req, res) => {
  res.json(res.tweets || []);
});

// Returns all of the tweets containing that hashtag
tweet.get('/hashtag/:hashtag', hashtag, (req, res) => {
  res.json(res.tweets || []);
});

module.exports = tweet;
