angular.module('firstClass').controller('AddServiceController',
  ['$scope', '$mdToast', function ($scope, $mdToast) {

    $scope.addService = function () {
      var service = $scope.scout.addService($scope.newService.description, $scope.newService.hours);

      $scope.scout.save().then(function () {
        $mdToast.showSimple('Added Service Hours:' + ' ' + service.toString());
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