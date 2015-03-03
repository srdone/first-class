'use strict';

var app = angular.module('firstClass');

app.controller('TroopController', ['$scope', '$modal', 'scoutService', 'troop', '$mdBottomSheet', 'bottomSheets',
	function ($scope, $modal, scoutService, troop, $mdBottomSheet, bottomSheets) {

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
      $mdBottomSheet.show(bottomSheets.addScoutSheet);
    };

}]);