var passport = require('passport');

module.exports = function (app) {

  app.post('/login', passport.authenticate('local'), function (req, res) {
    res.send({message: 'Logged in successfully'});
  });

  app.post('/logout', function (req, res) {
    req.logout();
    res.send({message: 'Logged out'});
  });

};