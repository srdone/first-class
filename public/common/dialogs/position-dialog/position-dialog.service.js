import tpl from './position-dialog.template.html!text';
import PositionDialogController from './position-dialog.controller';

export { positionDialogService as default };

positionDialogService.$inject = ['$mdDialog'];
function positionDialogService($mdDialog) {

  return {
    showCreateDialog: _showCreateDialog,
    showEditDialog: _showEditDialog
  }

  /*===============Functions==============*/ 

  function _getDialogPreset(options) {

    return {
      template: tpl,
      controller: PositionDialogController,
      controllerAs: 'vm',
      bindToController: true,
      targetEvent: options.targetEvent,
      locals: {
        create: options.create,
        position: options.position
      }
    };

  };

  function _showCreateDialog(createOptions) {

    if (!createOptions) {
      var createOptions = {};
    }

    var options = {
      create: true
    };

    if (createOptions.targetEvent) {
      options.targetEvent = createOptions.targetEvent;
    }

    return $mdDialog.show(_getDialogPreset(options));
  };

  function _showEditDialog(editOptions) {

    if (!editOptions) {
      var editOptions = {};
    }

    var options = {
      position: editOptions.position,
      create: false
    };

    if (editOptions.targetEvent) {
      options.targetEvent = editOptions.targetEvent;
    }

    return $mdDialog.show(_getDialogPreset(options));
  };

}