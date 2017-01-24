angular.module('firstClass').directive('fcsPositionSummary', function () {

  return {
    restrict: 'E',
    scope: {
      position: '='
    },
    templateUrl: 'positions/position-summary.template.html'
  }

});