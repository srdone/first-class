import angular from 'angular';

angular.module('firstClass').controller('ServiceProjectDialogController', ['$mdDialog', function ($mdDialog) {

  this.returnServiceProject = function () {
    return $mdDialog.hide(this.serviceProject);
  };

  this.cancel = function () {
    return $mdDialog.cancel();
  };

}]);