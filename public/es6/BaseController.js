export default BaseController;

BaseController.$inject = ['$mdSidenav', '$state', '$log', 'authService', '$rootScope', '$q', '$mdToast', 'requirements'];

function BaseController($mdSidenav, $state, $log, authService, $rootScope, $q, $mdToast, requirements) {
  
  var vm = this;

  vm.introParagraph = 'Simple, intuitive tracking for your Boy Scout Troop';

  vm.toggleMenu = function () {
    $mdSidenav('left').toggle();
  };

  vm.goToTroopView = function () {
    $mdSidenav('left').toggle();
    $state.go('app.troop');
  };

  vm.logout = function () {
    var promises = [];
    var toastLoggedOut = function () {
      $mdToast.showSimple('Logged Out');
    };
    promises.push(authService.logout());
    promises.push($state.go('app.main'));
    promises.push($mdSidenav('left').close());

    $q.all(promises).then(toastLoggedOut);
  };

  vm.close = function () {
    $mdSidenav('left').toggle();
  };

  $rootScope.$watch('loggedIn', function (newVal) {
    vm.loggedIn = (newVal === true);
  });
  
}
