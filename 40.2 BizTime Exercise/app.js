const express = require('express');
const ExpressError = require('./expressError');
const companiesRoutes = require('./routes/companies');
const invoicesRoutes = require('./routes/invoices');

const app = express();

app.use(express.json());
app.use('/companies', companiesRoutes);
app.use('/invoices', invoicesRoutes);

// 404 handler
app.use((req, res, next) => {
  const e = new ExpressError('Not Found', 404);
  return next(e);
});

// generic error handler
app.use((err, req, res, next) => {
  let status = err.status || 500;
  let message = err.msg;

  res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
