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
    var options = {
      targetEvent: createOptions.targetEvent,
      create: true
    };

    return $mdDialog.show(_getDialogPreset(options));
  };

  var _showEditDialog = function (editOptions) {
    var options = {
      targetEvent: editOptions.targetEvent,
      position: editOptions.position,
      create: false
    };

    return $mdDialog.show(_getDialogPreset(options));
  };

  return {
    showCreateDialog: _showCreateDialog,
    showEditDialog: _showEditDialog
  }

}]);