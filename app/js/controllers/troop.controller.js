var app = angular.module('firstClass');

app.controller('TroopController', ['$scope', 'scoutService', function ($scope, scoutService) {
	$scope.test = 'TroopController';

	var troopId = 'testTroopId';
	$scope.troop = scoutService.getScoutSummariesInTroop(troopId);
}]);