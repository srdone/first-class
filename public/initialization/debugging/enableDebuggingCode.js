import angular from 'angular';

angular.module('firstClass').config(['$httpProvider', '$logProvider', function ($httpProvider, $logProvider) {
  $logProvider.debugEnabled(false);
}]);