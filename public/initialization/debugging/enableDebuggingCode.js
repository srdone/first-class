'use strict';

angular.module('firstClass').config(['$httpProvider', '$logProvider', function ($httpProvider, $logProvider) {
  $logProvider.debugEnabled(false);
}]);