(function () {

  angular
    .module('firstClass')
    .controller('MakeEditableController', MakeEditableController);

  MakeEditableController.$inject = ['$parse', '$log', '$element'];

  /* @ngInject */
  function MakeEditableController($parse, $log, $element) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'MakeEditableController';
    vm.deleteFunction = deleteFunction;
    vm.editFunction = editFunction;
    vm.canEdit = false;
    vm.canDelete = false;

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

    function checkForAccessibility () {
      if (!vm.ariaDescription) {
        $log.warn('ARIA: attribute " aria-description ", required for accessibility, is missing on node:');
        $log.log($element[0]);
      }
    }

    activate();

    ////////////////

    function activate() {
      vm.deleteTakesEvents = $parse(vm.deleteTakesEvents)();
      vm.editTakesEvents = $parse(vm.editTakesEvents)();
      vm.delete = $parse(vm.delete)();
      vm.edit = $parse(vm.edit)();
      vm.canEdit = vm.edit ? true : false;
      vm.canDelete = vm.delete ? true : false;
      checkForAccessibility();
    }


  }

}());