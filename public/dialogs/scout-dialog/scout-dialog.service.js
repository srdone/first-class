'use strict';

angular.module('firstClass').factory('scoutDialogService', ['$mdDialog', function ($mdDialog) {

  var _scoutDialogPreset = function (options)  {

    return {
      templateUrl: 'dialogs/scout-dialog/scout-dialog.template.html',
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
      targetEvent: createOptions.targetEvent,
      create: true
    };

    return $mdDialog.show(_scoutDialogPreset(options));
  };

  var _showEditScoutDialog = function (editOptions) {
    var options = {
      scout: editOptions.scout,
      targetEvent: editOptions.targetEvent,
      create: false
    };
    return $mdDialog.show(_scoutDialogPreset(options));
  };

  return {
    showCreateScoutDialog: _showCreateScoutDialog,
    showEditScoutDialog: _showEditScoutDialog
  }

}]);