(function () {

  angular
    .module('firstClass')
    .component('fcsPositionList', {
      controller: FCSPositionListComponent,
      templateUrl: 'positions/fcs-position-list.component.html',
      bindings: {
        scout: '<',
        positions: '<'
      }
    });

  FCSPositionListComponent.$inject = ['$mdToast', '$mdDialog', '$filter', 'positionDialogService'];
  
  function FCSPositionListComponent($mdToast, $mdDialog, $filter, positionDialogService) {
    var $ctrl = this;

    /* Private Properties */
    $ctrl._warningDialog = undefined;

    /* Lifecycle Hooks */
    $ctrl.$onInit = $onInit;

    /* Public Functions */
    $ctrl.deletePosition = deletePosition;
    $ctrl.editPosition = editPosition;

    function $onInit() {
      $ctrl._warningDialog = $mdDialog.confirm().title('Warning').ok('Yes').cancel('Cancel');
    }

    function deletePosition (position) {
      var dialog = $ctrl._warningDialog.content('Delete position record: ' + position.title + ': ' +
      $filter('date')(position.start, 'shortDate') + '-' + $filter('date')(position.end, 'shortDate') + '?');

      $mdDialog.show(dialog).then(function () {
        $ctrl.scout.removePosition(position.id);
        $ctrl.scout.save()
          .then(function () {
            $mdToast.showSimple('Deleted position: ' + position.toString());
          }, function () {
            $ctrl.scout.addPosition(position);
            $mdToast.showSimple('A server error occurred: Failed to delete position');
          });
      });
    }

    function editPosition (event, position) {
      var positionToEdit = angular.copy(position);

      positionDialogService.showEditDialog({targetEvent: event, position: positionToEdit}).then(function (editedPosition) {
        $ctrl.scout.removePosition(position.id);
        $ctrl.scout.addPosition(editedPosition.title, editedPosition.start, editedPosition.end);
        $ctrl.scout.save().then(function (savedScout) {
          $mdToast.showSimple('Saved Position Changes: ' + editedPosition.toString());
          $ctrl.scout = savedScout;
        });
      });
    };

  }

}());