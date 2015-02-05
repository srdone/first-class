var app = angular.module('firstClass');

app.controller('ScoutController', ['$scope', 'scoutService',
	function ($scope, scoutService) {
		$scope.test = 'ScoutController' + scoutService;
	}]);