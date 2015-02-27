'use strict';

var app = angular.module('firstClass', ['ui.router', 'ui.bootstrap', 'xeditable', 'ngMaterial', 'ngAria']);

app.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push('verifyAuthenticationHttpInterceptor');
}]);

app.run(['$rootScope', '$state', function ($rootScope, $state) {
  $rootScope.loggedIn = false;
  $state.go('main');
}]);


app.run(['$state', '$rootScope', function ($state, $rootScope) {
  $rootScope.$on('$stateChangeError', function (e) {
    e.preventDefault();
    $rootScope.loggedIn = false;
    $rootScope.username = null;
    $state.go('main');
  });
}]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});