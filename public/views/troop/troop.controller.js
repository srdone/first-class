'use strict';

var app = angular.module('firstClass');

app.controller('TroopController', ['$scope', 'scoutService', 'scoutDialogService', '$mdToast', 'selectDetailBottomSheetService',
  'scoutListDialogService', 'positionDialogService', 'requirementDialogService', 'campoutDialogService', 'serviceProjectDialogService', '$q',
  '$rootScope', 'requirementService', '$timeout', '$state', 'requirements',
	function ($scope, scoutService, scoutDialogService, $mdToast, selectDetailBottomSheetService, scoutListDialogService,
    positionDialogService, requirementDialogService, campoutDialogService, serviceProjectDialogService, $q, $rootScope, requirementService,
    $timeout, $state, requirements) {

    var _init = function () {
      scoutService.getScouts().then(function (scouts) {
        $scope.troop = scouts;
        _broadcastTroopUpdate();
      });
    };

    _init();

    var _broadcastTroopUpdate = function () {
      $rootScope.$broadcast('troop:updated', $scope.troop);
    };

    $scope.addScout = function (event) {
      scoutDialogService.showCreateScoutDialog({targetEvent: event}).then(function (newScoutData) {
        scoutService.createNewScout(newScoutData).then(function (newScout) {
          $mdToast.showSimple('Created Scout: ' + newScout.getName());
          $scope.troop.push(newScout);
          _broadcastTroopUpdate();
        });
      });
    };

    $scope.goToScout = function (scout) {
      //var i;
      //var hideScout = function (scoutToHide) {
      //  scoutToHide.leaving = true;
      //};
      //
      //for (i = 0; i < $scope.troop.length; i += 1) {
      //  if ($scope.troop[i] !== scout) {
      //    (function (i) {
      //      $timeout(hideScout.bind(null, $scope.troop[i]));
      //    }(i));
      //  }
      //}

      $timeout(function () {
        $state.go('app.scout-detail', { scoutId: scout.id });
      },500);
    };

    $scope.addBatchDetails = function (event) {
      selectDetailBottomSheetService.show(event).then(function (selectedItem) {
        scoutListDialogService.showDialog({troop: $scope.troop}).then(function (selectedScouts) {
          _showSelectedDialog(selectedItem, selectedScouts);
        });
      });
    };

    var _showSelectedDialog = function (selectedItem, selectedScouts) {
      if (selectedItem.name === 'requirement') {
        requirementDialogService.showDialog().then(function (requirementData) {
          _addRequirementsToScouts(requirementData, selectedScouts);
        });
      } else if (selectedItem.name === 'service') {
        serviceProjectDialogService.showCreateDialog().then(function (serviceData) {
          _addServiceProjectsToScouts(serviceData, selectedScouts);
        });
      } else if (selectedItem.name === 'campout') {
        campoutDialogService.showCreateCampoutDialog().then(function (campoutData) {
          _addCampoutsToScouts(campoutData, selectedScouts);
        });
      } else if (selectedItem.name === 'position') {
        positionDialogService.showCreateDialog().then(function (positionData) {
          _addPositionsToScouts(positionData, selectedScouts);
        });
      }
    };

    var _addRequirementsToScouts = function (requirementData, selectedScouts) {
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

    var _addServiceProjectsToScouts = function (serviceData, selectedScouts) {
      var promises = [];
      selectedScouts.forEach(function (currentScout) {
        currentScout.addService(serviceData.description, serviceData.hours);
        promises.push(currentScout.save());
      });
      $q.all(promises).then(function () {
        $mdToast.showSimple('Saved Data Successfully');
        _getTroop();
      });
    };

    var _addCampoutsToScouts = function (campoutData, selectedScouts) {
      var promises = [];
      selectedScouts.forEach(function (currentScout) {
        currentScout.addCampout(campoutData.description, campoutData.start, campoutData.end);
        promises.push(currentScout.save());
      });
      $q.all(promises).then(function () {
        $mdToast.showSimple('Saved Data Successfully');
        _getTroop();
      });
    };

    var _addPositionsToScouts = function (positionData, selectedScouts) {
      var promises = [];
      selectedScouts.forEach(function (currentScout) {
        currentScout.addPosition(positionData.title, positionData.start, positionData.end);
        promises.push(currentScout.save());
      });
      $q.all(promises).then(function () {
        $mdToast.showSimple('Saved Data Successfully');
        _getTroop();
      });
    };

    var _getTroop = function () {
      scoutService.getScouts().then(function (troop) {
        $scope.troop = troop;
        _broadcastTroopUpdate();
      });
    };

}]);