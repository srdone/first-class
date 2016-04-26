import angular from 'angular';
import tpl from './campout-dialog.template.html!text';

angular.module('firstClass').factory('campoutDialogService', ['$mdDialog', function ($mdDialog) {

  var _campoutDialogPreset = function (options) {

    return {
      template: tpl,
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
      create: true
    };

    if (createOptions) {
      options.targetEvent = createOptions.targetEvent;
    }

    return $mdDialog.show(_campoutDialogPreset(options));
  };

  var _showEditCampoutDialog = function (editOptions) {
    var options = {
      campout: editOptions.campout,
      create: false
    };

    if (editOptions) {
      options.targetEvent = editOptions.targetEvent;
    }

    return $mdDialog.show(_campoutDialogPreset(options));
  };

  return {
    showCreateCampoutDialog: _showCreateCampoutDialog,
    showEditCampoutDialog: _showEditCampoutDialog
  }

}]);