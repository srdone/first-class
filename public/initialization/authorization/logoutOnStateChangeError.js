'use strict';

angular.module('firstClass').run(['$state', '$rootScope', '$mdToast', function ($state, $rootScope, $mdToast) {
  $rootScope.$on('$stateChangeError', function (e) {
    e.preventDefault();
    $rootScope.loggedIn = false;
    $rootScope.username = null;
    $state.go('app.main').then(function () {
      $mdToast.showSimple('Server error. Logged out.');
    });
  });
}]);