angular.module('firstClass').directive('fcsTroopProgressChart', function () {

  return {
    restrict: 'E',
    scope: {
      troop: '=',
      height: '@',
      width: '@'
    },
    bindToController: true,
    controller: 'TroopProgressChartController',
    controllerAs: 'vm'
  }

});