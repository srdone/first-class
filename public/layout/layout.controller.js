'use strict';

angular.module('firstClass').controller('LayoutController', ['$scope', '$mdSidenav', '$state', '$log', 'authService', '$rootScope', '$q', '$mdToast',
  function($scope, $mdSidenav, $state, $log, authService, $rootScope, $q, $mdToast) {
    $scope.introParagraph = 'Simple, intuitive tracking for your Boy Scout Troop';

    $scope.toggleMenu = function () {
      $mdSidenav('left').toggle();
    };

    $scope.goToTroopView = function () {
      $mdSidenav('left').toggle();
      $state.go('troop');
    };

    $scope.logout = function () {
      var promises = [];
      var toastLoggedOut = function () {
        $mdToast.showSimple('Logged Out');
      };

      promises.push(authService.logout());
      promises.push($state.go('main'));
      promises.push($mdSidenav('left').close());

      $q.all(promises).then(toastLoggedOut);
    };

    $scope.close = function () {
      $mdSidenav('left').toggle();
    };

    $rootScope.$watch('loggedIn', function (newVal) {
      $scope.loggedIn = (newVal === true);
    });

  }]);