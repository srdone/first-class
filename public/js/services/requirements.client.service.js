angular.module('firstClass').factory('requirementService', function() {

  var existingRequirements = [];

  var Requirement = function (desc, itemNum, order, award, isAward, type) {
    this.desc = desc || '';
    this.itemNum = itemNum || '';
    this.order = order || 0;
    this.award = award || '';
    this.isAward = isAward || false;
    this.type = type || 'requirement';
    this._prereqs = [];
    this.parentRequirement = null;

    this.id = this.generateId();
  };
  Requirement.prototype.generateId = function () {
    var id = this.award + '-' + this.itemNum;
    return id;
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
    return existingRequirements;
  };

  return {
    'Requirement': Requirement,
    'addRequirement': addRequirement,
    'removeRequirement': removeRequirement,
    'getRequirement': getRequirement,
    'updateRequirement': updateRequirement,
    'getAllRequirements': getAllRequirements
  };
});