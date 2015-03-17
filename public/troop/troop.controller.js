'use strict';

var app = angular.module('firstClass');

app.controller('TroopController', ['$scope', 'scoutService', 'troop', 'scoutDialogService', '$mdToast',
	function ($scope, scoutService, troop, scoutDialogService, $mdToast) {

    $scope.troop = troop;

    $scope.addScout = function (event) {
      scoutDialogService.showCreateScoutDialog({targetEvent: event}).then(function (newScoutData) {
        scoutService.createNewScout(newScoutData).then(function (newScout) {
          $mdToast.showSimple('Created Scout: ' + newScout.getName());
          $scope.troop.push(newScout);
        });
      });
    }

}]);