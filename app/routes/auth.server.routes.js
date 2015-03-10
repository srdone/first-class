var passport = require('passport'),
  User = require('mongoose').model('User');

module.exports = function (app) {

  app.post('/login', passport.authenticate('local', {failureFlash: true}), function (req, res) {
    res.send({message: 'Logged in successfully', username: req.user.username});
  });

  app.post('/logout', function (req, res) {
    req.logout();
    res.send({message: 'Logged out'});
  });

  app.get('/loggedIn', function (req, res, next) {
    if (req.isAuthenticated()) {
      res.json({message: 'currently logged in', username: req.user.username});
    } else {
      res.send(401);
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