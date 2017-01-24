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

// add local authentication strategy - roughly from MEAN Web Development by PACKT Publishing
// the "done" callback is used to signal if authentication succeeded:
// done(err) means there was an error
// done(null, false) means authentication failed for some reason
// done(null, user) means authentication succeeded and it takes the user to be added to the session
  passport.use(new LocalStrategy(function (username, password, done) {
    User.findOne({username: username}).exec(function (err, user) {
      if (err) {
        done(err);
      } else if (!user) {
        done(null, false, {message: 'User ' + username + ' does not exist.'});
      } else if (!user.authenticate(password)) {
        done(null, false, {message: 'Invalid password'});
      } else {
        done(null, user);
      }
    });
  }));
};