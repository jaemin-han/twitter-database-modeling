const db = require('../lib/dbConnect');

function getTweets (req, res, next) {
  db.any('SELECT * FROM tweets;')
  .then((tweets) => {
    res.tweets = tweets;
    next();
  })
  .catch(error => next(error));
}

function getOneTweet (req, res, next) {
  let user = req.params.username;
  db.query(`SELECT * FROM tweets
    INNER JOIN users
    ON (users.user_id = tweets.user_id)
    WHERE users.username = $1;`, [user])
  .then((tweets) => {
    res.tweets = tweets;
    next();
  })
  .catch(error => next(error));
}

function hashtag (req, res, next) {
  let hashtag = '%#' + req.params.hashtag + '%';
  console.log(hashtag);
  db.query(`SELECT * FROM tweets
    WHERE content ILIKE $1;`, [hashtag])
  .then((tweets) => {
    res.tweets = tweets;
    next();
  })
  .catch(error => next(error));
}

module.exports = {
  getTweets,
  getOneTweet,
  hashtag
};
