const express = require('express');
const axios = require('axios');
const ExpressError = require('./expressError');

const app = express();
app.use(express.json());

// Send POST request of { "developers": ["username", "username"] }
// return values of name and bio text
app.post('/', async function (req, res, next) {
  const devs = []; // will push data into array
  try {
    const dev = req.body.developers;
    for (i in dev) {
      // looping over usernames sent to API
      const username = dev[i];
      const res = await axios.get(`https://api.github.com/users/${username}`);
      const picked = (({ name, bio }) => ({ name, bio }))(res.data);
      devs.push(picked);
    }
    return res.send(devs);
  } catch {
    next();
  }
});

// 404 handler
app.use((req, res, next) => {
  const e = new ExpressError('Not Found', 404);
  next(e);
});

// generic error handler
app.use((err, req, res, next) => {
  let status = err.status || 500;
  let message = err.msg;

  res.status(status).json({
    error: { message, status },
  });
});

// port handler
app.listen(3000, function () {
  console.log('App on port 3000');
});
