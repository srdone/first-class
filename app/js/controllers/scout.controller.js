var app = angular.module('firstClass');

app.controller('ScoutController', ['$scope',
	function ($scope) {
		$scope.test = 'ScoutController';
	}]);