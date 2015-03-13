angular.module('firstClass').directive('fcsPositionSummary', function () {

  return {
    restrict: 'E',
    scope: {
      position: '='
    },
    templateUrl: 'scout/positions/position-summary.template.html'
  }

});