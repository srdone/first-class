'use strict';

var app = angular.module('firstClass');

app.controller('TroopController', ['$scope', 'scoutService', '$window',
	function ($scope, scoutService, $window) {
		$scope.test = 'TroopController';

		$scope.troopNumber = '174';

		$scope.newScout = {firstName: '', lastName: ''};

		$scope.troop = scoutService.getScoutSummariesInTroop($scope.troopNumber);

		$scope.addState = false;

		$scope.showAdd = function () {
			$scope.addState = true;
		};

		$scope.cancelAdd = function () {
			$scope.addState = false;
		};

		$scope.addScout = function () {
			debugger;
			$window.alert($scope.newScout.firstName + ' ' + $scope.newScout.lastName);
		};

}]);