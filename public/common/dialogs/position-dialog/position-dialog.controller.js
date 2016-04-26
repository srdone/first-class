import angular from 'angular';

angular.module('firstClass').controller('PositionDialogController', ['$mdDialog', function ($mdDialog) {

  this.returnPosition = function () {
    $mdDialog.hide(this.position);
  };

  this.cancel = function () {
    $mdDialog.cancel();
  };

}]);