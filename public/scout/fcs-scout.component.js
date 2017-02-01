(function () {
  'use strict';

  angular
    .module('firstClass')
    .component('fcsScout', {
      controller: FCSScoutComponent,
      templateUrl: 'scout/fcs-scout.component.html',
      bindings: {}
    });

  FCSScoutComponent.$inject = ['scoutService', '$mdBottomSheet', 'requirementService',
  '$mdDialog', '$filter', '$mdToast', 'scoutDialogService', 'campoutDialogService', 'positionDialogService',
  'serviceProjectDialogService', 'requirementDialogService', '$log', 'selectDetailBottomSheetService', '$stateParams', '$timeout'];

  function FCSScoutComponent(scoutService, $mdBottomSheet, requirementService, $mdDialog, $filter, $mdToast, scoutDialogService,
            campoutDialogService, positionDialogService, serviceProjectDialogService, requirementDialogService, $log,
            selectDetailBottomSheetService, $stateParams, $timeout) {
    var $ctrl = this;

    /* Lifecycle Hooks */
    $ctrl.$onInit = $onInit;

    /* Public Functions */
    $ctrl.openAddScoutDetailsSheet = openAddScoutDetailsSheet;
    $ctrl.addDetails = addDetails;
    $ctrl.addPosition = addPosition;
    $ctrl.addServiceProject = addServiceProject;
    $ctrl.editScout = editScout;
    $ctrl.addCampout = addCampout;
    $ctrl.selectRequirements = selectRequirements;
    $ctrl.updateScout = updateScout;

    /* Implementation */

    function $onInit() {
      requirementService.getAllRequirements().then(function () {
        scoutService.getScoutById($stateParams.scoutId).then(function (scout) {
          $ctrl.scout = scout;
        });
      });
    }

    function openAddScoutDetailsSheet() {
      $mdBottomSheet.show({
        templateUrl: 'scout/add-details/add-details.bottom-sheet.html',
        controller: 'AddDetailsSheetController',
        resolve: {
          scout: function () {
            return $ctrl.scout;
          },
          requirements: function () {
            return $ctrl.scout.getMissingRequirements();
          }
        }
      });
    }

    function addDetails(event) {
      selectDetailBottomSheetService.show(event).then(function (selectedItem) {
        if (selectedItem.name === 'requirement') {
          $ctrl.selectRequirements();
        } else if (selectedItem.name === 'service') {
          $ctrl.addServiceProject();
        } else if (selectedItem.name === 'campout') {
          $ctrl.addCampout();
        } else if (selectedItem.name === 'position') {
          $ctrl.addPosition();
        }
      });
    }

    function addPosition(event) {
      positionDialogService.showCreateDialog({targetEvent: event}).then(function (newPositionData) {
        var newPosition = $ctrl.scout.addPosition(newPositionData.title, newPositionData.start, newPositionData.end);
        $ctrl.scout.save().then(function () {
          $mdToast.showSimple('New Position Added: ' + newPosition.toString());
        }, function () {
          $ctrl.scout.removePosition(newPosition.id);
          $mdToast.showSimple('Failed to save new position');
        });
      });
    };

    function addServiceProject(event) {
      serviceProjectDialogService.showCreateDialog({targetEvent: event}).then(function handleServiceData (newServiceProjectData) {
        var newServiceProject = $ctrl.scout.addService(newServiceProjectData.description, newServiceProjectData.hours);

        $ctrl.scout.save().then(function handleSuccessfulSave () {
          $mdToast.showSimple('New Service Project Added: ' + newServiceProject.toString());
        }, function handleError () {
          $ctrl.scout.removeService(newServiceProject.id);
          $mdToast.showSimple('Failed to save new service project');
        });
      });
    };

    function editScout(event) {
      var options = {
        scout: angular.copy($ctrl.scout),
        event: event
      };

      scoutDialogService.showEditScoutDialog(options).then(function (editedScout) {
        editedScout.save().then(function (savedScout) {
          $mdToast.showSimple('Saved Scout: ' + savedScout.getName());
          $ctrl.scout = savedScout;
        });
      });
    };



    function addCampout(event) {
      campoutDialogService.showCreateCampoutDialog({targetEvent: event}).then(function (newCampoutData) {
        var newCampout = $ctrl.scout.addCampout(newCampoutData.description, newCampoutData.start, newCampoutData.end);
        $ctrl.scout.save().then(function () {
          $mdToast.showSimple('Created Campout: ' + newCampout.toString());
        });
      });
    };



    function selectRequirements($event) {
      var rawCompletedRequirements = $ctrl.scout.getCompletedRequirements().map(function (current) {
        return current.requirement;
      });

      requirementDialogService.showDialog({targetEvent: $event, preSelectedRequirements: rawCompletedRequirements, difference: true})
        .then(function handleRequirementUpdates (updatedRequirements) {
          updatedRequirements.added.forEach(function (currentRequirement) {
            $ctrl.scout.addRequirement(currentRequirement);
          });
          updatedRequirements.removed.forEach(function (currentRequirement) {
            $ctrl.scout.removeRequirementById(currentRequirement.id);
          });

          $ctrl.scout.save().then(function handleSavedScout (savedScout) {
            $ctrl.scout = savedScout;
            var totalDeliberatelyUpdated = updatedRequirements.added.length + updatedRequirements.removed.length;
            $mdToast.showSimple('Updated ' + totalDeliberatelyUpdated + ' requirements and their parents or children.');
          });
        }, function () {
          $mdToast.showSimple('Failed to save requirements.');
        });
    };

    function updateScout() {
      $ctrl.scout.save();
    };
  }

})();