BEGIN;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tweets;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL
);

CREATE TABLE tweets (
  id SERIAL PRIMARY KEY,
  content TEXT,
  likes INT NOT NULL DEFAULT 0,
  user_id INT REFERENCES users(user_id)
);

COMMIT;
