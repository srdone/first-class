angular.module('firstClass').controller('AddCampoutController',
  ['$scope', function ($scope) {

    $scope.addCampout = function () {
      var campout = $scope.scout.addCampout($scope.newCampout.description,
                                            $scope.newCampout.startDate,
                                            $scope.newCampout.endDate);

      $scope.scout.save().then(function () {
        $scope.message = 'Added: ' + $scope.newCampout.description + ': '
                                   + $scope.newCampout.startDate + ' - '
                                   + $scope.newCampout.endDate;
        $scope.newCampout = {};
      }, function () {
        $scope.scout.removeCampout(campout.id);
        $scope.message = 'Error - failed to add campout';
      });
    };

    $scope.cancelAddPosition = function () {
      $scope.newCampout = {};
      $scope.message = '';
    };

  }]);