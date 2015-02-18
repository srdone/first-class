var Requirement = require('mongoose').model('Requirement');

exports.listRequirements = function (req, res, next) {
  Requirement.find({}).exec(function (err, requirements) {
    if (err) {
      next(err);
    } else {
      res.json(requirements);
    }
  });
};