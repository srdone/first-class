'use strict';

var app = angular.module('firstClass');

app.controller('LoginController', ['$scope', 'persistenceService', 
	function ($scope, persistenceService) {

		var login = function () {
			console.log('hi');
			persistenceService.login($scope.user.email, $scope.user.password);
		};

		$scope.login = login;

	}]);