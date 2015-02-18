'use strict';

var app = angular.module('firstClass', ['ui.router', 'ui.bootstrap']);

app.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push('verifyAuthenticationHttpInterceptor');
}]);