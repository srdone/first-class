(function () {

  angular
    .module('firstClass')
    .controller('RequirementListController', RequirementListController);

  RequirementListController.$inject = ['$mdToast', '$mdDialog'];

  /* @ngInject */
  function RequirementListController($mdToast, $mdDialog) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'RequirementListController';
    vm.scout = vm.scout;
    vm.requirements = vm.requirements;
    vm.deleteRequirement = deleteRequirement;

    var warningDialog = $mdDialog.confirm().title('Warning').ok('Yes').cancel('Cancel');

    function deleteRequirement (completedRequirement) {
      var dialog = warningDialog.content('Delete requirement ' + completedRequirement.requirement.name + ' and all parents?');

      $mdDialog.show(dialog).then(function () {
        vm.scout.removeRequirementById(completedRequirement.requirement.id);
        vm.scout.save()
          .then(function () {
            $mdToast.showSimple('Deleted requirement and its dependents: ' + completedRequirement.requirement.name);
          }, function () {
            vm.scout.addRequirement(completedRequirement.requirement);
            $mdToast.showSimple('A server error occurred: Failed to delete requirement');
          });
      });
    }

    activate();

    ////////////////

    function activate() {
    }


  }

}());