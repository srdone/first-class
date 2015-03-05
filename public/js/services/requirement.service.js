angular.module('firstClass').factory('requirementService', ['persistenceService', '$log', function(persistenceService, $log) {

  var existingRequirements = [];

  var _Requirement = function (requirement) {
    $log.debug('new Requirement called');
    $log.debug(requirement);
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
  _Requirement.prototype.getPrereqs = function () {
    var that = this;
    return existingRequirements.filter(function (current) {
      return (current.parentRequirement === that.id);
    });
  };
  _Requirement.prototype.prereqsComplete = function (reqsCompleted) {
    var prereqs = this.getPrereqs() || [];
    $log.debug('Prereqs:');
    $log.debug(prereqs);
    var reqsCompletedIds = reqsCompleted.map(function (reqCompleted) {
      return reqCompleted.id;
    });
    prereqs.forEach(function (currentPrereq) {
      // if the current prereq has prereqs, check those to make sure they are completed
      if (currentPrereq.getPrereqs()) {
        if (!currentPrereq.prereqsComplete(reqsCompleted)) {
          return false;
        }
      }
      // verify that the current prereq id is listed in the list of completed requirement ids
      if (reqsCompletedIds.indexOf(currentPrereq.id) === -1) {
        return false;
      }
    });
    // return true if it passes all the above tests.
    return true;
  };

  var _getCurrentRank = function (completedRequirements) {
    $log.debug('called requirementService.getCurrentRank');
    $log.debug('Completed Requirements:');
    $log.debug(completedRequirements);

    $log.debug('Existing Requirements');
      $log.debug(existingRequirements);
      var ranks = existingRequirements.filter(function (currentRequirement) {
        if (currentRequirement.requirementType === 'rank') {
          return currentRequirement;
        }
      });
      $log.debug('Checking Ranks:');
      $log.debug(ranks);

      var completedRanks = ranks.filter(function (currentRank) {
        return currentRank.prereqsComplete(completedRequirements);
      });
      $log.debug('Completed Ranks: ');
      $log.debug(completedRanks);

      completedRanks.sort(function (a, b) {
        if (a.order < b.order) {
          return -1;
        } else if (a.order > b.order) {
          return 1;
        } else {
          return 0;
        }
      });

      return completedRanks[completedRanks.length - 1];
  };

  var _getAllRequirements = function () {
    $log.debug('getAllRequirements called');
    return persistenceService.getAllRequirements().then(function (requirements) {
      var inflatedReqs = [];
      requirements.forEach(function (current) {
        inflatedReqs.push(new _Requirement(current));
      });
      existingRequirements = inflatedReqs;
      return inflatedReqs;
    });
  };

  return {
    'Requirement': _Requirement,
    'getAllRequirements': _getAllRequirements,
    'getCurrentRank': _getCurrentRank
  };
}]);