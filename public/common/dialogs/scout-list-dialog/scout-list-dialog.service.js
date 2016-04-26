import angular from 'angular';
import tpl from './scout-list-dialog.template.html!text';

angular.module('firstClass').factory('scoutListDialogService', ['$mdDialog', function ($mdDialog) {

  var _getDialogPreset = function (options) {

    return {
      template: tpl,
      controller: 'ScoutListDialogController',
      controllerAs: 'vm',
      bindToController: true,
      targetEvent: options.targetEvent,
      locals: {
        troop: options.troop
      }
    };

  };

  var _showDialog = function (editOptions) {

    var options = {
      troop: editOptions.troop
    };

    if (editOptions.targetEvent) {
      options.targetEvent = editOptions.targetEvent;
    }

    return $mdDialog.show(_getDialogPreset(options));
  };

  return {
    showDialog: _showDialog
  }

}]);