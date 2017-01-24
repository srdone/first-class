'use strict';

angular.module('firstClass').factory('positionDialogService', ['$mdDialog', function ($mdDialog) {

  var _getDialogPreset = function (options) {

    return {
      templateUrl: 'dialogs/position-dialog/position-dialog.template.html',
      controller: 'PositionDialogController',
      controllerAs: 'vm',
      bindToController: true,
      targetEvent: options.targetEvent,
      locals: {
        create: options.create,
        position: options.position
      }
    };

  };

  var _showCreateDialog = function (createOptions) {

    if (!createOptions) {
      var createOptions = {};
    }

    var options = {
      create: true
    };

    if (createOptions.targetEvent) {
      options.targetEvent = createOptions.targetEvent;
    }

    return $mdDialog.show(_getDialogPreset(options));
  };

  var _showEditDialog = function (editOptions) {

    if (!editOptions) {
      var editOptions = {};
    }

    var options = {
      position: editOptions.position,
      create: false
    };

    if (editOptions.targetEvent) {
      options.targetEvent = editOptions.targetEvent;
    }

    return $mdDialog.show(_getDialogPreset(options));
  };

  return {
    showCreateDialog: _showCreateDialog,
    showEditDialog: _showEditDialog
  }

}]);