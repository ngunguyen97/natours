const express = require('express');
const morgan = require('morgan');
const tourRouters = require('./routers/tourRouters');
const userRouters = require('./routers/userRouters');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouters);
app.use('/api/v1/users', userRouters);

module.exports = app;
