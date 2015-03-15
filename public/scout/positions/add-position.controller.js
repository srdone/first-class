angular.module('firstClass').controller('AddPositionController',
  ['$scope', '$mdToast', function ($scope, $mdToast) {

    var resetForm = function () {
      $scope.newPosition = {};
      $scope.addPositionForm.$setPristine();
    };

    $scope.addPosition = function () {
      var position = $scope.scout.addPosition($scope.newPosition.title,
                                             $scope.newPosition.startDate,
                                             $scope.newPosition.endDate);

      $scope.scout.save().then(function () {
        $mdToast.showSimple('Added Position: ' + position.toString());
        resetForm();
      }, function () {
        $scope.scout.removePosition(position.id);
      });
    };

    $scope.cancelAddPosition = function () {
      resetForm();
    }

  }]);