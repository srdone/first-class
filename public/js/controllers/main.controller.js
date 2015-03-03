'use strict';

angular.module('firstClass').controller('MainController', ['$scope', '$mdSidenav', '$state', function($scope, $mdSidenav, $state) {
	$scope.introParagraph = 'Simple, intuitive tracking for your Boy Scout Troop';

  $scope.toggleMenu = function () {
    $mdSidenav('left').toggle();
  };

  $scope.goToTroopView = function () {
    $mdSidenav('left').toggle();
    $state.go('troop');
  };

}]);