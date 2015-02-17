var express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  mongoose = require('mongoose'),
  crypto = require('crypto'),
  methodOverride = require('method-override');

var app = express();
mongoose.connect('mongodb://localhost/first-class-dev');

//mongoose user schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  salt: {
    type: String
  }
});

// this pre save function taken from MEAN Web Development - PACKT Publishing
UserSchema.pre('save', function (next) {
  if (this.password) {
    this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
    this.password = this.hashPassword(this.password);
  }

  next();
});

// this hash password method from MEAN Web Developtment - PACKT Publishing
UserSchema.methods.hashPassword = function (password) {
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

// this authentication method from MEAN Web Development - PACKT Publishing
UserSchema.methods.authenticate = function (password) {
  return this.password === this.hashPassword(password);
};

var User = mongoose.model('User', UserSchema);

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

// serve the index file
app.get('/', function (req, res) {
  req.session.lastVisit = Date.now();
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/lastVisit', function (req, res) {
  res.json({'lastVisit':req.session.lastVisit});
});

app.route('/auth')
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


// server static files
app.use('/', express.static(__dirname + '/public/'));

var server = app.listen(3000, function () {
  var address = server.address().address;
  var port = server.address().port;

  console.log('Listening on http://%s:%s', address, port);
});