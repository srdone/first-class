angular.module('firstClass').controller('AddScoutSheetController', ['$scope', '$mdBottomSheet', 'scoutService',
  function ($scope, $mdBottomSheet, scoutService) {

    $scope.addScout = function (scout) {
      scoutService.createNewScout(scout).then(function (scout) {
        $scope.newScout = {};
        $mdBottomSheet.hide();
      });
    };

    $scope.cancel = function () {
      $scope.newScout = {};
      $mdBottomSheet.hide();
    };

  }]);