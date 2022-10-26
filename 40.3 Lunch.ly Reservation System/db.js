// require pg and destructure to pg.Client
const { Client } = require('pg');

let DB_URI = 'postgresql://postgres:password@127.0.0.1:5432/lunchly';

let db = new Client({
  connectionString: DB_URI,
});

db.connect();

module.exports = db;
