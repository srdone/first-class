'use strict';

angular.module('firstClass').controller('ScoutListDialogController', ['$mdDialog',
  function ($mdDialog) {

    var vm = this;

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