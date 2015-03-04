angular.module('firstClass').controller('AddDetailsSheetController', ['$scope', '$mdBottomSheet', 'scout', 'requirements', '$log',
  function ($scope, $mdBottomSheet, scout, requirements, $log) {

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

    $scope.requirements = requirements;
    debugger;
    $log.debug(requirements);

    $scope.dismiss = function () {
      $mdBottomSheet.hide();
    };

  }]);