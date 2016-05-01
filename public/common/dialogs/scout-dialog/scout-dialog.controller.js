export { ScoutDialogController as default };

ScoutDialogController.$inject = ['$mdDialog'];
function ScoutDialogController($mdDialog) {
  
  this.addScout = function () {
    $mdDialog.hide(this.scout);
  };

  this.updateScout = function () {
    $mdDialog.hide(this.scout);
  };

  this.cancel = function () {
    $mdDialog.cancel();
  };

}