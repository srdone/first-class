angular.module('firstClass').directive('fcsPositionList', function () {

  return {
    restrict: 'E',
    scope: {
      positions: '='
    },
    templateUrl: 'scout/positions/position-list.template.html'
  }

});