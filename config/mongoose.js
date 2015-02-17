var config = require('./env/development.js'),
  mongoose = require('mongoose');

module.exports = function () {
  var db = mongoose.connect(config.db);

  //register schemas
  require('../app/models/user.server.model');
  require('../app/models/scout.server.model');

  return db;
};