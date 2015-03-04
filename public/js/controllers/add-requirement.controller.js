angular.module('firstClass').controller('AddRequirementController',
  ['$scope', function ($scope) {

    $scope.test = 'Add Requirement Controller';

    $scope.addRequirement = function (requirement) {
      $scope.scout.addRequirement(requirement);
      $scope.scout.save();
    };

  }]);