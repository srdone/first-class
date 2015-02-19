'use strict';

var app = angular.module('firstClass');

app.controller('TroopController', ['$scope', 'scoutService', 'troop'
	function ($scope, scoutService, troop) {

    $scope.troop = troop;

		$scope.addState = false;

		$scope.showAdd = function () {
			$scope.addState = true;
		};

		$scope.cancelAdd = function () {
			$scope.addState = false;
		};

		$scope.addScout = function (scout) {
			scoutService.createNewScout(scout).then(function (scout) {
        scoutService.getScouts().then(function (scouts) {
          $scope.troop = scouts;
          $scope.addState = false;
          $scope.newScout = {};
        });
			});
		};

}]);