angular.module('firstClass').controller('AddScoutModalController', ['$scope', '$modalInstance', 'troop', 'scoutService',
  function ($scope, $modalInstance, troop, scoutService) {

    $scope.addScout = function (scout) {
      scoutService.createNewScout(scout).then(function (scout) {
          troop.push(scout);
          $scope.addState = false;
          $scope.newScout = {};
          $modalInstance.close();
      });
    };

    $scope.cancel = function () {
      $scope.newScout = {};
      $modalInstance.dismiss();
    };

  }]);