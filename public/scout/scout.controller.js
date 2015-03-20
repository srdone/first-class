'use strict';

var app = angular.module('firstClass');

app.controller('ScoutController', ['$scope', 'scoutService', 'scout', '$mdBottomSheet', 'requirementService',
  '$mdDialog', '$filter', '$mdToast', 'scoutDialogService', 'campoutDialogService', 'positionDialogService',
  'serviceProjectDialogService', 'requirementDialogService', '$log', 'selectDetailBottomSheetService',
	function ($scope, scoutService, scout, $mdBottomSheet, requirementService, $mdDialog, $filter, $mdToast, scoutDialogService,
            campoutDialogService, positionDialogService, serviceProjectDialogService, requirementDialogService, $log,
            selectDetailBottomSheetService) {

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

    $scope.addDetails = function (event) {
      selectDetailBottomSheetService.show(event).then(function (selectedItem) {
        if (selectedItem.name === 'requirement') {
          $scope.selectRequirements();
        } else if (selectedItem.name === 'service') {
          $scope.addServiceProject();
        } else if (selectedItem.name === 'campout') {
          $scope.addCampout();
        } else if (selectedItem.name === 'position') {
          $scope.addPosition();
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

    $scope.addServiceProject = function (event) {
      serviceProjectDialogService.showCreateDialog({targetEvent: event}).then(function handleServiceData (newServiceProjectData) {
        var newServiceProject = $scope.scout.addService(newServiceProjectData.description, newServiceProjectData.hours);

        $scope.scout.save().then(function handleSuccessfulSave () {
          $mdToast.showSimple('New Service Project Added: ' + newServiceProject.toString());
        }, function handleError () {
          $scope.scout.removeService(newServiceProject.id);
          $mdToast.showSimple('Failed to save new service project');
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



    $scope.addCampout = function (event) {
      campoutDialogService.showCreateCampoutDialog({targetEvent: event}).then(function (newCampoutData) {
        var newCampout = $scope.scout.addCampout(newCampoutData.description, newCampoutData.start, newCampoutData.end);
        $scope.scout.save().then(function () {
          $mdToast.showSimple('Created Campout: ' + newCampout.toString());
        });
      });
    };



    $scope.selectRequirements = function ($event) {
      var rawCompletedRequirements = $scope.scout.getCompletedRequirements().map(function (current) {
        return current.requirement;
      });

      requirementDialogService.showDialog({targetEvent: $event, preSelectedRequirements: rawCompletedRequirements, difference: true})
        .then(function handleRequirementUpdates (updatedRequirements) {
          updatedRequirements.added.forEach(function (currentRequirement) {
            $scope.scout.addRequirement(currentRequirement);
          });
          updatedRequirements.removed.forEach(function (currentRequirement) {
            $scope.scout.removeRequirementById(currentRequirement.id);
          });

          $scope.scout.save().then(function handleSavedScout (savedScout) {
            $scope.scout = savedScout;
            var totalDeliberatelyUpdated = updatedRequirements.added.length + updatedRequirements.removed.length;
            $mdToast.showSimple('Updated ' + totalDeliberatelyUpdated + ' requirements and their parents or children.');
          });
        }, function () {
          $mdToast.showSimple('Failed to save requirements.');
        });
    };

    $scope.updateScout = function () {
      $scope.scout.save();
    };

	}]);