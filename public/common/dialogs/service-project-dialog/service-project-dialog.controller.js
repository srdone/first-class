export { ServiceProjectDialogController as default };

ServiceProjectDialogController.$inject = ['$mdDialog'];
function ServiceProjectDialogController($mdDialog) {

  this.cancel = $mdDialog.cancel;
  this.returnServiceProject = function () {
    return $mdDialog.hide(this.serviceProject);
  };

}