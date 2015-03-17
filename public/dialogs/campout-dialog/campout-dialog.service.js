'use strict';

angular.module('firstClass').factory('campoutDialogService', ['$mdDialog', function ($mdDialog) {

  var _campoutDialogPreset = function (options) {

    return {
      templateUrl: 'dialogs/campout-dialog/campout-dialog.template.html',
      controller: 'CampoutDialogController',
      controllerAs: 'vm',
      bindToController: true,
      targetEvent: options.targetEvent,
      locals: {
        create: options.create,
        campout: options.campout
      }
    };

  };

  var _showCreateCampoutDialog = function (createOptions) {
    var options = {
      targetEvent: createOptions.targetEvent,
      create: true
    };

    return $mdDialog.show(_campoutDialogPreset(options));
  };

  var _showEditCampoutDialog = function (editOptions) {
    var options = {
      targetEvent: editOptions.targetEvent,
      campout: editOptions.campout,
      create: false
    };

    return $mdDialog.show(_campoutDialogPreset(options));
  };

  return {
    showCreateCampoutDialog: _showCreateCampoutDialog,
    showEditCampoutDialog: _showEditCampoutDialog
  }

}]);