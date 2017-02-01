(function () {

  angular
    .module('firstClass')
    .component('fcsRequirementList', {
      controller: FCSRequirementListComponent,
      templateUrl: 'requirements/fcs-requirement-list.component.html',
      bindings: {
        scout: '<',
        requirements: '<'
      }
    });

  FCSRequirementListComponent.$inject = ['$mdToast', '$mdDialog', 'dateDialogService'];

  function FCSRequirementListComponent($mdToast, $mdDialog, dateDialogService) {
    var $ctrl = this;

    /* Private Properties */
    $ctrl._warningDialog = undefined;

    /* Lifecycle Hooks */
    $ctrl.$onInit = $onInit;

    /* Public Functions */
    $ctrl.deleteRequirement = deleteRequirement;
    $ctrl.editRequirement = editRequirement;

    function $onInit() {
      $ctrl._warningDialog = $mdDialog.confirm().title('Warning').ok('Yes').cancel('Cancel');
    }

    function deleteRequirement(completedRequirement) {
      var dialog = $ctrl._warningDialog.content('Delete requirement ' + completedRequirement.requirement.name + ' and all parents?');

      $mdDialog.show(dialog).then(function () {
        $ctrl.scout.removeRequirementById(completedRequirement.requirement.id);
        $ctrl.scout.save()
          .then(function () {
            $mdToast.showSimple('Deleted requirement and its dependents: ' + completedRequirement.requirement.name);
          }, function () {
            $ctrl.scout.addRequirement(completedRequirement.requirement);
            $mdToast.showSimple('A server error occurred: Failed to delete requirement');
          });
      });
    }

    function editRequirement(completedRequirement) {
      dateDialogService.show({date: completedRequirement.dateCompleted}).then(function (dateReturned) {
        completedRequirement.dateCompleted = dateReturned;
        $ctrl.scout.save()
          .then(function () {
            $mdToast.showSimple('Updated date');
          }, function () {
            $mdToast.showSimple('A server error occurred: Failed to save new date');
          });
      })
    }

  }

}());