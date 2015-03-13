angular.module('firstClass').controller('AddRequirementController',
  ['$scope', '$log', '$mdToast', function ($scope, $log, $mdToast) {

    $scope.addRequirement = function (requirement) {
      $scope.scout.addRequirement(requirement);
      $scope.scout.save().then(function (savedScout) {
        $mdToast.showSimple('Added requirement' + ' ' + requirement.name + ' and all prerequisites');
        $log.debug('Saved Scout:');
        $log.debug(savedScout);
        $scope.requirements = $scope.scout.getMissingRequirements();
      });
    };

    $scope.deleteRequirement = function (completedRequirement) {
      $scope.scout.removeRequirementById(completedRequirement.requirement.id);
      $scope.scout.save().then(function (savedScout) {
        $mdToast.showSimple('Deleted requirement' + ' ' + completedRequirement.requirement.name + ' ' + 'and all dependent requirements');
        $log.debug(savedScout);
        $scope.requirements = $scope.scout.getMissingRequirements();
      });
    };

  }]);