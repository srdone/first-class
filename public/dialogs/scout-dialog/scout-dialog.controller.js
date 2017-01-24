angular.module('firstClass').controller('ScoutDialogController', ['$mdDialog',
  function ($mdDialog) {

    this.addScout = function () {
      $mdDialog.hide(this.scout);
    };

    this.updateScout = function () {
      $mdDialog.hide(this.scout);
    };

    this.cancel = function () {
      $mdDialog.cancel();
    };

  }]);