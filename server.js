var express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  mongoose = require('mongoose'),
  methodOverride = require('method-override'),
  passport = require('passport'),
  cookieParser = require('cookie-parser'),
  connectFlash = require('connect-flash');

var app = express();
mongoose.connect('mongodb://localhost/first-class-dev');

// import models
require('./app/models/user.server.model');
require('./app/models/scout.server.model');
require('./app/models/requirement.server.model');

var User = mongoose.model('User');
var Scout = mongoose.model('Scout');

// import and run passport config
require('./app/config/passport.js')();

// add logging
app.use(morgan('dev'));
// parse json data
app.use(bodyParser.json());
// parse url query parameters
app.use(bodyParser.urlencoded({ extended: true }));
// override rest methods
app.use(methodOverride());

//import configuration for session
var config = require('./app/config/config.js');

app.use(cookieParser(config.sessionSecret));

// configure session
app.use(session({
  cookie: {},
  secret: config.sessionSecret,
  saveUninitialized: false, //make sure we don't save empty sessions
  resave: false //don't save when session has not changed
}));

app.use(connectFlash());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// middleware to use on routes to secure them - I got an example of this code from the web
var requireAuthentication = function (req, res, next) {
  if (!req.isAuthenticated()) {
    res.status(401).send({
      message: 'User not authenticated'
    });
  } else {
    next();
  }
};

function mainRoute (req, res) {
  res.redirect('/');
  req.session.lastVisit = Date.now();
  res.sendFile(__dirname + '/public/index.html');
};

// index route
app.get('/', function (req, res) {
  req.session.lastVisit = Date.now();
  res.sendFile(__dirname + '/public/index.html');
});

// add route middleware
require('./app/routes/auth.server.routes')(app); //login and logout routes
require('./app/routes/users.server.routes')(app); //user routes
require('./app/routes/scouts.server.routes')(app); //scout routes
require('./app/routes/requirements.server.routes')(app); //requirement routes

// serve static files
app.use('/', express.static(__dirname + '/public/'));

app.get('*', mainRoute);

var server = app.listen(3000, function () {
  var address = server.address().address;
  var port = server.address().port;

  console.log('Listening on http://%s:%s', address, port);
});