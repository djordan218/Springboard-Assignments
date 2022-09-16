CREATE DATABASE soccer_league_db

CREATE TABLE teams
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT NOT NULL
);

CREATE TABLE players
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  birthday DATE,
  height INT,
  current_team_id INTEGER REFERENCES teams
);

CREATE TABLE goals
(
  id SERIAL PRIMARY KEY,
  player_id INTEGER REFERENCES players,
  match_id INTEGER REFERENCES teams
);

CREATE TABLE lineups
(
  id SERIAL PRIMARY KEY,
  player_id INTEGER REFERENCES players, 
  match_id INTEGER REFERENCES goals,
  team_id INTEGER REFERENCES teams
);

CREATE TABLE season
(
  id SERIAL PRIMARY KEY,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL
);

CREATE TABLE matches
(
  id SERIAL PRIMARY KEY,
  home_team_id INTEGER REFERENCES movies ON DELETE CASCADE,
  away_team_id INTEGER REFERENCES actors ON DELETE CASCADE,
  location TEXT,
  date DATE, 
  start_time TIMESTAMP, 
  season_id INTEGER REFERENCES season,
  head_referee_id INTEGER REFERENCES referees,
  assistant referee_1_id INTEGER REFERENCES referees,
  assistant_referee_2_id INTEGER REFERENCES referees
);

CREATE TABLE referees
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE results
(
  id SERIAL PRIMARY KEY,
  team_id INTEGER REFERENCES teams,
  match_id INTEGER REFERENCES matches,
  result TEXT NOT NULL
);