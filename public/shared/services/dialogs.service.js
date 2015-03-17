'use strict';

angular.module('firstClass').factory('dialogService', [function () {

  var _addScoutDialogPreset = {
    templateUrl: 'shared/dialog-templates/add-scout-dialog.template.html',
    controller: 'AddScoutDialogController',
    controllerAs: 'vm'
  }

  return {
    addScoutDialogPreset: _addScoutDialogPreset
  }

}]);