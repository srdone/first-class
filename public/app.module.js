'use strict';

var app = angular.module('firstClass', ['ui.router', 'ngMaterial', 'ngAria', 'ngAnimate']);

//theme configuration
angular.module('firstClass').config(['$mdThemingProvider', function ($mdThemingProvider) {

  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('brown')
    .warnPalette('deep-orange');

}]);

//debugging toggle
app.config(['$httpProvider', '$logProvider', function ($httpProvider, $logProvider) {
  $logProvider.debugEnabled(false);
}]);

//check for logged in state
app.run(['$rootScope', '$state', 'authService', function ($rootScope, $state, authService) {
  authService.checkLoggedIn();
}]);

//logout on state change error
app.run(['$state', '$rootScope', '$mdToast', function ($state, $rootScope, $mdToast) {
  $rootScope.$on('$stateChangeError', function (e) {
    e.preventDefault();
    $rootScope.loggedIn = false;
    $rootScope.username = null;
    $state.go('main').then(function () {
      $mdToast.showSimple('Server error. Logged out.');
    });
  });
}]);

//state change debugging
app.run(['$rootScope', '$state', '$log', function($rootScope, $state, $log) {
  $rootScope.$state = $state;
  function message(to, toP, from, fromP) { return from.name  + angular.toJson(fromP) + " -> " +     to.name + angular.toJson(toP); }
  $rootScope.$on("$stateChangeStart", function(evt, to, toP, from, fromP) { $log.debug("Start:   " + message(to, toP, from, fromP)); });
  $rootScope.$on("$stateChangeSuccess", function(evt, to, toP, from, fromP) { $log.debug("Success: " + message(to, toP, from, fromP)); });
  $rootScope.$on("$stateChangeError", function(evt, to, toP, from, fromP, err) {     $log.debug("Error:   " + message(to, toP, from, fromP), err); });
}]);