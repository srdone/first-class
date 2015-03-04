angular.module('firstClass').factory('requirementService', ['persistenceService', function(persistenceService) {

  var existingRequirements = [];

  var Requirement = function (requirement) {
    this._id = requirement._id;
    this.id = requirement.id;
    this.name = requirement.name;
    this.description = requirement.description;
    this.requirementNumber = requirement.requirementNumber;
    this.order = requirement.order;
    this.requirementType = requirement.requirementType;
    this.parentRequirement = requirement.parentRequirement;
    this.numberOfChildrenToComplete = requirement.numberOfChildrenToComplete;
    this.completeAllChildren = requirement.completeAllChildren;
    this.effectiveDate = requirement.effectiveDate;
    this.awardName = requirement.id.split('-')[0];
  };
  Requirement.prototype.addPrereq = function (req) {
    this._prereqs.push(req.id);
  };
  // @param req {Requirement} A requirement object
  Requirement.prototype.removePrereq = function (req) {
    if (this._prereqs.indexOf(req.id) !== -1) {
      this._prereqs.splice(this._prereqs.indexOf(req.id), 1);
    }
  };
  Requirement.prototype.getPrereqs = function () {
    return this._prereqs;
  };
  Requirement.prototype.prereqsComplete = function (reqsCompleted) {
    for (var i = 0; i < this._prereqs.length; i++) {
      if (reqsCompleted.indexOf(this._prereqs[i]) === -1) {
        return false;
      }
    }
    return true;
  };

  var addRequirement = function (req) {
    var existingIds = existingRequirements.map(function (current) {
      return current.id;
    });
    if (existingIds.indexOf(req.id) === -1) {
      existingRequirements.push(req);
      console.log(existingRequirements);
    } else {
      throw new Error('The requirement \'' + req.id + '\' already exists.');
    }
  };

  var removeRequirement = function (req) {
    for (var i = 0; i < existingRequirements.length; i++) {
      if (existingRequirements[i] === req) {
        existingRequirements.splice(i, 1);
        break;
      }
    }
  };

  var getRequirement = function (id) {
    for (var i = 0; i < existingRequirements.length; i++) {
      if (existingRequirements[i].id === id) {
        return existingRequirements[i];
      }
    }
    //throw error if can't find the id
    throw new Error('The requirement id \'' + id + '\' does not exist');
  };

  var updateRequirement = function () {

  };

  var getAllRequirements = function () {
    return persistenceService.getAllRequirements().then(function (requirements) {
      existingRequirements = [];
      requirements.forEach(function (current) {
        existingRequirements.push(new Requirement (current));
      });
      return existingRequirements;
    });
  };

  return {
    'Requirement': Requirement,
    'addRequirement': addRequirement,
    'removeRequirement': removeRequirement,
    'getRequirement': getRequirement,
    'updateRequirement': updateRequirement,
    'getAllRequirements': getAllRequirements
  };
}]);