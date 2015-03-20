(function () {

  angular
    .module('firstClass')
    .controller('MakeEditableController', MakeEditableController);

  MakeEditableController.$inject = ['$parse', '$scope'];

  /* @ngInject */
  function MakeEditableController($parse, $scope) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'MakeEditableController';
    vm.deleteFunction = deleteFunction;
    vm.editFunction = editFunction;

    function deleteFunction () {
      var fn = $parse(vm.delete)();
      fn(vm.item);
    }

    function editFunction (event) {
      var fn = $parse(vm.edit)();
      fn(event, vm.item);
    }

    activate();

    ////////////////

    function activate() {

    }


  }

}());