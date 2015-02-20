angular.module('firstClass').controller('AddPositionController',
  ['$scope', function ($scope) {

    $scope.addPosition = function () {
      var service = $scope.scout.addPosition($scope.newPosition.title,
                                             $scope.newPosition.startDate,
                                             $scope.newPosition.endDate);

      $scope.scout.save().then(function () {
        $scope.message = 'Added: ' + $scope.newPosition.title + ': '
                                   + $scope.newPosition.startDate + ' - '
                                   + $scope.newPosition.endDate;
        $scope.newPosition = {};
      }, function () {
        $scope.scout.removeService(service.id);
        $scope.message = 'Error - failed to add service';
      });
    };

    $scope.cancelAddService = function () {
      $scope.newPosition = {};
      $scope.message = '';
    }

  }]);