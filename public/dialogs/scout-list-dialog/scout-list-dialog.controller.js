'use strict';

angular.module('firstClass').controller('ScoutListDialogController', ['$mdDialog', '$timeout',
  function ($mdDialog, $timeout) {

    var vm = this;

    var _init = function () {
      vm.troop.forEach(function clearIsSelected (currentScout) {
        if (currentScout.isSelected) {
          delete currentScout.isSelected;
        }
      });
    };

    $timeout(_init);

    var _getAllSelected = function () {
      return vm.troop.filter(function (currentScout) {
        return currentScout.isSelected;
      });
    };

    this.returnAllSelections = function () {
      var allSelected = _getAllSelected();
      $mdDialog.hide(allSelected);
    };

    this.cancel = function () {
      $mdDialog.cancel();
    };

  }]);