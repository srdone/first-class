ScoutSidebarController.$inject = ['requirementService', 'scoutService', '$stateParams', 'requirements'];
export default function ScoutSidebarController(requirementService, scoutService, $stateParams, requirements) {

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