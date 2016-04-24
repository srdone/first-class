(function () {

  angular
    .module('firstClass')
    .controller('ScoutSidebarController', ScoutSidebarController);

  ScoutSidebarController.$inject = ['requirementService', 'scoutService', '$stateParams', 'requirements'];

  /* @ngInject */
  function ScoutSidebarController(requirementService, scoutService, $stateParams, requirements) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'ScoutSidebarController';

    activate();

    ////////////////

    function activate() {
      requirementService.getAllRequirements().then(function () {
        scoutService.getScoutById($stateParams.scoutId).then(function (scout) {
          vm.scout = scout;
        });
      });

    }


  }

}());