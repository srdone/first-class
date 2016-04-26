import angular from 'angular';

angular.module('firstClass').controller('LayoutController', ['$scope', '$mdSidenav', '$state', '$log', 'authService',
  '$rootScope', '$q', '$mdToast', 'requirements',
  function($scope, $mdSidenav, $state, $log, authService, $rootScope, $q, $mdToast, requirements) {
    $scope.introParagraph = 'Simple, intuitive tracking for your Boy Scout Troop';

    $scope.toggleMenu = function () {
      $mdSidenav('left').toggle();
    };

    $scope.goToTroopView = function () {
      $mdSidenav('left').toggle();
      $state.go('app.troop');
    };

    $scope.logout = function () {
      var promises = [];
      var toastLoggedOut = function () {
        $mdToast.showSimple('Logged Out');
      };

      promises.push(authService.logout());
      promises.push($state.go('app.main'));
      promises.push($mdSidenav('left').close());

      $q.all(promises).then(toastLoggedOut);
    };

    $scope.close = function () {
      $mdSidenav('left').toggle();
    };

    $rootScope.$watch('loggedIn', function (newVal) {
      $scope.loggedIn = (newVal === true);
    });

  }]);