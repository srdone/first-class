'use strict';

var app = angular.module('firstClass', ['ui.router', 'ui.bootstrap']);

app.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push('verifyAuthenticationHttpInterceptor');
}]);

app.run(['$rootScope', '$state', function ($rootScope, $state) {
  $rootScope.loggedIn = false;
  $state.go('main');
}]);