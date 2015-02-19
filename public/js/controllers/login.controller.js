'use strict';

var app = angular.module('firstClass');

app.controller('LoginController', ['$scope', '$rootScope', 'persistenceService',
	function ($scope, $rootScope, persistenceService) {

		var login = function () {
			console.log('hi');
			persistenceService.login($scope.user.email, $scope.user.password).then(function () {
        $rootScope.loggedIn = true;
        $scope.user = {};
      });
		};

		$scope.login = login;

	}]);