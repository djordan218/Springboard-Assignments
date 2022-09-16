CREATE DATABASE craigslist_db

CREATE TABLE regions
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  encrypted_password VARCHAR (15) UNIQUE NOT NULL,
  preferred_region_id INTEGER REFERENCES regions
);

CREATE TABLE categories
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
);

CREATE TABLE posts
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  text TEXT,
  location TEXT UNIQUE NOT NULL,
  user_id INTEGER REFERENCES users,
  region_id INTEGER REFERENCES regions,
  category_id INTEGER REFERENCES categories
);