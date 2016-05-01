export { ScoutListDialogController as default };

ScoutListDialogController.$inject = ['$mdDialog', '$timeout'];
function ScoutListDialogController($mdDialog, $timeout) {

  var vm = this;

  var _init = function () {
    vm.troop.forEach(function clearIsSelected (currentScout) {
      if (currentScout.isSelected) {
        delete currentScout.isSelected;
      }
    });
  };

  // wait for a moment to allow binding of locals. Otherwise vm.troop will not be defined.
  $timeout(_init);

  var _getAllSelected = function () {
    return vm.troop.filter(function (currentScout) {
      return currentScout.isSelected;
    });
  };

  this.returnAllSelections = function () {
    var allSelected = _getAllSelected();
    $mdDialog.hide(allSelected);
  };

  this.cancel = function () {
    $mdDialog.cancel();
  };

}