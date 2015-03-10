'use strict';

angular.module('firstClass').controller('MainController', ['$scope', '$mdSidenav', '$state', '$log', 'authService', '$rootScope',
  function($scope, $mdSidenav, $state, $log, authService, $rootScope) {
    $scope.introParagraph = 'Simple, intuitive tracking for your Boy Scout Troop';

    $scope.toggleMenu = function () {
      $mdSidenav('left').toggle();
    };

    $scope.goToTroopView = function () {
      $mdSidenav('left').toggle();
      $state.go('troop');
    };

    $scope.logout = function () {
      authService.logout().then(function () {
        $state.go('main');
        $mdSidenav('left').close().then(function () {
          $rootScope.loggedIn = false;
          $log.debug("logged out");
        });
      });
    };

    $scope.close = function () {
      $mdSidenav('left').toggle();
    };

    $rootScope.$watch('loggedIn', function (newVal) {
      $scope.loggedIn = (newVal === true);
    });

  }]);