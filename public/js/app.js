'use strict';

var app = angular.module('firstClass', ['ui.router', 'ui.bootstrap', 'xeditable', 'ngMaterial', 'ngAria']);

app.config(['$httpProvider', '$logProvider', function ($httpProvider, $logProvider) {
  $logProvider.debugEnabled(true);

  $httpProvider.interceptors.push('debugHttpInterceptor');
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

// http://stackoverflow.com/questions/27299471/angular-ui-router-resolve-service-halting-route-change
// Adds state change hooks; logs to console.
app.run(function($rootScope, $state) {
  $rootScope.$state = $state;
  function message(to, toP, from, fromP) { return from.name  + angular.toJson(fromP) + " -> " +     to.name + angular.toJson(toP); }
  $rootScope.$on("$stateChangeStart", function(evt, to, toP, from, fromP) { console.log("Start:   " + message(to, toP, from, fromP)); });
  $rootScope.$on("$stateChangeSuccess", function(evt, to, toP, from, fromP) { console.log("Success: " + message(to, toP, from, fromP)); });
  $rootScope.$on("$stateChangeError", function(evt, to, toP, from, fromP, err) {     console.log("Error:   " + message(to, toP, from, fromP), err); });
});