'use strict';

var app = angular.module('firstClass');

app.controller('TroopController', ['$scope', 'scoutService', 'troop', 'dialogService',
	function ($scope, scoutService, troop, dialogService) {

    $scope.troop = troop;

    $scope.addScout = function () {
      dialogService.showScoutDialog({create: true}).then(function (newScout) {
        $scope.troop.push(newScout);
      });
    }

}]);