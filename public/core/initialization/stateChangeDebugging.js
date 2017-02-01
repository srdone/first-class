// http://stackoverflow.com/questions/27299471/angular-ui-router-resolve-service-halting-route-change
// Adds state change hooks; logs to console.
'use strict';

angular.module('firstClass').run(['$rootScope', '$state', '$log', function($rootScope, $state, $log) {
  $rootScope.$state = $state;
  function message(to, toP, from, fromP) { return from.name  + angular.toJson(fromP) + " -> " +     to.name + angular.toJson(toP); }
  $rootScope.$on("$stateChangeStart", function(evt, to, toP, from, fromP) { $log.debug("Start:   " + message(to, toP, from, fromP)); });
  $rootScope.$on("$stateChangeSuccess", function(evt, to, toP, from, fromP) { $log.debug("Success: " + message(to, toP, from, fromP)); });
  $rootScope.$on("$stateChangeError", function(evt, to, toP, from, fromP, err) {     $log.debug("Error:   " + message(to, toP, from, fromP), err); });
}]);