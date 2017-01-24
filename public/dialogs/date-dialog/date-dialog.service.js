'use strict';

angular.module('firstClass').factory('dateDialogService', ['$mdDialog', function ($mdDialog) {

  var _getDialogPreset = function (options) {

    return {
      templateUrl: 'dialogs/date-dialog/date-dialog.template.html',
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
    debugger;
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