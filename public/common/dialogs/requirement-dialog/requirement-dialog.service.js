import tpl from './requirement-dialog.template.html!text';
import RequirementDialogController from './requirement-dialog.controller';

export { requirementDialogService as default };

requirementDialogService.$inject = ['$mdDialog'];
function requirementDialogService($mdDialog) {

  return {
    showDialog: _showDialog
  }
  
  /*==========Functions==========*/

  function _getDialogPreset(options) {

    return {
      template: tpl,
      controller: RequirementDialogController,
      controllerAs: 'vm',
      bindToController: true,
      targetEvent: options.targetEvent,
      locals: {
        preSelectedRequirements: options.preSelectedRequirements,
        difference: options.difference
      },
      resolve: {
        existingRequirements: ['requirementService', function (requirementService) {
          return requirementService.getAllRequirements();
        }]
      }
    };

  };

  function _showDialog(editOptions) {

    if (!editOptions) {
      var editOptions = {};
    }

    if (!editOptions.preSelectedRequirements) {
      editOptions.preSelectedRequirements = [];
    }

    var options = {
      preSelectedRequirements: editOptions.preSelectedRequirements,
      difference: editOptions.difference
    };

    if (editOptions.targetEvent) {
      options.targetEvent = editOptions.targetEvent;
    }

    return $mdDialog.show(_getDialogPreset(options));
  };

}