'use strict';

angular.module('firstClass').controller('CampoutDialogController', ['$mdDialog', function ($mdDialog) {

  this.returnCampout = function () {
    return $mdDialog.hide(this.campout);
  };

  this.cancel = function () {
    return $mdDialog.cancel();
  };

}]);