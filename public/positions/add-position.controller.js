angular.module('firstClass').controller('AddPositionController',
  ['$scope', function ($scope) {

    $scope.addPosition = function () {
      var position = $scope.scout.addPosition($scope.newPosition.title,
                                             $scope.newPosition.startDate,
                                             $scope.newPosition.endDate);

      $scope.scout.save().then(function () {
        $scope.message = 'Added: ' + $scope.newPosition.title + ': '
                                   + $scope.newPosition.startDate + ' - '
                                   + $scope.newPosition.endDate;
        $scope.newPosition = {};
      }, function () {
        $scope.scout.removePosition(position.id);
        $scope.message = 'Error - failed to add position';
      });
    };

    $scope.cancelAddPosition = function () {
      $scope.newPosition = {};
      $scope.message = '';
    }

  }]);