'use strict';

angular.module('firstClass').controller('MainController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
	$scope.introParagraph = 'Simple, intuitive tracking for your Boy Scout Troop';

  $scope.toggleMenu = function () {
    $mdSidenav('left').toggle();
  };

}]);