angular.module('firstClass').controller('AddRequirementController',
  ['$scope', '$log', function ($scope, $log) {

    $scope.addRequirement = function (requirement) {
      $scope.scout.addRequirement(requirement);
      $scope.scout.save().then(function (savedScout) {
        $log.debug('Saved Scout:');
        $log.debug(savedScout);
      });
    };

    $scope.deleteRequirement = function (completedRequirement) {
      $scope.scout.removeRequirementById(completedRequirement.requirement.id);
      $scope.scout.save().then(function (savedScout) {
        $log.debug(savedScout);
      });
    };

  }]);