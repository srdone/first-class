'use strict';

var app = angular.module('firstClass');

app.controller('ScoutSummaryController', ['$scope', 'scoutService',
	function ($scope, scoutService) {
		$scope.test = "ScoutSummaryController"

		$scope.scout = scoutService.getScoutSummaryById('testid1');
	}]);