angular.module('firstClass').controller('ScoutDialogController', ['scoutService', '$mdDialog', '$mdToast',
  function (scoutService, $mdDialog, $mdToast) {

  this.addScout = function () {
    scoutService.createNewScout(this.scout).then(function (createdScout) {
      $mdToast.showSimple('Created Scout: ' + createdScout.getName());
      $mdDialog.hide(createdScout);
    });
  };

    this.updateScout = function () {
      this.scout.save().then(function (savedScout) {
        $mdToast.showSimple('Saved Scout: ' + savedScout.getName());
        $mdDialog.hide(savedScout);
      });
    };

    this.cancel = function () {
      $mdDialog.cancel();
    };

}]);