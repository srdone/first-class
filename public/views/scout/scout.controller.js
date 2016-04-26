import angular from 'angular';

var app = angular.module('firstClass');

app.controller('ScoutController', ['scoutService', '$mdBottomSheet', 'requirementService',
  '$mdDialog', '$filter', '$mdToast', 'scoutDialogService', 'campoutDialogService', 'positionDialogService',
  'serviceProjectDialogService', 'requirementDialogService', '$log', 'selectDetailBottomSheetService', '$stateParams', '$timeout',
  'requirements',
	function (scoutService, $mdBottomSheet, requirementService, $mdDialog, $filter, $mdToast, scoutDialogService,
            campoutDialogService, positionDialogService, serviceProjectDialogService, requirementDialogService, $log,
            selectDetailBottomSheetService, $stateParams, $timeout, requirements) {

    var vm = this;

    var _init = function () {
      scoutService.getScoutById($stateParams.scoutId).then(function (scout) {
        vm.scout = scout;
      });
    };

    _init();

    vm.openAddScoutDetailsSheet = function () {
      $mdBottomSheet.show({
        templateUrl: 'scout/add-details/add-details.bottom-sheet.html',
        controller: 'AddDetailsSheetController',
        resolve: {
          scout: function () {
            return vm.scout;
          },
          requirements: function () {
            return vm.scout.getMissingRequirements();
          }
        }
      });
    };

    vm.addDetails = function (event) {
      selectDetailBottomSheetService.show(event).then(function (selectedItem) {
        if (selectedItem.name === 'requirement') {
          vm.selectRequirements();
        } else if (selectedItem.name === 'service') {
          vm.addServiceProject();
        } else if (selectedItem.name === 'campout') {
          vm.addCampout();
        } else if (selectedItem.name === 'position') {
          vm.addPosition();
        }
      });
    };

    vm.addPosition = function (event) {
      positionDialogService.showCreateDialog({targetEvent: event}).then(function (newPositionData) {
        var newPosition = vm.scout.addPosition(newPositionData.title, newPositionData.start, newPositionData.end);
        vm.scout.save().then(function () {
          $mdToast.showSimple('New Position Added: ' + newPosition.toString());
        }, function () {
          vm.scout.removePosition(newPosition.id);
          $mdToast.showSimple('Failed to save new position');
        });
      });
    };

    vm.addServiceProject = function (event) {
      serviceProjectDialogService.showCreateDialog({targetEvent: event}).then(function handleServiceData (newServiceProjectData) {
        var newServiceProject = vm.scout.addService(newServiceProjectData.description, newServiceProjectData.hours);

        vm.scout.save().then(function handleSuccessfulSave () {
          $mdToast.showSimple('New Service Project Added: ' + newServiceProject.toString());
        }, function handleError () {
          vm.scout.removeService(newServiceProject.id);
          $mdToast.showSimple('Failed to save new service project');
        });
      });
    };

    vm.editScout = function (event) {
      var options = {
        scout: angular.copy(vm.scout),
        event: event
      };

      scoutDialogService.showEditScoutDialog(options).then(function (editedScout) {
        editedScout.save().then(function (savedScout) {
          $mdToast.showSimple('Saved Scout: ' + savedScout.getName());
          vm.scout = savedScout;
        });
      });
    };



    vm.addCampout = function (event) {
      campoutDialogService.showCreateCampoutDialog({targetEvent: event}).then(function (newCampoutData) {
        var newCampout = vm.scout.addCampout(newCampoutData.description, newCampoutData.start, newCampoutData.end);
        vm.scout.save().then(function () {
          $mdToast.showSimple('Created Campout: ' + newCampout.toString());
        });
      });
    };



    vm.selectRequirements = function ($event) {
      var rawCompletedRequirements = vm.scout.getCompletedRequirements().map(function (current) {
        return current.requirement;
      });

      requirementDialogService.showDialog({targetEvent: $event, preSelectedRequirements: rawCompletedRequirements, difference: true})
        .then(function handleRequirementUpdates (updatedRequirements) {
          updatedRequirements.added.forEach(function (currentRequirement) {
            vm.scout.addRequirement(currentRequirement);
          });
          updatedRequirements.removed.forEach(function (currentRequirement) {
            vm.scout.removeRequirementById(currentRequirement.id);
          });

          vm.scout.save().then(function handleSavedScout (savedScout) {
            vm.scout = savedScout;
            var totalDeliberatelyUpdated = updatedRequirements.added.length + updatedRequirements.removed.length;
            $mdToast.showSimple('Updated ' + totalDeliberatelyUpdated + ' requirements and their parents or children.');
          });
        }, function () {
          $mdToast.showSimple('Failed to save requirements.');
        });
    };

    vm.updateScout = function () {
      vm.scout.save();
    };

	}]);