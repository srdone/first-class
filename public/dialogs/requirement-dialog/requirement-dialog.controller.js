'use strict';

angular.module('firstClass').controller('RequirementDialogController', ['$mdDialog', 'existingRequirements', '$timeout',
  function ($mdDialog, existingRequirements, $timeout) {

    var _init = function () {
      if (this.preSelectedRequirements.length) {
        this.preSelectedRequirements.forEach(function markAsSelected(current) {
          var index = existingRequirements.indexOf(current);

          this.existingRequirements[index].isSelected = true;
        });
      }
    };

    // wait to run _init until controller has instantiated. Otherwise bindToController hasn't yet run
    $timeout(_init.bind(this), 4);

    var _getAllSelected = function () {
      return existingRequirements.filter(function (currentRequirement) {
        return currentRequirement.isSelected;
      });
    };

    var _getNotSelected = function () {
      return existingRequirements.filter(function (currentRequirement) {
        return !currentRequirement.isSelected;
      });
    };

    this.returnAllSelections = function () {
      var allSelected = _getAllSelected();

      $mdDialog.hide(allSelected);
    };

    this.returnChangedSelections = function () {
      var added = _.difference(_getAllSelected(), this.preSelectedRequirements);
      var removed = _.difference(_getNotSelected(), this.preSelectedRequirements);

      return {
        added: added,
        removed: removed
      }
    };

    this.cancel = function () {
      $mdDialog.cancel();
    };

  }]);