angular.module('firstClass').controller('EditScoutSheetController', ['$scope', '$mdBottomSheet', 'editingScout',
  function ($scope, $mdBottomSheet, editingScout) {

    $scope.editingScout = editingScout;

    $scope.addScout = function (scout) {
      $mdBottomSheet.hide($scope.editingScout);
    };

    $scope.cancel = function () {
      $scope.editingScout = {};
      $mdBottomSheet.cancel();
    };

  }]);