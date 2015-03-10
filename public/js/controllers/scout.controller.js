'use strict';

var app = angular.module('firstClass');

app.controller('ScoutController', ['$scope', 'scoutService', 'scout', '$mdBottomSheet', 'requirementService', '$mdDialog',
	function ($scope, scoutService, scout, $mdBottomSheet, requirementService, $mdDialog) {

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

    $scope.editScout = function () {
      $mdBottomSheet.show({
        templateUrl: 'js/bottom-sheets/edit-scout.bottom-sheet.html',
        controller: 'EditScoutSheetController',
        resolve: {
          editingScout: function () {
            return angular.copy($scope.scout);
          }
        }
      }).then(function (scout) {
        $scope.scout = scout;
        $scope.scout.save();
      })
    };

    $scope.deleteRequirement = function(completedRequirement) {
      var dialog = $mdDialog.confirm()
          .title('Warning').content('Delete requirement ' + completedRequirement.requirement.name + ' and all parents?')
        .ok('Yes')
        .cancel('Cancel');

      $mdDialog.show(dialog).then(function () {
        $scope.scout.removeRequirementById(completedRequirement.requirement.id);
        $scope.scout.save().then(null, function () {
          $scope.scout.addRequirement(completedRequirement.requirement);
        });
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