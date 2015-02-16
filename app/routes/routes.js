var users = require('../controllers/users.server.controller.js'),
  fs = require('fs'),
  passport = require('passport');

module.exports = function(app) {

  app.get('/', function (req, res) {
    res.send('Hello World Two');
  });

  app.get('/loggedin', function (req, res) {
    res.send('Sucessfully Logged In!');
  });

  app.get('/failedlogin', function (req, res) {
    res.send('Failed loggin in :(');
  });

  app.get('/loggedout', function (req, res) {
    res.send('Logged out successfully');
  });

  app.route('/signup')
    .get(function (req, res) {
      fs.readFile('public/signup.html', 'utf8', function (err, text) {
        if(err) {
          res.send(err);
        }
        res.send(text);
      });
    })
    .post(users.signup);

  app.route('/signin')
    .get(function (req, res) {
      fs.readFile('public/signin.html', 'utf8', function (err, text) {
        if (err) {
          res.send(err);
        }
        res.send(text);
      });
    })
    .post(function(req, res, next) {
      passport.authenticate('local', function(err, user, info) {
        if (err) {
          return next(err);
        }
        if (!user) {
          console.log(user);
          return res.redirect('/failedlogin');
        }
        req.login(user, function (err) {
          if (err) {
            return next(err);
          }
          console.log(user.username);
          return res.redirect('/loggedin');
        });
      })(req, res, next);
    });

  app.get('/signout', users.signout);

  app.post('/users', users.create);

};