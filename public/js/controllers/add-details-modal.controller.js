angular.module('firstClass').controller('AddDetailsModalController', ['$scope', '$modalInstance', 'scout',
  function ($scope, $modalInstance, scout) {

    $scope.addView = {
      selected: 'views/add-service.view.html',
      options: [
        {name: 'Add Service', templateUrl: 'views/add-service.view.html', controller: 'AddServiceController'},
        {name: 'Add Position', templateUrl: 'views/add-position.view.html', controller: 'AddPositionController'},
        {name: 'Add Campout', templateUrl: 'views/add-campout.view.html', controller: 'AddCampoutController'},
        {name: 'Add Requirement', templateUrl: 'views/add-requirement.view.html', controller: 'AddRequirementController'}
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