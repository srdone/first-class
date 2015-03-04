'use strict';

var app = angular.module('firstClass');

app.controller('ScoutController', ['$scope', '$modal', 'scoutService', 'scout', '$mdBottomSheet',
	function ($scope, $modal, scoutService, scout, $mdBottomSheet) {

		$scope.scout = scout;

    $scope.open = function () {

      var modalInstance = $modal.open({
        templateUrl: 'modals/add-details.modal.html',
        controller: 'AddDetailsModalController',
        size: 'sm',
        resolve: {
          scout: function () {
            return $scope.scout;
          }
        }
      });

    };

    $scope.openAddScoutDetailsSheet = function () {
      $mdBottomSheet.show({
        templateUrl: 'js/bottom-sheets/add-details.bottom-sheet.html',
        controller: 'AddDetailsSheetController',
        resolve: {
          scout: function () {
            return $scope.scout;
          }
        }
      });
    };

    $scope.deleteCampout = function (campout) {
      $scope.scout.removeCampout(campout.id);
      $scope.scout.save();
    };

    $scope.deleteService = function (service) {
      $scope.scout.removeService(service.id);
      $scope.scout.save();
    };

    $scope.deletePosition = function (position) {
      $scope.scout.removePosition(position.id);
      $scope.scout.save();
    };

    $scope.updateScout = function () {
      $scope.scout.save();
    };

	}]);