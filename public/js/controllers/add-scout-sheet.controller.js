angular.module('firstClass').controller('AddScoutSheetController', ['$scope', '$mdBottomSheet', 'troop', 'scoutService',
  function ($scope, $mdBottomSheet, troop, scoutService) {

    $scope.addScout = function (scout) {
      scoutService.createNewScout(scout).then(function (scout) {
        troop.push(scout);
        $scope.addState = false;
        $scope.newScout = {};
        $mdBottomSheet.hide();
      });
    };

    $scope.cancel = function () {
      $scope.newScout = {};
      $mdBottomSheet.hide();
    };

  }]);