import angular from 'angular';
import tpl from './service-project-dialog.template.html!text';

angular.module('firstClass').factory('serviceProjectDialogService', ['$mdDialog', function ($mdDialog) {

  var _getDialogPreset = function (options) {

    return {
      templateUrl: tpl,
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
      create: true
    };

    if (createOptions) {
      options.targetEvent = createOptions.targetEvent;
    }

    return $mdDialog.show(_getDialogPreset(options));
  };

  var _showEditDialog = function (editOptions) {
    var options = {
      serviceProject: editOptions.serviceProject,
      create: false
    };

    if (editOptions) {
      options.targetEvent = editOptions.targetEvent;
    }

    return $mdDialog.show(_getDialogPreset(options));
  };

  return {
    showCreateDialog: _showCreateDialog,
    showEditDialog: _showEditDialog
  }

}]);