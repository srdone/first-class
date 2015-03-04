'use strict';

var app = angular.module('firstClass');

app.controller('TroopController', ['$scope', '$modal', 'scoutService', 'troop', '$mdBottomSheet',
	function ($scope, $modal, scoutService, troop, $mdBottomSheet) {

    $scope.troop = troop;

    $scope.openAddScoutModal = function () {

      var modalInstance = $modal.open({
        templateUrl: 'modals/add-scout.modal.html',
        controller: 'AddScoutModalController',
        size: 'sm',
        resolve: {
          troop: function () {
            return $scope.troop;
          }
        }
      });

    };

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