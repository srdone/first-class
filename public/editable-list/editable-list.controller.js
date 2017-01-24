(function () {

  angular
    .module('firstClass')
    .controller('EditableListController', EditableListController);

  EditableListController.$inject = [''];

  /* @ngInject */
  function EditableListController() {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'EditableListController';
    vm.items = vm.items;
    vm.addItem = addItem;
    vm.deleteItem = deleteItem;
    vm.editItem = editItem;

    function addItem (event) {
      console.log('added item');
    }

    function deleteItem (event, item) {
      console.log('deleted item' + item);
    }

    function editItem (event, item) {
      console.log('edited item' + item);
    }

    activate();

    ////////////////

    function activate() {
    }


  }

}());