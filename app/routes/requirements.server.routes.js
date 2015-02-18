var requirements = require('../controllers/requirements.server.controller');

module.exports = function (app) {

  app.get('/requirements', requirements.listRequirements);

};