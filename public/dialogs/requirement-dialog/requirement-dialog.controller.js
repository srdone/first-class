'use strict';

angular.module('firstClass').controller('RequirementDialogController', ['$mdDialog', 'existingRequirements', '$timeout',
  function ($mdDialog, existingRequirements, $timeout) {

    var _init = function () {
      if (this.preSelectedRequirements.length) {
        this.preSelectedRequirements.forEach(function markAsSelected(current) {
          var index = _.findIndex(existingRequirements, _.matches({id: current.id}));

          existingRequirements[index].isSelected = true;
          existingRequirements[index].wasPreSelected = true;
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

    var _getWasPreSelected = function () {
      return existingRequirements.filter(function (currentRequirement) {
        return currentRequirement.wasPreSelected;
      });
    };

    this.returnAllSelections = function () {
      var allSelected = _getAllSelected();

      $mdDialog.hide(allSelected);
    };

    this.returnChangedSelections = function () {
      var wasPreSelected = _getWasPreSelected();

      var added = _.difference(_getAllSelected(), wasPreSelected);
      var removed = _.intersection(_getNotSelected(), wasPreSelected);

      $mdDialog.hide({
        added: added,
        removed: removed
      });
    };

    this.cancel = function () {
      $mdDialog.cancel();
    };

  }]);