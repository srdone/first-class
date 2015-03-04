'use strict';

var app = angular.module('firstClass');

app.controller('TroopController', ['$scope', '$modal', 'scoutService', 'troop', '$mdBottomSheet',
	function ($scope, $modal, scoutService, troop, $mdBottomSheet) {

    $scope.troop = troop;

    $scope.openAddScoutSheet = function () {
      $mdBottomSheet.show({
        templateUrl: 'js/bottom-sheets/add-scout.bottom-sheet.html',
        controller: 'AddScoutSheetController'
      }).then(function () {
        scoutService.getScouts().then(function (scouts) {
          $scope.troop = scouts;
        });
      });
    };

}]);