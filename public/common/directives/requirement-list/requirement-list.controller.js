export { RequirementListController as default };

RequirementListController.$inject = ['$mdToast', '$mdDialog', 'dateDialogService'];
function RequirementListController($mdToast, $mdDialog, dateDialogService) {
  var vm = this;

  vm.scout = vm.scout;
  vm.requirements = vm.requirements;
  vm.deleteRequirement = deleteRequirement;
  vm.editRequirement = editRequirement;

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

  function editRequirement (completedRequirement) {
    dateDialogService.show({date: completedRequirement.dateCompleted}).then(function (dateReturned) {
      completedRequirement.dateCompleted = dateReturned;
      vm.scout.save()
        .then(function () {
          $mdToast.showSimple('Updated date');
        }, function () {
          $mdToast.showSimple('A server error occurred: Failed to save new date');
        });
    })
  }

}