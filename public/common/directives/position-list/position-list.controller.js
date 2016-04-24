(function () {

  angular
    .module('firstClass')
    .controller('PositionListController', PositionListController);

  PositionListController.$inject = ['$mdToast', '$mdDialog', '$filter', 'positionDialogService'];

  /* @ngInject */
  function PositionListController($mdToast, $mdDialog, $filter, positionDialogService) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'PositionListController';
    vm.deletePosition = deletePosition;
    vm.editPosition = editPosition;
    vm.scout = vm.scout;
    vm.positions = vm.positions;

    var warningDialog = $mdDialog.confirm().title('Warning').ok('Yes').cancel('Cancel');

    function deletePosition (position) {
      var dialog = warningDialog.content('Delete position record: ' + position.title + ': ' +
      $filter('date')(position.start, 'shortDate') + '-' + $filter('date')(position.end, 'shortDate') + '?');

      $mdDialog.show(dialog).then(function () {
        vm.scout.removePosition(position.id);
        vm.scout.save()
          .then(function () {
            $mdToast.showSimple('Deleted position: ' + position.toString());
          }, function () {
            vm.scout.addPosition(position);
            $mdToast.showSimple('A server error occurred: Failed to delete position');
          });
      });
    }

    function editPosition (event, position) {
      var positionToEdit = angular.copy(position);

      positionDialogService.showEditDialog({targetEvent: event, position: positionToEdit}).then(function (editedPosition) {
        vm.scout.removePosition(position.id);
        vm.scout.addPosition(editedPosition.title, editedPosition.start, editedPosition.end);
        vm.scout.save().then(function (savedScout) {
          $mdToast.showSimple('Saved Position Changes: ' + editedPosition.toString());
          vm.scout = savedScout;
        });
      });
    };

    activate();

    ////////////////

    function activate() {
    }


  }

}());