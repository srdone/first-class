angular.module('firstClass').controller('AddDetailsModalController', ['$scope', '$modalInstance', 'scout',
  function ($scope, $modalInstance, scout) {

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
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss();
    }

  }]);