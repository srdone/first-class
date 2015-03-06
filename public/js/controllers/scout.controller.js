'use strict';

var app = angular.module('firstClass');

app.controller('ScoutController', ['$scope', 'scoutService', 'scout', '$mdBottomSheet', 'requirementService',
	function ($scope, scoutService, scout, $mdBottomSheet, requirementService) {

		$scope.scout = scout;

    $scope.openAddScoutDetailsSheet = function () {
      $mdBottomSheet.show({
        templateUrl: 'js/bottom-sheets/add-details.bottom-sheet.html',
        controller: 'AddDetailsSheetController',
        resolve: {
          scout: function () {
            return $scope.scout;
          },
          requirements: function () {
            return $scope.scout.getMissingRequirements();
          }
        }
      });
    };

    $scope.deleteRequirement = function(completedRequirement) {
      $scope.scout.removeRequirementById(completedRequirement.requirement.id);
      $scope.scout.save().then(null, function () {
        $scope.scout.addRequirement(completedRequirement.requirement);
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