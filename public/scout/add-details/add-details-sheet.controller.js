angular.module('firstClass').controller('AddDetailsSheetController', ['$scope', '$mdBottomSheet', 'scout', 'requirements', '$log',
  function ($scope, $mdBottomSheet, scout, requirements, $log) {

    $scope.addView = {
      selected: {name: 'Add Requirement', templateUrl: 'scout/rank-requirements/add-requirement.view.html'},
      options: [
        {name: 'Add Requirement', templateUrl: 'scout/rank-requirements/add-requirement.view.html'},
        {name: 'Add Campout', templateUrl: 'scout/campouts/add-campout.view.html'},
        {name: 'Add Service', templateUrl: 'scout/service-projects/add-service.view.html'},
        {name: 'Add Position', templateUrl: 'scout/positions/add-position.view.html'}
      ]
    };

    $scope.scout = scout;

    $scope.requirements = requirements;
    $log.debug(requirements);

    $scope.dismiss = function () {
      $mdBottomSheet.hide();
    };

  }]);