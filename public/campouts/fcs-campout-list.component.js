(function () {

  angular
    .module('firstClass')
    .component('fcsCampoutList', {
      controller: FCSCampoutListComponent,
      templateUrl: 'campouts/fcs-campout-list.component.html',
      bindings: {
        campouts: '<',
        scout: '<'
      }
    });

  FCSCampoutListComponent.$inject = ['$mdToast', '$mdDialog', 'campoutDialogService'];

  function FCSCampoutListComponent($mdToast, $mdDialog, campoutDialogService) {
    var $ctrl = this;

    /* Public Variables */
    $ctrl.scout = $ctrl.scout;

    /* Public Functions */
    $ctrl.deleteCampout = deleteCampout;
    $ctrl.editCampout = editCampout;
    $ctrl.addCampout = addCampout;


    /* Implementation */
    
    function addCampout (event) {
      campoutDialogService.showCreateCampoutDialog({targetEvent: event}).then(function (newCampoutData) {
        var newCampout = $ctrl.scout.addCampout(newCampoutData.description, newCampoutData.start, newCampoutData.end);
        $ctrl.scout.save().then(function () {
          $mdToast.showSimple('Created Campout: ' + newCampout.toString());
        });
      });
    };

    function editCampout (event, campout) {
      var campoutToEdit = angular.copy(campout);

      campoutDialogService.showEditCampoutDialog({targetEvent: event, campout: campoutToEdit}).then(function (editedCampout) {
        $ctrl.scout.removeCampout(campout.id);
        $ctrl.scout.addCampout(editedCampout.description, editedCampout.start, editedCampout.end);
        $ctrl.scout.save().then(function (savedScout) {
          $mdToast.showSimple('Saved Campout Changes: ' + editedCampout.toString());
          $ctrl.scout = savedScout;
        });
      });
    };

    function deleteCampout (campout) {
      var dialog = warningDialog.content('Delete campout record: ' + campout.description + ': ' +
      $filter('date')(campout.start, 'shortDate') + '-' + $filter('date')(campout.end, 'shortDate') + '?');

      $mdDialog.show(dialog).then(function () {
        $ctrl.scout.removeCampout(campout.id);
        $ctrl.scout.save()
          .then(function () {
            $mdToast.showSimple('Deleted campout: ' + campout.toString());
          }, function () {
            $ctrl.scout.addCampout(campout);
            $mdToast.showSimple('A server error occurred: Failed to delete campout');
          });
      });
    };

  }

}());