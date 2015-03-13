'use strict';

var app = angular.module('firstClass');

app.controller('TroopController', ['$scope', 'scoutService', 'troop', '$mdBottomSheet',
	function ($scope, scoutService, troop, $mdBottomSheet) {

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

}]);