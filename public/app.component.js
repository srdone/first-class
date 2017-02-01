(function () {

  angular
    .module('firstClass')
    .component('app', {
      controller: AppComponent,
      templateUrl: 'app.component.html'
    });

  AppComponent.$inject = ['$mdSidenav', '$state', '$log', 'authService', '$rootScope', '$q', '$mdToast'];

  function AppComponent($mdSidenav, $state, $log, authService, $rootScope, $q, $mdToast) {
    var $ctrl = this;

    /* Public Properties */
    $ctrl.introParagraph = 'Simple, intuitive tracking for your Boy Scout Troop';

    /* Public Functions */
    $ctrl.toggleMenu = toggleMenu;
    $ctrl.goToTroopView = goToTroopView;
    $ctrl.logout = logout;
    $ctrl.isLoggedIn = authService.isLoggedIn;
    $ctrl.getUsername = authService.getUsername;

    /* Implementation */

    function toggleMenu() {
      $mdSidenav('left').toggle();
    };

    function goToTroopView() {
      $mdSidenav('left').toggle();
      $state.go('troop');
    };

    function logout() {
      var promises = [];
      var toastLoggedOut = function () {
        $mdToast.showSimple('Logged Out');
      };

      promises.push(authService.logout());
      promises.push($state.go('main'));
      promises.push($mdSidenav('left').close());

      $q.all(promises).then(toastLoggedOut);
    };

    function close() {
      $mdSidenav('left').toggle();
    };

  }

})();