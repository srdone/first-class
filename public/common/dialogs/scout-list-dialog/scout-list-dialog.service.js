import tpl from './scout-list-dialog.template.html!text';
import ScoutListDialogController from './scout-list-dialog.controller';

export { scoutListDialogService as default };

scoutListDialogService.$inject = ['$mdDialog'];
function scoutListDialogService($mdDialog) {

  return {
    showDialog: _showDialog
  }
  
  /*===============Functions==============*/ 

  function _getDialogPreset(options) {

    return {
      template: tpl,
      controller: ScoutListDialogController,
      controllerAs: 'vm',
      bindToController: true,
      targetEvent: options.targetEvent,
      locals: {
        troop: options.troop
      }
    };

  }

  function _showDialog(editOptions) {

    var options = {
      troop: editOptions.troop
    };

    if (editOptions.targetEvent) {
      options.targetEvent = editOptions.targetEvent;
    }

    return $mdDialog.show(_getDialogPreset(options));
  }

}