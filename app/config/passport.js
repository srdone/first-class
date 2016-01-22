var passport = require('passport'),
  User = require('mongoose').model('User'),
  LocalStrategy = require('passport-local').Strategy;

module.exports = function () {
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, '-password, -salt', function (err, user) {
      done(err, user);
    });
  });

  passport.use(new LocalStrategy(function (username, password, done) {
    User.findOne({username: username}).exec(function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {message: 'User ' + username + ' does not exist.'});
      }
      if (!user.authenticate(password)) {
        return done(null, false, {message: 'Invalid password'});
      }
      done(null, user);
    });
  }));
};