angular.module('firstClass').directive('fcsCompletedRequirementSummary', function () {

  return {
    restrict: 'E',
    scope: {
      completedRequirement: '='
    },
    transclude: true,
    templateUrl: 'rank-requirements/completed-requirement-summary.template.html'
  }

});