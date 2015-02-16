var config = require('./env/development.js'),
  express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  passport = require('passport'),
  session = require('express-session');

module.exports = function () {

  var app = express();

  //register logging middleware
  app.use(morgan('dev'));

  //register bodyparser middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  //register session middleware
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  //register passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

  require('../app/routes/routes.js')(app);

  return app;

};
