'use strict';

var app = angular.module('firstClass');

app.controller('TroopController', ['$scope', 'scoutService',
	function ($scope, scoutService) {
		$scope.test = 'TroopController';

		scoutService.getScouts().then(function (scouts) {
			$scope.troop = scouts;
		});

		$scope.addState = false;

		$scope.showAdd = function () {
			$scope.addState = true;
		};

		$scope.cancelAdd = function () {
			$scope.addState = false;
		};

		$scope.addScout = function (scout) {
			scoutService.createNewScout(scout).then(function (scout) {
				$scope.troop.push(scout);
				$scope.addState = false;
				$scope.newScout = {};
			});
		};

}]);