angular.module('firstClass')
  .controller('AddScoutSheetController', ['$scope', '$mdBottomSheet', 'scoutService', '$mdToast',
    function ($scope, $mdBottomSheet, scoutService, $mdToast) {

      $scope.addScout = function (scout) {
        scoutService.createNewScout(scout).then(function (scout) {
          $mdToast.showSimple('Scout ' + scout.firstName + ' ' + scout.lastName + ' created');
          $scope.newScout = {};
          $mdBottomSheet.hide();
        });
      };

      $scope.cancel = function () {
        $scope.newScout = {};
        $mdBottomSheet.hide();
      };

    }]);