'use strict';

var app = angular.module('firstClass');

app.controller('TroopController', ['$scope', 'scoutService', function ($scope, scoutService) {
	$scope.test = 'TroopController';

	var troopId = '154';
	$scope.troop = scoutService.getScoutSummariesInTroop(troopId);
}]);