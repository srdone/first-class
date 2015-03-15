angular.module('firstClass').controller('AddCampoutController',
  ['$scope', '$mdToast', function ($scope, $mdToast) {

    var resetForm = function () {
      $scope.newCampout = {};
      $scope.addCampoutForm.$setPristine();
    };

    $scope.addCampout = function () {
      var campout = $scope.scout.addCampout($scope.newCampout.description,
                                            $scope.newCampout.startDate,
                                            $scope.newCampout.endDate);

      $scope.scout.save().then(function () {
        $mdToast.showSimple('Added campout: ' + campout.toString());
        resetForm();
      }, function () {
        $scope.scout.removeCampout(campout.id);
        $mdToast.showSimple('Server Error - failed to add campout');
      });
    };

    $scope.cancelAddPosition = function () {
      resetForm();
    };

  }]);