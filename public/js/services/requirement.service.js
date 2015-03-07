angular.module('firstClass').factory('requirementService', ['persistenceService', '$log', function(persistenceService, $log) {

  var existingRequirements = [];
  var existingRequirementsParentByChildId = {};
  var existingRequirementsChildrenByParentId = {};

  var _Requirement = function (requirement) {
    $log.debug('new Requirement called');
    $log.debug(requirement);
    this._id = requirement._id;
    this.id = requirement.id;
    this.name = requirement.name;
    this.description = requirement.description;
    this.category = requirement.category;
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
    return existingRequirementsChildrenByParentId[this.id] || [];
  };

  _Requirement.prototype.prereqsComplete = function (reqsCompleted) {
    var prereqs = this.getPrereqs() || [];
    var reqsCompletedIds = reqsCompleted.map(function (reqCompleted) {
      return reqCompleted.requirement.id;
    });
    var completedAllPrereqs = true;
    prereqs.forEach(function (currentPrereq) {
      // if the current prereq has prereqs, check those to make sure they are completed
      if (currentPrereq.getPrereqs()) {
        if (!currentPrereq.prereqsComplete(reqsCompleted)) {
          completedAllPrereqs = false;
        }
      }
      // verify that the current prereq id is listed in the list of completed requirement ids
      $log.debug('Index of currentPreqreq in completed list: ' + reqsCompleted.indexOf(currentPrereq.id));
      if (reqsCompletedIds.indexOf(currentPrereq.id) === -1) {
        completedAllPrereqs = false;
      }
    });
    // return true if it passes all the above tests.
    return completedAllPrereqs;
  };

  _Requirement.prototype.getParent = function () {
    return existingRequirementsParentByChildId[this.id];
  };

  var _getCompletedRanks = function (completedRequirements) {
    $log.debug('called requirementService.getCompletedRank');
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

    return ranks.filter(function (currentRank) {
      return currentRank.prereqsComplete(completedRequirements);
    });
  };

  var _getCurrentRank = function (completedRequirements) {
      var completedRanks = _getCompletedRanks(completedRequirements);
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
      existingRequirementsChildrenByParentId = _keyRequirementsByParent(existingRequirements);
      $log.debug('existingRequirementsChildrenByParentId');
      $log.debug(existingRequirementsChildrenByParentId);
      existingRequirementsParentByChildId = _keyRequirementsByChild(existingRequirements);
      $log.debug('existingRequirementsParentByChildId');
      $log.debug(existingRequirementsParentByChildId);
      return inflatedReqs;
    });
  };

  var _keyRequirementsByParent = function (requirements) {
    return requirements.reduce(function (previous, current) {
      if (previous[current.parentRequirement]) {
        previous[current.parentRequirement].push(current);
      } else {
        previous[current.parentRequirement] = [];
        previous[current.parentRequirement].push(current);
      }
      return previous;
    }, {});
  };

  var _keyRequirementsByChild = function (requirements) {
    return requirements.reduce(function (previous, current) {
      previous[current.id] = _findParentRequirementById(current.parentRequirement, requirements);
      return previous;
    }, {});
  };

  var _findParentRequirementById = function (parentId, requirements) {
    for (var i = 0; i < requirements.length; i++) {
      if (requirements[i].id === parentId) {
        return requirements[i];
      }
    }
    return undefined;
  };

  var _getPercentProgressToFirstClass = function (completedRequirements) {
    return (completedRequirements.length / existingRequirements.length);
  };

  var _getMissingRequirements = function (completedRequirements) {
    var completedRequirementIds = completedRequirements.map(function (current) {
      return current.requirement.id;
    });

    return existingRequirements.filter(function (current) {
      return (completedRequirementIds.indexOf(current.id) === -1);
    });
  };

  return {
    'Requirement': _Requirement,
    'getAllRequirements': _getAllRequirements,
    'getCompletedRanks': _getCompletedRanks,
    'getCurrentRank': _getCurrentRank,
    'getPercentProgressToFirstClass': _getPercentProgressToFirstClass,
    'getMissingRequirements': _getMissingRequirements
  };
}]);