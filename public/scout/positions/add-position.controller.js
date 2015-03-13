angular.module('firstClass').controller('AddPositionController',
  ['$scope', '$mdToast', function ($scope, $mdToast) {

    $scope.addPosition = function () {
      var position = $scope.scout.addPosition($scope.newPosition.title,
                                             $scope.newPosition.startDate,
                                             $scope.newPosition.endDate);

      $scope.scout.save().then(function () {
        $mdToast.showSimple('Added Position: ' + position.toString());
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