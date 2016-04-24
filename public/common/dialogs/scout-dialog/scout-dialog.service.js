'use strict';

angular.module('firstClass').factory('scoutDialogService', ['$mdDialog', function ($mdDialog) {

  var _scoutDialogPreset = function (options)  {

    return {
      templateUrl: 'common/dialogs/scout-dialog/scout-dialog.template.html',
      controller: 'ScoutDialogController',
      controllerAs: 'vm',
      bindToController: true,
      targetEvent: options.targetEvent,
      locals: {
        create: options.create,
        scout: options.scout
      }
    };

  };

  var _showCreateScoutDialog = function (createOptions) {
    var options = {
      create: true
    };

    if (createOptions.targetEvent) {
      options.targetEvent = createOptions.targetEvent;
    }

    return $mdDialog.show(_scoutDialogPreset(options));
  };

  var _showEditScoutDialog = function (editOptions) {
    var options = {
      scout: editOptions.scout,
      create: false
    };

    if (editOptions.targetEvent) {
      options.targetEvent = editOptions.targetEvent;
    }

    return $mdDialog.show(_scoutDialogPreset(options));
  };

  return {
    showCreateScoutDialog: _showCreateScoutDialog,
    showEditScoutDialog: _showEditScoutDialog
  }

}]);