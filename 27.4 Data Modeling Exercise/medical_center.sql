CREATE DATABASE medical_center_db

CREATE TABLE doctors
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  specialty TEXT NOT NULL
);

CREATE TABLE visits
(
  id SERIAL PRIMARY KEY,
  doctor_id INTEGER REFERENCES doctors,
  patient_id INTEGER REFERENCES patients,
  date TIMESTAMP
);

CREATE TABLE patients
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  insurance TEXT NOT NULL,
  birthday DATE
);

CREATE TABLE diagnoses
(
  id SERIAL PRIMARY KEY,
  visit_id INTEGER REFERENCES visits,
  disease_id INTEGER REFERENCES diseases,
  notes TEXT
);

CREATE TABLE diseases
(
  id SERIAL PRIMARY KEY,
  player_id INTEGER REFERENCES players, 
  match_id INTEGER REFERENCES goals,
  team_id INTEGER REFERENCES teams
);
