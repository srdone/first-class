'use strict';

var app = angular.module('firstClass');

app.controller('ScoutController', ['$scope', 'scoutService', '$stateParams',
	function ($scope, scoutService, $stateParams) {

		scoutService.getScoutById($stateParams.scoutId).then(function (scout) {
			$scope.scout = scout;
		});

	}]);