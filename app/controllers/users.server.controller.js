var User = require('mongoose').model('User');

var getErrorMessage = function (err) {
  var message = '';

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Username already exists';
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    for (var errorName in err.errors) {
      if (err.errors[errorName].message) {
        message = err[errorName].message;
      }
    }
  }

  return message;
};

exports.create = function (req, res, next) {
  var user = new User(req.body);

  user.save(function (err) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      res.json(user);
    }
  });
};

exports.signup = function (req, res, next) {
  if (!req.user) {
    var user = new User(req.body);
    var message = null;

    user.save(function (err) {
      if (err) {
        console.log(err);
        res.redirect('/failedlogin');
      }
      req.login(user, function (err) {
        if (err) {
          return next(err);
        } else {
          res.redirect('/loggedin');
        }
      });
    });
  }
};

exports.signout = function (req, res, next) {
  req.logout();
  res.redirect('/loggedout');
};

