'use strict';

var app = angular.module('firstClass');

app.controller('TroopController', ['$scope', 'scoutService', 'troop', 'scoutDialogService',
	function ($scope, scoutService, troop, scoutDialogService) {

    $scope.troop = troop;

    $scope.addScout = function () {
      scoutDialogService.showScoutDialog({create: true}).then(function (newScout) {
        $scope.troop.push(newScout);
      });
    }

}]);