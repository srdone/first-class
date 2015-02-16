var users = require('../controllers/users.server.controller.js');

module.exports = function(app) {

  app.get('/', function (req, res) {
    res.send('Hello World Two');
  });

  app.post('/users', users.create);

};