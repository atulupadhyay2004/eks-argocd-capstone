const express = require('express');
const app = express();

app.use(express.json());

const indexRouter = require('./routes/index');
const healthRouter = require('./routes/health');
const usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/health', healthRouter);
app.use('/users', usersRouter);

app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.path
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
