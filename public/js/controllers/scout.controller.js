'use strict';

var app = angular.module('firstClass');

app.controller('ScoutController', ['$scope', 'scoutService', 'scout',
	function ($scope, scoutService, scout) {

		$scope.scout = scout;

	}]);