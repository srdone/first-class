(function () {

  angular
    .module('firstClass')
    .controller('CampoutListController', CampoutListController);

  CampoutListController.$inject = ['$mdToast', '$mdDialog', 'campoutDialogService'];

  /* @ngInject */
  function CampoutListController($mdToast, $mdDialog, campoutDialogService) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'CampoutListController';
    vm.deleteCampout = deleteCampout;
    vm.editCampout = editCampout;
    vm.addCampout = addCampout;
    vm.scout = vm.scout;

    function addCampout (event) {
      campoutDialogService.showCreateCampoutDialog({targetEvent: event}).then(function (newCampoutData) {
        var newCampout = $scope.scout.addCampout(newCampoutData.description, newCampoutData.start, newCampoutData.end);
        vm.scout.save().then(function () {
          $mdToast.showSimple('Created Campout: ' + newCampout.toString());
        });
      });
    };

    function editCampout (event, campout) {
      var campoutToEdit = angular.copy(campout);

      campoutDialogService.showEditCampoutDialog({targetEvent: event, campout: campoutToEdit}).then(function (editedCampout) {
        vm.scout.removeCampout(campout.id);
        vm.scout.addCampout(editedCampout.description, editedCampout.start, editedCampout.end);
        vm.scout.save().then(function (savedScout) {
          $mdToast.showSimple('Saved Campout Changes: ' + editedCampout.toString());
          vm.scout = savedScout;
        });
      });
    };

    function deleteCampout (campout) {
      var dialog = warningDialog.content('Delete campout record: ' + campout.description + ': ' +
      $filter('date')(campout.start, 'shortDate') + '-' + $filter('date')(campout.end, 'shortDate') + '?');

      $mdDialog.show(dialog).then(function () {
        vm.scout.removeCampout(campout.id);
        vm.scout.save()
          .then(function () {
            $mdToast.showSimple('Deleted campout: ' + campout.toString());
          }, function () {
            vm.scout.addCampout(campout);
            $mdToast.showSimple('A server error occurred: Failed to delete campout');
          });
      });
    };

    activate();

    ////////////////

    function activate() {
    }


  }

}());