(function () {
'use strict';  

  angular
    .module('firstClass')
    .component('fcsServiceList', {
      controller: FCSServiceListComponent,
      templateUrl: 'service-list/fcs-service-list.component.html',
      bindings: {
        scout: '<',
        serviceProjects: '<'
      }
    });
  
  FCSServiceListComponent.$inject = ['$mdToast', '$mdDialog', 'serviceProjectDialogService'];

  function FCSServiceListComponent($mdToast, $mdDialog, serviceProjectDialogService) {
    var $ctrl = this;

    var warningDialog = $mdDialog.confirm().title('Warning').ok('Yes').cancel('Cancel');

    $ctrl.editServiceProject = function (event, serviceProject) {
      var serviceProjectToEdit = angular.copy(serviceProject);

      serviceProjectDialogService.showEditDialog({targetEvent: event, serviceProject: serviceProjectToEdit}).then(function (editedServiceProject) {
        $ctrl.scout.removeService(serviceProject.id);
        $ctrl.scout.addService(editedServiceProject.description, editedServiceProject.hours);
        $ctrl.scout.save().then(function (savedScout) {
          $mdToast.showSimple('Saved Changes: ' + editedServiceProject.toString());
          $ctrl.scout = savedScout;
        });
      });
    };

    $ctrl.deleteService = function (service) {
      var dialog = warningDialog.content('Delete service record: ' + service.description + ': ' + service.hours + ' hours?');

      $mdDialog.show(dialog).then(function () {
        $ctrl.scout.removeService(service.id);
        $ctrl.scout.save()
          .then(function () {
            $mdToast.showSimple('Deleted service project: ' + service.toString());
          }, function () {
            $ctrl.scout.addService(service);
            $mdToast.showSimple('A server error occurred: Failed to delete service project');
          });
      });
    };
  }

})();