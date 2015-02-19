'use strict';

var app = angular.module('firstClass');

app.controller('LoginController', ['$scope', '$rootScope', 'persistenceService', 'authService',
	function ($scope, $rootScope, persistenceService, authService) {

    var _login = function () {
      persistenceService.login($scope.user.email, $scope.user.password)
        .then(function success () {
          $scope.message = undefined;
          $scope.askSignUp = false;
          $rootScope.loggedIn = true;
          $scope.user = {};
        }, function failure (response) {
          $scope.message = 'Login failed. Do you want to sign up?';
          $scope.askSignUp = true;
        });
    };

    var _signup = function () {
      if ($scope.user.password = $scope.newUser.verifyPassword) {
        authService.signUp($scope.user.email, $scope.user.password).then(function () {
          _login();
        });
      }
    };

		$scope.login = _login;

    $scope.signup = _signup;

	}]);