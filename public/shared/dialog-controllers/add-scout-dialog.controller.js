angular.module('firstClass').controller('AddScoutDialogController', ['scoutService', '$mdDialog',
  function (scoutService, $mdDialog) {

  this.addScout = function () {
    scoutService.createNewScout(this.newScout).then(function (createdScout) {
      $mdDialog.hide(createdScout);
    })
  };

    this.cancel = function () {
      $mdDialog.cancel();
    };

}]);