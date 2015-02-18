var Scout = require('mongoose').model('Scout')

exports.hasAuthorization = function (req, res, next) {
  console.log('has authorization called');
  if (req.scout.creator !== req.user.username) {
    res.status(403).send({message: 'user is not the owner'});
  } else {
    next();
  }
};

// the idea for this pattern comes from MEAN Web Development by PACKT Publishing
exports.scoutById = function (req, res, next, id) {
  console.log('scoutById called');
  Scout.findById(id).exec(function (err, scout) {
    if (err) {
      next(err);
    } else if (!scout) {
      next(new Error('Failed to load scout ' + id));
    } else {
      req.scout = scout;
      next();
    }
  });
};

exports.scoutsByOwner = function (req, res, next) {
  console.log('scoutsByOwner called');
  console.log(req.user.username);
  Scout.find({creator: req.user.username}).exec(function (err, scouts) {
    if(err) {
      next(err);
    } else {
      res.json(scouts);
    }
  });
};

exports.readScout = function (req, res) {
  console.log('readScout called');
  res.json(req.scout);
};

exports.createScout = function (req, res, next) {
  console.log('createScout called');
  req.body.creator = req.user.username;
  var scout = new Scout(req.body);

  scout.save(function (err) {
    if (err) {
      next(err);
    } else {
      res.json(scout);
    }
  });
};

exports.updateScout = function (req, res) {
  console.log('updateScout called');
  var scout = req.scout;

  scout.firstName = req.body.firstName;
  scout.lastName = req.body.lastName;
  scout.photoUrl = req.body.photoUrl;
  scout.isOA = req.body.isOA;
  scout.completedRequirements = req.body.completedRequirements;
  scout.currentPatrol = req.body.currentPatrol;
  scout.troop = req.body.troop;
  scout.positionHistory = req.body.positionHistory;
  scout.campingHistory = req.body.campingHistory;
  scout.serviceHistory = req.body.serviceHistory;

  scout.save(function (err) {
    if (err) {
      res.status(400).send({message: 'an error occurred'});
    } else {
      res.json(scout);
    }
  });
};

exports.deleteScout = function (req, res) {
  console.log('deleteScout called');
  var scout = req.scout;

  scout.remove(function (err) {
    if (err) {
      res.status(400).send({message: 'an error occurred'});
    } else {
      res.json(scout);
    }
  });
};