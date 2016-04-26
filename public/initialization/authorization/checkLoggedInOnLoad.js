import angular from 'angular';

angular.module('firstClass').run(['$rootScope', '$state', 'authService', function ($rootScope, $state, authService) {
  authService.checkLoggedIn();
}]);