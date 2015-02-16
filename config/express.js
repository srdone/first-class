var express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser');

module.exports = function () {

  var app = express();

  app.use(morgan('dev'));

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  require('../app/routes/routes.js')(app);

  return app;

};
