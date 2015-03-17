'use strict';

angular.module('firstClass').factory('scoutDialogService', ['$mdDialog', function ($mdDialog) {

  var _addScoutDialogPreset = function (options)  {

    var defaultOptions =  {
      templateUrl: 'dialogs/scout-dialog.template.html',
      controller: 'ScoutDialogController',
      controllerAs: 'vm',
      bindToController: true,
      targetEvent: options.event,
      locals: {
        create: options.create,
        scout: options.scout
      }
    };

    return defaultOptions;

  };

  var _showScoutDialog = function (options) {
    return $mdDialog.show(_addScoutDialogPreset(options));
  };

  var _showEditScoutDialog = function (editOptions) {
    var options = {
      scout: editOptions.scout,
      event: editOptions.event,
      create: false
    };
    return $mdDialog.show(_addScoutDialogPreset(options));
  };

  return {
    showScoutDialog: _showScoutDialog,
    showEditScoutDialog: _showEditScoutDialog
  }

}]);