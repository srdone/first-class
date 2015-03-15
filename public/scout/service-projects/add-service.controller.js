angular.module('firstClass').controller('AddServiceController',
  ['$scope', '$mdToast', function ($scope, $mdToast) {

    var resetForm = function () {
      $scope.newService = {};
      $scope.addServiceForm.$setPristine();
    };

    $scope.addService = function () {
      var service = $scope.scout.addService($scope.newService.description, $scope.newService.hours);

      $scope.scout.save().then(function () {
        $mdToast.showSimple('Added Service Hours:' + ' ' + service.toString());
        resetForm();
      }, function () {
        $scope.scout.removeService(service.id);
      });
    };

    $scope.cancelAddService = function () {
      resetForm();
    }

  }]);