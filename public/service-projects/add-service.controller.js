angular.module('firstClass').controller('AddServiceController',
  ['$scope', function ($scope) {

    $scope.addService = function () {
      var service = $scope.scout.addService($scope.newService.description, $scope.newService.hours);

      $scope.scout.save().then(function () {
        $scope.message = 'Added: ' + $scope.newService.description + ' - ' + $scope.newService.hours + ' hours';
        $scope.newService = {};
      }, function () {
        $scope.scout.removeService(service.id);
        $scope.message = 'Error - failed to add service';
      });
    };

    $scope.cancelAddService = function () {
      $scope.newService = {};
      $scope.message = '';
    }

  }]);