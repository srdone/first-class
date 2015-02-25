'use strict';

var app = angular.module('firstClass');

app.controller('ScoutController', ['$scope', '$modal', 'scoutService', 'scout',
	function ($scope, $modal, scoutService, scout) {

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

    $scope.deleteCampout = function (campout) {
      alert('Deleted ' + campout);
    };

    $scope.deleteService = function (service) {
      alert('Deleted ' + service);
    };

    $scope.deletePosition = function (position) {
      alert('Deleted ' + position);
    };

	}]);