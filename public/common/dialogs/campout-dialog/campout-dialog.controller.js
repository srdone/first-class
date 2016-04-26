export { CampoutDialogController as default };

CampoutDialogController.$inject = ['$mdDialog'];
function CampoutDialogController($mdDialog) {
  
  var vm = this;

  vm.returnCampout = function () {
    return $mdDialog.hide(this.campout);
  };

  vm.cancel = function () {
    return $mdDialog.cancel();
  };

}