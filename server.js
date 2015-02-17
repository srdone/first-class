var express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  mongoose = require('mongoose'),
  methodOverride = require('method-override'),
  passport = require('passport');

var app = express();
mongoose.connect('mongodb://localhost/first-class-dev');

// import models
require('./app/models/user.server.model');

var User = mongoose.model('User');

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

// configure session
app.use(session({
  secret: 'developmentSecret',
  saveUninitialized: false, //make sure we don't save empty sessions
  resave: false //don't save when session has not changed
}));

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

// middleware to make sure the user owns the document - my idea - how to implement?
var requireOwnership = function (req, res, next) {
  //implementation details
};

// serve the index file
app.get('/', function (req, res) {
  req.session.lastVisit = Date.now();
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/lastVisit', requireAuthentication, function (req, res) {
  res.json({'lastVisit':req.session.lastVisit});
});

app.post('/login', passport.authenticate('local'), function (req, res) {
  res.send('Hooray!');
});

app.post('/logout', function (req, res) {
  req.logout();
  res.send('LoggedOut');
});

app.route('/users')
  .post(function (req, res, next) {
    var user = new User(req.body);

    user.save(function (err) {
      if (err) {
        return next(err);
      } else {
        res.json(user);
      }
    });
  })
  .get(function (req, res, next) {
    User.find({}).exec(function (err, users) {
      if (err) {
        return next(err);
      } else {
        res.json(users);
      }
    });
  })
  .delete(function (req, res, next) {
    User.findOneAndRemove({username: req.body.username}).exec(function (err, user) {
      if (err) {
        return next(err);
      } else if (!user) {
        res.send({
          message: 'user does not exist'
        });
      } else {
        res.send({
          message: 'user ' + user.username + ' successfully removed.'
        });
      }
    });
  })
  .put(function (req, res, next) {
    User.findByIdAndUpdate(req.body._id, req.body).exec(function (err, user) {
      if (err) {
        return next(err);
      } else {
        res.json(user);
      }
    });
  });


// serve static files
app.use('/', express.static(__dirname + '/public/'));

var server = app.listen(3000, function () {
  var address = server.address().address;
  var port = server.address().port;

  console.log('Listening on http://%s:%s', address, port);
});