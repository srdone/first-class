(function () {
'use strict';

  angular
    .module('firstClass')
    .component('fcsTroop', {
      controller: FCSTroopComponent,
      templateUrl: 'troop/fcs-troop.component.html',
      bindings: {}
    });

  FCSTroopComponent.$inject = ['scoutService', 'scoutDialogService', '$mdToast', 'selectDetailBottomSheetService',
    'scoutListDialogService', 'positionDialogService', 'requirementDialogService', 'campoutDialogService', 'serviceProjectDialogService', '$q',
    '$rootScope', 'requirementService', '$timeout', '$state'];

  function FCSTroopComponent(scoutService, scoutDialogService, $mdToast, selectDetailBottomSheetService, scoutListDialogService,
      positionDialogService, requirementDialogService, campoutDialogService, serviceProjectDialogService, $q, $rootScope, requirementService,
      $timeout, $state) {

      var $ctrl = this;

      /* Public Variables */

      /* Lifecycle Hooks */
      $ctrl.$onInit = $onInit;      

      /* Public Functions */
      $ctrl.addScout = addScout;
      $ctrl.goToScout = goToScout;
      $ctrl.addBatchDetails = addBatchDetails;

      /* Private Functions */
      $ctrl._showSelectedDialog = _showSelectedDialog;
      $ctrl._addRequirementsToScouts = _addRequirementsToScouts;
      $ctrl._addServiceProjectsToScouts = _addServiceProjectsToScouts;
      $ctrl._addCampoutsToScouts = _addCampoutsToScouts;
      $ctrl._addPositionsToScouts = _addPositionsToScouts;
      $ctrl._getTroop = _getTroop;

      /* Implementation */

      function $onInit() {
        requirementService.getAllRequirements();
        scoutService.getScouts().then(function (scouts) {
          $ctrl.troop = scouts;
        });
      };

      function addScout(event) {
        scoutDialogService.showCreateScoutDialog({targetEvent: event}).then(function (newScoutData) {
          scoutService.createNewScout(newScoutData).then(function (newScout) {
            $mdToast.showSimple('Created Scout: ' + newScout.getName());
            $ctrl.troop.push(newScout);
            _broadcastTroopUpdate();
          });
        });
      };

      function goToScout(scout) {
        $timeout(function () {
          $state.go('scout-detail', { scoutId: scout.id });
        },500);
      };

      function addBatchDetails(event) {
        selectDetailBottomSheetService.show(event).then(function (selectedItem) {
          scoutListDialogService.showDialog({troop: $ctrl.troop}).then(function (selectedScouts) {
            $ctrl._showSelectedDialog(selectedItem, selectedScouts);
          });
        });
      };

      function _showSelectedDialog(selectedItem, selectedScouts) {
        if (selectedItem.name === 'requirement') {
          requirementDialogService.showDialog().then(function (requirementData) {
            $ctrl._addRequirementsToScouts(requirementData, selectedScouts);
          });
        } else if (selectedItem.name === 'service') {
          serviceProjectDialogService.showCreateDialog().then(function (serviceData) {
            $ctrl._addServiceProjectsToScouts(serviceData, selectedScouts);
          });
        } else if (selectedItem.name === 'campout') {
          campoutDialogService.showCreateCampoutDialog().then(function (campoutData) {
            $ctrl._addCampoutsToScouts(campoutData, selectedScouts);
          });
        } else if (selectedItem.name === 'position') {
          positionDialogService.showCreateDialog().then(function (positionData) {
            $ctrl._addPositionsToScouts(positionData, selectedScouts);
          });
        }
      };

     function _addRequirementsToScouts(requirementData, selectedScouts) {
        var promises = [];
        selectedScouts.forEach(function (currentScout) {
          requirementData.forEach(function (currentRequirement) {
            currentScout.addRequirement(currentRequirement);
            promises.push(currentScout.save());
          });
        });
        $q.all(promises).then(function () {
          $mdToast.showSimple('Saved Data Successfully');
          _getTroop();
        });
      };

      function _addServiceProjectsToScouts(serviceData, selectedScouts) {
        var promises = [];
        selectedScouts.forEach(function (currentScout) {
          currentScout.addService(serviceData.description, serviceData.hours);
          promises.push(currentScout.save());
        });
        $q.all(promises).then(function () {
          $mdToast.showSimple('Saved Data Successfully');
          $ctrl._getTroop();
        });
      };

      function _addCampoutsToScouts(campoutData, selectedScouts) {
        var promises = [];
        selectedScouts.forEach(function (currentScout) {
          currentScout.addCampout(campoutData.description, campoutData.start, campoutData.end);
          promises.push(currentScout.save());
        });
        $q.all(promises).then(function () {
          $mdToast.showSimple('Saved Data Successfully');
          $ctrl._getTroop();
        });
      };

      function _addPositionsToScouts(positionData, selectedScouts) {
        var promises = [];
        selectedScouts.forEach(function (currentScout) {
          currentScout.addPosition(positionData.title, positionData.start, positionData.end);
          promises.push(currentScout.save());
        });
        $q.all(promises).then(function () {
          $mdToast.showSimple('Saved Data Successfully');
          $ctrl._getTroop();
        });
      };

      function _getTroop() {
        scoutService.getScouts().then(function (troop) {
          $ctrl.troop = troop;
        });
      };
    }


})();