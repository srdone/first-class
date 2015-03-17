'use strict';

angular.module('firstClass').factory('serviceProjectDialogService', ['$mdDialog', function ($mdDialog) {

  var _getDialogPreset = function (options) {

    return {
      templateUrl: 'dialogs/service-project-dialog/service-project-dialog.template.html',
      controller: 'ServiceProjectDialogController',
      controllerAs: 'vm',
      bindToController: true,
      targetEvent: options.targetEvent,
      locals: {
        create: options.create,
        serviceProject: options.serviceProject
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
      serviceProject: editOptions.serviceProject,
      create: false
    };

    return $mdDialog.show(_getDialogPreset(options));
  };

  return {
    showCreateDialog: _showCreateDialog,
    showEditDialog: _showEditDialog
  }

}]);