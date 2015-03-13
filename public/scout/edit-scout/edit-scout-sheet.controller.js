angular.module('firstClass').controller('EditScoutSheetController',
  ['$scope', '$mdBottomSheet', 'editingScout', '$mdDialog', '$state', '$mdToast',
    function ($scope, $mdBottomSheet, editingScout, $mdDialog, $state, $mdToast) {

      $scope.editingScout = editingScout;

      var warningDialog = $mdDialog.confirm().title('Warning').ok('Yes').cancel('Cancel');

      $scope.addScout = function (scout) {
        $mdBottomSheet.hide($scope.editingScout);
      };

      $scope.cancel = function () {
        $scope.editingScout = {};
        $mdBottomSheet.cancel();
      };

      $scope.deleteScout = function () {
        var dialog = warningDialog.content('Are you sure you want to delete ' + $scope.editingScout.firstName +
        ' ' + $scope.editingScout.lastName + ' and all his data?');

        $mdDialog.show(dialog).then(function () {
          $scope.editingScout.delete().then(function () {
            $mdToast.showSimple('Deleted Scout' + ' ' + editingScout.firstName + ' ' + editingScout.lastName);
            $mdBottomSheet.cancel().then(function () {
              $state.go('troop');
            });
          })
        });
      };

    }]);