angular.module('firstClass').directive('fcsPositionList', function () {

  return {
    restrict: 'E',
    scope: {
      positions: '='
    },
    templateUrl: 'positions/position-list.template.html'
  }

});