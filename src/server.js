'use strict';

//module dependencies
const express = require('express');
const app = express();

// local dependencies
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const notFoundHandler = require('./error-handlers/404')
const errorHandler = require('./error-handlers/500');

app.get('/person', logger, validator, getPerson);

function getPerson(req, res) {
  let name = req.query.name;
  res.status(200).json({ 'name': name })
}

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(PORT) {
  app.listen(PORT , () => {
    console.log(`Server up on port ${PORT}`);
  });
}

module.exports = {
  server: app,
  start: start
}
