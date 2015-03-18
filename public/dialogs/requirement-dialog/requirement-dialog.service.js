'use strict';

angular.module('firstClass').factory('requirementDialogService', ['$mdDialog', function ($mdDialog) {

  var _getDialogPreset = function (options) {

    return {
      templateUrl: 'dialogs/requirement-dialog/requirement-dialog.template.html',
      controller: 'RequirementDialogController',
      controllerAs: 'vm',
      bindToController: true,
      targetEvent: options.targetEvent,
      locals: {
        preSelectedRequirements: options.preSelectedRequirements,
        difference: options.difference
      },
      resolve: {
        existingRequirements: ['requirementService', function (requirementService) {
          return requirementService.getAllRequirements();
        }]
      }
    };

  };

  var _showDialog = function (editOptions) {

    if (!editOptions) {
      var editOptions = {};
    }

    if (!editOptions.preSelectedRequirements) {
      editOptions.preSelectedRequirements = [];
    }

    var options = {
      preSelectedRequirements: editOptions.preSelectedRequirements,
      difference: editOptions.difference
    };

    if (editOptions.targetEvent) {
      options.targetEvent = editOptions.targetEvent;
    }

    return $mdDialog.show(_getDialogPreset(options));
  };

  return {
    showDialog: _showDialog
  }

}]);