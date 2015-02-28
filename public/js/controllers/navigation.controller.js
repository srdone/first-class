angular.module('firstClass').controller('NavigationController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {

  $scope.toggleMenu = function () {
    $mdSidenav('left').toggle();
  };

}]);