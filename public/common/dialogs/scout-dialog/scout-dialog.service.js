import tpl from './scout-dialog.template.html!text';
import ScoutDialogController from './scout-dialog.controller';

export { scoutDialogService as default };

scoutDialogService.$inject = ['$mdDialog'];
function scoutDialogService($mdDialog) {

  return {
    showCreateScoutDialog: _showCreateScoutDialog,
    showEditScoutDialog: _showEditScoutDialog
  }
  
  /*===============Functions==============*/ 

  function _scoutDialogPreset(options)  {

    return {
      template: tpl,
      controller: ScoutDialogController,
      controllerAs: 'vm',
      bindToController: true,
      targetEvent: options.targetEvent,
      locals: {
        create: options.create,
        scout: options.scout
      }
    };

  };

  function _showCreateScoutDialog(createOptions) {
    var options = {
      create: true
    };

    if (createOptions.targetEvent) {
      options.targetEvent = createOptions.targetEvent;
    }

    return $mdDialog.show(_scoutDialogPreset(options));
  };

  function _showEditScoutDialog(editOptions) {
    var options = {
      scout: editOptions.scout,
      create: false
    };

    if (editOptions.targetEvent) {
      options.targetEvent = editOptions.targetEvent;
    }

    return $mdDialog.show(_scoutDialogPreset(options));
  };

}