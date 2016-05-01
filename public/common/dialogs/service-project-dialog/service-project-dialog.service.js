import tpl from './service-project-dialog.template.html!text';
import ServiceProjectDialogController from './service-project-dialog.controller';

export { serviceProjectDialogService as default };

serviceProjectDialogService.$inject = ['$mdDialog']
function serviceProjectDialogService($mdDialog) {

  return {
    showCreateDialog: _showCreateDialog,
    showEditDialog: _showEditDialog
  }

  /*===============Functions==============*/

  function _getDialogPreset(options) {

    return {
      template: tpl,
      controller: ServiceProjectDialogController,
      controllerAs: 'vm',
      bindToController: true,
      targetEvent: options.targetEvent,
      locals: {
        create: options.create,
        serviceProject: options.serviceProject
      }
    };

  };

  function _showCreateDialog(createOptions) {
    var options = {
      create: true
    };

    if (createOptions) {
      options.targetEvent = createOptions.targetEvent;
    }

    return $mdDialog.show(_getDialogPreset(options));
  };

  function _showEditDialog(editOptions) {
    var options = {
      serviceProject: editOptions.serviceProject,
      create: false
    };

    if (editOptions) {
      options.targetEvent = editOptions.targetEvent;
    }

    return $mdDialog.show(_getDialogPreset(options));
  };

}