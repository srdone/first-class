'use strict';

var app = angular.module('firstClass');

app.controller('ScoutSummaryController', ['$scope', 'scoutService', '$stateParams',
	function ($scope, scoutService, $stateParams) {

		$scope.scout = scoutService.getScoutSummaryById($stateParams.scoutId);
	}]);