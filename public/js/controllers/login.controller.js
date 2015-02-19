'use strict';

var app = angular.module('firstClass');

app.controller('LoginController', ['$scope', '$rootScope', 'persistenceService', 'authService', '$state',
	function ($scope, $rootScope, persistenceService, authService, $state) {

    $scope.doSignUp = false;
    $scope.newUser = {};

    var _reset = function () {
      $scope.user = {};
      $scope.newUser = {};
      $scope.doSignUp = false;
    };

    var _login = function () {
      persistenceService.login($scope.user.email, $scope.user.password)
        .then(function success () {
          $scope.welcomeMessage = 'Welcome to First Class Scouting!';
          $rootScope.loggedIn = true;
          _reset();
          $state.go('troop');
        }, function failure (response) {
          $scope.message = 'Login failed. Do you want to sign up?';
          _reset();
        });
    };

    var _signUp = function () {
      if ($scope.user.password = $scope.newUser.verifyPassword) {
        authService.signUp($scope.user.email, $scope.user.password).then(function () {
          _login();
          $scope.newUser = {};
        });
      }
    };

    var _chooseToSignUp = function () {
      $scope.doSignUp = true;
    };

    var _cancelSignUp = function () {
      _reset();
    };

		$scope.login = _login;
    $scope.signUp = _signUp;
    $scope.chooseToSignUp = _chooseToSignUp;
    $scope.cancelSignUp = _cancelSignUp;

	}]);