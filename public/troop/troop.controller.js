'use strict';

var app = angular.module('firstClass');

app.controller('TroopController', ['$scope', 'scoutService', 'troop', '$mdBottomSheet', '$mdDialog', 'dialogService', '$mdToast',
	function ($scope, scoutService, troop, $mdBottomSheet, $mdDialog, dialogService, $mdToast) {

    $scope.troop = troop;

    $scope.openAddScoutSheet = function () {
      $mdBottomSheet.show({
        templateUrl: 'scout/add-scout/add-scout.bottom-sheet.html',
        controller: 'AddScoutSheetController'
      }).then(function () {
        scoutService.getScouts().then(function (scouts) {
          $scope.troop = scouts;
        });
      });
    };

    $scope.addScout = function () {
      $mdDialog.show(dialogService.addScoutDialogPreset).then(function (newScout) {
        $mdToast.showSimple('Created Scout: ' + newScout.getName());
        $scope.troop.push(newScout);
      });
    }

}]);