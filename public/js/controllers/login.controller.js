'use strict';

var app = angular.module('firstClass');

app.controller('LoginController', ['$scope', '$rootScope', 'persistenceService',
	function ($scope, $rootScope, persistenceService) {

    var login = function () {
      console.log('hi');
      persistenceService.login($scope.user.email, $scope.user.password)
        .then(function success () {
          $scope.message = undefined;
          $scope.askSignUp = false;
          $rootScope.loggedIn = true;
          $scope.user = {};
        }, function failure (response) {
          $scope.message = 'Login failed. Are you a member?';
          $scope.askSignUp = true;
        });
    };

		$scope.login = login;

	}]);