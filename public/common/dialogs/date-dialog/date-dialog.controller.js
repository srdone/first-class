'use strict';

angular.module('firstClass').controller('DateDialogController', ['$mdDialog', function ($mdDialog) {

  this.returnDate = function () {
    return $mdDialog.hide(this.date);
  };

  this.cancel = function () {
    return $mdDialog.cancel();
  };

}]);