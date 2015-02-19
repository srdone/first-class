var scouts = require('../controllers/scouts.server.controller'),
  requireAuthentication = require('../middleware/require-authentication.middleware').requireAuthentication;

module.exports = function (app) {
  // idea from http://stackoverflow.com/questions/12276046/nodejs-express-how-to-secure-a-url
  app.all('/scouts', requireAuthentication);

  app.route('/scouts')
    .get(scouts.scoutsByOwner)
    .post(scouts.createScout);

  app.route('/scouts/:scoutId')
    .get(scouts.hasAuthorization, scouts.readScout)
    .put(scouts.hasAuthorization, scouts.updateScout)
    .delete(scouts.hasAuthorization, scouts.deleteScout);

  app.param('scoutId', scouts.scoutById);

};