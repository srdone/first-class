'use strict';

var app = angular.module('firstClass');

app.controller('TroopController', ['$scope', '$modal', 'scoutService', 'troop',
	function ($scope, $modal, scoutService, troop) {

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

}]);