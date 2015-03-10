angular.module('firstClass').controller('AddDetailsSheetController', ['$scope', '$mdBottomSheet', 'scout', 'requirements', '$log',
  function ($scope, $mdBottomSheet, scout, requirements, $log) {

    $scope.addView = {
      selected: {name: 'Add Requirement', templateUrl: 'views/add-requirement.view.html'},
      options: [
        {name: 'Add Requirement', templateUrl: 'views/add-requirement.view.html'},
        {name: 'Add Campout', templateUrl: 'views/add-campout.view.html'},
        {name: 'Add Service', templateUrl: 'views/add-service.view.html'},
        {name: 'Add Position', templateUrl: 'views/add-position.view.html'}
      ]
    };

    $scope.scout = scout;

    $scope.requirements = requirements;
    $log.debug(requirements);

    $scope.dismiss = function () {
      $mdBottomSheet.hide();
    };

  }]);