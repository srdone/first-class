var Scout = require('mongoose').model('Scout');

exports.create = function (req, res, next) {

  // Create new scout object from the request body
  req.body.creator = req.user._id;
  var scout = new Scout(req.body);

  scout.save(function (err) {
    if (err) {
      return next(err);
    } else {
      res.json(scout);
    }
  });

};

exports.findByCreator = function (req, res) {
  Scout.find({creator: req.user.username})
    .sort({lastName: 1, firstName: 1})
    .exec(function (err, scouts) {
      if (err) {
        res.status(400);
      } else {
        res.json(scouts);
      }
    });
};

exports.update = function (req, res) {

  var scout = req.scout;



};

exports.delete = function (req, res) {

  var scout = req.scout;

  scout.remove(function (err) {
    if (err) {
      return res.status(400);
    } else {
      res.json(scout);
    }
  });

};
