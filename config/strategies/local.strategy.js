var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  User = require('mongoose').model('User');

module.exports = function () {

  passport.use(new LocalStrategy(function (username, password, done) {
    console.log('in local strategy');
    User.findOne({
      username: username
    }, function (err, user) {
      if (err) {
        return done(err);
      } else if (!user) {
        return done(null, false, {message: 'unknown user'});
      } else if (!user.authenticate(password)) {
        return done(null, false, {message: 'invalid password'});
      } else {
        return done(null, user);
      }
    });
  }));

};