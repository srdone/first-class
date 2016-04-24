angular.module('firstClass').directive('fcsPositionSummary', function () {

  return {
    restrict: 'E',
    scope: {
      position: '='
    },
    templateUrl: 'common/directives/position-summary/position-summary.template.html'
  }

});