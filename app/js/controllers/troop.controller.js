'use strict';

var app = angular.module('firstClass');

app.controller('TroopController', ['$scope', 'scoutService', '$window', 'currentAuth',
	function ($scope, scoutService, $window, currentAuth) {
		$scope.test = 'TroopController';

		$scope.troopNumber = '174';

		$scope.troop = scoutService.getScoutsInTroop($scope.troopNumber);

		$scope.addState = false;

		$scope.showAdd = function () {
			$scope.addState = true;
		};

		$scope.cancelAdd = function () {
			$scope.addState = false;
		};

		$scope.addScout = function (scout) {
			$scope.addState = false;
			var promise = scoutService.createNewScout(scout);

			promise.then(function (savedScout) {
				$scope.troop.push(savedScout);
				$scope.newScout = {};
			});
		};

}]);