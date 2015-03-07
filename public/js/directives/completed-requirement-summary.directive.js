angular.module('firstClass').directive('fcsCompletedRequirementSummary', function () {

  return {
    restrict: 'E',
    scope: {
      completedRequirement: '='
    },
    templateUrl: 'js/directives/directive-templates/completed-requirement-summary.template.html'
  }

});