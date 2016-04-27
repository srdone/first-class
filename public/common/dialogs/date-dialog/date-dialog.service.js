import angular from 'angular';
import tpl from './date-dialog.template.html!text';

angular.module('firstClass').factory('dateDialogService', ['$mdDialog', function ($mdDialog) {

  var _getDialogPreset = function (options) {

    return {
      template: tpl,
      controller: 'DateDialogController',
      controllerAs: 'vm',
      bindToController: true,
      targetEvent: options.targetEvent,
      locals: {
        date: options.date
      }
    };

  };

  var _show = function (editOptions) {
    var options = {
      date: editOptions.date
    };

    if (editOptions) {
      options.targetEvent = editOptions.targetEvent;
    }

    return $mdDialog.show(_getDialogPreset(options));
  };

  return {
    show: _show
  }

}]);