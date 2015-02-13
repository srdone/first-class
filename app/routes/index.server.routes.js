module.exports = function (app) {
  var index = require('../controllers/index.server.controllers');
  app.get('/', index.render);
};