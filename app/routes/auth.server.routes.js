var passport = require('passport'),
  User = require('mongoose').model('User');

module.exports = function (app) {

  app.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      if (err) {
        next(err);
      } else if (!user) {
        res.send({message: 'user does not exist', userDoesNotExist: true});
      } else {
        req.login(user, function (err) {
          if (err) {
            next(err);
          } else {
            res.send({message: 'Logged in successfully', username: req.user.username});
          }
        })
      }
    })(req,res,next);
  });

  app.post('/logout', function (req, res) {
    req.logout();
    res.send({message: 'Logged out'});
  });

  app.get('/loggedin', function (req, res) {
    if (req.isAuthenticated()) {
      res.send({message: 'currently logged in', username: req.user.username});
    } else {
      res.status(401);
    }
  });

  app.post('/signup', function (req, res, next) {
    var user = new User(req.body);

    user.save(function (err) {
      if (err) {
        next(err);
      } else {
        res.json({username: user.username});
      }
    });
  });

};