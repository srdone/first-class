export { PositionDialogController as default };

PositionDialogController.$inject = ['$mdDialog'];
function PositionDialogController($mdDialog) {
  
  this.returnPosition = function () {
    $mdDialog.hide(this.position);
  };

  this.cancel = function () {
    $mdDialog.cancel();
  };

}