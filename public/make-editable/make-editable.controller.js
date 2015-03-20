(function () {

  angular
    .module('firstClass')
    .controller('MakeEditableController', MakeEditableController);

  MakeEditableController.$inject = ['$parse'];

  /* @ngInject */
  function MakeEditableController($parse) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'MakeEditableController';
    vm.deleteFunction = deleteFunction;
    vm.editFunction = editFunction;

    function deleteFunction ($event) {
      if (vm.deleteTakesEvents) {
        vm.delete($event, vm.item);
      } else {
        vm.delete(vm.item);
      }
    }

    function editFunction (event) {
      if (vm.editTakesEvents) {
        vm.edit(event, vm.item);
      } else {
        vm.edit(vm.item);
      }
    }

    activate();

    ////////////////

    function activate() {
      vm.deleteTakesEvents = $parse(vm.deleteTakesEvents)();
      vm.editTakesEvents = $parse(vm.editTakesEvents)();
      vm.delete = $parse(vm.delete)();
      vm.edit = $parse(vm.edit)();
    }


  }

}());