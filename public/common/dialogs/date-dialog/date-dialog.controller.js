export { DateDialogController as default };

DateDialogController.$inject = ['$mdDialog']
function DateDialogController($mdDialog) {

  var vm = this;

  vm.returnDate = function () {
    return $mdDialog.hide(this.date);
  };

  vm.cancel = function () {
    return $mdDialog.cancel();
  };

}