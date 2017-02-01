'use strict';

angular.module('firstClass').factory('scoutListDialogService', ['$mdDialog', function ($mdDialog) {

  var _getDialogPreset = function (options) {

    return {
      templateUrl: 'common/dialogs/scout-list-dialog/scout-list-dialog.template.html',
      controller: 'ScoutListDialogController',
      controllerAs: '$ctrl',
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