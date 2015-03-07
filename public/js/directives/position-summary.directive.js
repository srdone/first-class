angular.module('firstClass').directive('fcsPositionSummary', function () {

  return {
    restrict: 'E',
    scope: {
      position: '='
    },
    templateUrl: 'js/directives/directive-templates/position-summary.template.html'
  }

});