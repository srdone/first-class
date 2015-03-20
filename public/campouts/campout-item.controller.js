(function () {

  angular
    .module('firstClass')
    .controller('CampoutItemController', CampoutItemController);

  CampoutItemController.$inject = ['$filter'];

  /* @ngInject */
  function CampoutItemController ($filter) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.description = vm.campout.description;
    vm.start = $filter('date')(vm.campout.start, 'shortDate');
    vm.end = $filter('date')(vm.campout.end, 'shortDate');


    activate();

    ////////////////

    function activate() {
    }


  }

}());