'use strict';

angular.module('firstClass').run(['$state', '$rootScope', function ($state, $rootScope) {
  $rootScope.$on('$stateChangeError', function (e) {
    e.preventDefault();
    $rootScope.loggedIn = false;
    $rootScope.username = null;
    $state.go('main');
  });
}]);