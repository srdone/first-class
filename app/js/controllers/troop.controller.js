'use strict';

var app = angular.module('firstClass');

app.controller('TroopController', ['$scope', 'scoutService', function ($scope, scoutService) {
	$scope.test = 'TroopController';

	$scope.troopNumber = '174';

	$scope.troop = scoutService.getScoutSummariesInTroop($scope.troopNumber);
}]);