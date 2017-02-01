(function () {

  angular
    .module('firstClass')
    .component('fcsScoutSidebar', {
      controller: FCSScoutSidebarComponent,
      template: 'scout-sidebar/fcs-scout-sidebar.component.html',
      bindings: {}
    });

  FCSScoutSidebarComponent.$inject = ['requirementService', 'scoutService', '$stateParams'];

  function FCSScoutSidebarComponent(requirementService, scoutService, $stateParams) {
    var $ctrl = this;

    /* Lifecycle Hooks */
    $ctrl.$onInit = $onInit;

    /* Implementation */

    function $onInit() {
      requirementService.getAllRequirements().then(function () {
        scoutService.getScoutById($stateParams.scoutId).then(function (scout) {
          $ctrl.scout = scout;
        });
      });
    }

  }

}());