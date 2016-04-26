import angular from 'angular';
import tpl from './campout-dialog.template.html!text';
import controller from './campout-dialog.controller';

export { campoutDialogService as default };

angular.module('firstClass').factory('campoutDialogService', campoutDialogService);

campoutDialogService.$inject = ['$mdDialog'];
function campoutDialogService($mdDialog) {

  return {
    showCreateCampoutDialog: _showCreateCampoutDialog,
    showEditCampoutDialog: _showEditCampoutDialog
  }
  
  /////////
  
  function _campoutDialogPreset(options) {

    return {
      template: tpl,
      controller: controller,
      controllerAs: 'vm',
      bindToController: true,
      targetEvent: options.targetEvent,
      locals: {
        create: options.create,
        campout: options.campout
      }
    };

  };

  function _showCreateCampoutDialog(createOptions) {
    var options = {
      create: true
    };

    if (createOptions) {
      options.targetEvent = createOptions.targetEvent;
    }

    return $mdDialog.show(_campoutDialogPreset(options));
  };

  function _showEditCampoutDialog(editOptions) {
    var options = {
      campout: editOptions.campout,
      create: false
    };

    if (editOptions) {
      options.targetEvent = editOptions.targetEvent;
    }

    return $mdDialog.show(_campoutDialogPreset(options));
  };

}