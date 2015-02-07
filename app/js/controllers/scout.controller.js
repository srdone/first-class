'use strict';

var app = angular.module('firstClass');

app.controller('ScoutController', ['$scope', 'scoutService', '$stateParams',
	function ($scope, scoutService, $stateParams) {
		$scope.test = 'ScoutController' + scoutService;

		var scout = scoutService.getScoutById($stateParams.scoutId);

		$scope.scout = scout;

		$scope.scoutSummary = scout.summarize();
	}]);