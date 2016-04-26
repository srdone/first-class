import angular from 'angular';

angular.module('firstClass').controller('ServiceListController', ['$mdToast', '$mdDialog', 'serviceProjectDialogService',
  function ($mdToast, $mdDialog, serviceProjectDialogService) {

    var vm = this;

    var warningDialog = $mdDialog.confirm().title('Warning').ok('Yes').cancel('Cancel');

    vm.editServiceProject = function (event, serviceProject) {
      var serviceProjectToEdit = angular.copy(serviceProject);

      serviceProjectDialogService.showEditDialog({targetEvent: event, serviceProject: serviceProjectToEdit}).then(function (editedServiceProject) {
        vm.scout.removeService(serviceProject.id);
        vm.scout.addService(editedServiceProject.description, editedServiceProject.hours);
        vm.scout.save().then(function (savedScout) {
          $mdToast.showSimple('Saved Changes: ' + editedServiceProject.toString());
          vm.scout = savedScout;
        });
      });
    };

    vm.deleteService = function (service) {
      var dialog = warningDialog.content('Delete service record: ' + service.description + ': ' + service.hours + ' hours?');

      $mdDialog.show(dialog).then(function () {
        vm.scout.removeService(service.id);
        vm.scout.save()
          .then(function () {
            $mdToast.showSimple('Deleted service project: ' + service.toString());
          }, function () {
            vm.scout.addService(service);
            $mdToast.showSimple('A server error occurred: Failed to delete service project');
          });
      });
    };

  }]);