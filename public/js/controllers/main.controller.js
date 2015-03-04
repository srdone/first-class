'use strict';

angular.module('firstClass').controller('MainController', ['$scope', '$mdSidenav', '$state', '$log', 'persistenceService', '$rootScope',
  function($scope, $mdSidenav, $state, $log, persistenceService, $rootScope) {
    $scope.introParagraph = 'Simple, intuitive tracking for your Boy Scout Troop';

    $scope.toggleMenu = function () {
      $mdSidenav('left').toggle();
    };

    $scope.goToTroopView = function () {
      $mdSidenav('left').toggle();
      $state.go('troop');
    };

    $scope.logout = function () {
      persistenceService.logout().then(function () {
        $mdSidenav('left').toggle();
        $rootScope.loggedIn = false;
        $state.go('main');
        $log.debug("logged out");
      });
    }

  }]);