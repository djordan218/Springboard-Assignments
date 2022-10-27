const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const bookRoutes = require('./routes/books');

// this runs for every single request
app.use(express.json());
app.use('/books', bookRoutes);

// 404 handler
app.use((req, res, next) => {
  const e = new ExpressError('Not Found', 404);
  return next(e);
});

// generic error handler
app.use((err, req, res, next) => {
  let status = err.status || 500;
  return res.status(status).json({
    error: { message: err.message, status: status },
  });
});

// port handler
app.listen(3000, function () {
  console.log('App on port 3000');
});
