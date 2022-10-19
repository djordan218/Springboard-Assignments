const express = require('express');
const ExpressError = require('./expressError');
const itemsRoutes = require('./routes/items');
const app = express();

app.use(express.json());
app.use('/items', itemsRoutes);

// 404 handler
app.use((req, res, next) => {
  return new ExpressError('Not Found', 404);
});

// generic error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

// port handler
app.listen(3000, function () {
  console.log('App on port 3000');
});
