'use strict';

var app = angular.module('firstClass');

app.controller('ScoutController', ['$scope', 'scoutService', 'scout', '$mdBottomSheet', 'requirementService', '$mdDialog', '$filter', '$mdToast', 'scoutDialogService', 'campoutDialogService', 'positionDialogService',
	function ($scope, scoutService, scout, $mdBottomSheet, requirementService, $mdDialog, $filter, $mdToast, scoutDialogService, campoutDialogService, positionDialogService) {

		$scope.scout = scout;

    var warningDialog = $mdDialog.confirm().title('Warning').ok('Yes').cancel('Cancel');

    $scope.openAddScoutDetailsSheet = function () {
      $mdBottomSheet.show({
        templateUrl: 'scout/add-details/add-details.bottom-sheet.html',
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

    $scope.addPosition = function (event) {
      positionDialogService.showCreateDialog({targetEvent: event}).then(function (newPositionData) {
        var newPosition = $scope.scout.addPosition(newPositionData.title, newPositionData.start, newPositionData.end);
        $scope.scout.save().then(function () {
          $mdToast.showSimple('New Position Added: ' + newPosition.toString());
        }, function () {
          $scope.scout.removePosition(newPosition.id);
          $mdToast.showSimple('Failed to save new position');
        });
      });
    };

    $scope.editPosition = function (event, position) {
      var positionToEdit = angular.copy(position);

      positionDialogService.showEditDialog({targetEvent: event, position: positionToEdit}).then(function (editedPosition) {
        $scope.scout.removePosition(position.id);
        $scope.scout.addPosition(editedPosition.title, editedPosition.start, editedPosition.end);
        $scope.scout.save().then(function (savedScout) {
          $mdToast.showSimple('Saved Position Changes: ' + editedPosition.toString());
          $scope.scout = savedScout;
        });
      });
    };

    $scope.editScout = function (event) {
      var options = {
        scout: angular.copy($scope.scout),
        event: event
      };

      scoutDialogService.showEditScoutDialog(options).then(function (editedScout) {
        editedScout.save().then(function (savedScout) {
          $mdToast.showSimple('Saved Scout: ' + savedScout.getName());
          $scope.scout = savedScout;
        });
      });
    };

    $scope.deleteRequirement = function(completedRequirement) {
      var dialog = warningDialog.content('Delete requirement ' + completedRequirement.requirement.name + ' and all parents?');

      $mdDialog.show(dialog).then(function () {
        $scope.scout.removeRequirementById(completedRequirement.requirement.id);
        $scope.scout.save()
          .then(function () {
            $mdToast.showSimple('Deleted requirement and its dependents: ' + completedRequirement.requirement.name);
          }, function () {
            $scope.scout.addRequirement(completedRequirement.requirement);
            $mdToast.showSimple('A server error occurred: Failed to delete requirement');
          });
      });
    };

    $scope.addCampout = function (event) {
      campoutDialogService.showCreateCampoutDialog({targetEvent: event}).then(function (newCampoutData) {
        var newCampout = $scope.scout.addCampout(newCampoutData.description, newCampoutData.start, newCampoutData.end);
        $scope.scout.save().then(function () {
          $mdToast.showSimple('Created Campout: ' + newCampout.toString());
        });
      });
    };

    $scope.editCampout = function (event, campout) {
      var campoutToEdit = angular.copy(campout);

      campoutDialogService.showEditCampoutDialog({targetEvent: event, campout: campoutToEdit}).then(function (editedCampout) {
        $scope.scout.removeCampout(campout.id);
        $scope.scout.addCampout(editedCampout.description, editedCampout.start, editedCampout.end);
        $scope.scout.save().then(function (savedScout) {
          $mdToast.showSimple('Saved Campout Changes: ' + editedCampout.toString());
          $scope.scout = savedScout;
        });
      });
    };

    $scope.deleteCampout = function (campout) {
      var dialog = warningDialog.content('Delete campout record: ' + campout.description + ': ' +
        $filter('date')(campout.start, 'shortDate') + '-' + $filter('date')(campout.end, 'shortDate') + '?');

      $mdDialog.show(dialog).then(function () {
        $scope.scout.removeCampout(campout.id);
        $scope.scout.save()
          .then(function () {
            $mdToast.showSimple('Deleted campout: ' + campout.toString());
          }, function () {
            $scope.scout.addCampout(campout);
            $mdToast.showSimple('A server error occurred: Failed to delete campout');
          });
      });
    };

    $scope.deleteService = function (service) {
      var dialog = warningDialog.content('Delete service record: ' + service.description + ': ' + service.hours + ' hours?');

      $mdDialog.show(dialog).then(function () {
        $scope.scout.removeService(service.id);
        $scope.scout.save()
          .then(function () {
            $mdToast.showSimple('Deleted service project: ' + service.toString());
          }, function () {
            $scope.scout.addService(service);
            $mdToast.showSimple('A server error occurred: Failed to delete service project');
          });
      });
    };

    $scope.deletePosition = function (position) {
      var dialog = warningDialog.content('Delete position record: ' + position.title + ': ' +
        $filter('date')(position.start, 'shortDate') + '-' + $filter('date')(position.end, 'shortDate') + '?');

      $mdDialog.show(dialog).then(function () {
        $scope.scout.removePosition(position.id);
        $scope.scout.save()
          .then(function () {
            $mdToast.showSimple('Deleted position: ' + position.toString());
          }, function () {
            $scope.scout.addPosition(position);
            $mdToast.showSimple('A server error occurred: Failed to delete position');
          });
      });
    };

    $scope.updateScout = function () {
      $scope.scout.save();
    };

	}]);