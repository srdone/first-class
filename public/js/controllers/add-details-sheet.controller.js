angular.module('firstClass').controller('AddDetailsSheetController', ['$scope', '$mdBottomSheet', 'scout',
  function ($scope, $mdBottomSheet, scout) {

    $scope.addView = {
      selected: {name: 'Add Service', templateUrl: 'views/add-service.view.html'},
      options: [
        {name: 'Add Service', templateUrl: 'views/add-service.view.html'},
        {name: 'Add Position', templateUrl: 'views/add-position.view.html'},
        {name: 'Add Campout', templateUrl: 'views/add-campout.view.html'},
        {name: 'Add Requirement', templateUrl: 'views/add-requirement.view.html'}
      ]
    };

    $scope.scout = scout;

    $scope.ok = function () {
      $mdBottomSheet.hide();
    };

    $scope.cancel = function () {
      $mdBottomSheet.cancel();
    }

  }]);