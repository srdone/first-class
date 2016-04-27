import tpl from './date-dialog.template.html!text';
import DateDialogController from './date-dialog.controller';

export { dateDialogService as default };

dateDialogService.$inject = ['$mdDialog'];
function dateDialogService($mdDialog) {

  return {
    show: _show
  };

  /////////

  function _getDialogPreset(options) {

    return {
      template: tpl,
      controller: DateDialogController,
      controllerAs: 'vm',
      bindToController: true,
      targetEvent: options.targetEvent,
      locals: {
        date: options.date
      }
    };

  };

  function _show(editOptions) {
    var options = {
      date: editOptions.date
    };

    if (editOptions) {
      options.targetEvent = editOptions.targetEvent;
    }

    return $mdDialog.show(_getDialogPreset(options));
  };

}