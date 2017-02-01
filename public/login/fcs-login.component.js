(function () {
  'use strict';

  angular
    .module('firstClass')
    .component('fcsLogin', {
      controller: FCSLoginComponent,
      templateUrl: 'login/fcs-login.component.html',
      bindings: {}
    });

  FCSLoginComponent.$inject = ['persistenceService', 'authService', '$state', '$log', '$mdToast'];

  function FCSLoginComponent(persistenceService, authService, $state, $log, $mdToast) {
    var $ctrl = this;

    /* Public Properties */
    $ctrl.doSignUp = false;
    $ctrl.newUser = {};

    /* Public Functions */
    $ctrl.login = login;
    $ctrl.signUp = signUp;
    $ctrl.chooseToSignUp = chooseToSignUp;
    $ctrl.cancelSignUp = cancelSignUp;

    /* Private Functions */
    $ctrl._reset = _reset;

    /* Implementation */

    function login() {
      authService.login($ctrl.user.email, $ctrl.user.password)
        .then(function success () {
          $mdToast.showSimple('Welcome to First Class Scouting!');
          $ctrl._reset();
          $log.debug('logged in, going to troop state');
          $state.go('troop');
        }, function failure (response) {
          $ctrl.message = 'Login failed. Do you want to sign up?';
          $ctrl._reset();
        });
    }

    function signUp() {
      if ($ctrl.user.password = $ctrl.newUser.verifyPassword) {
        authService.signUp($ctrl.user.email, $ctrl.user.password).then(function () {
          $ctrl.login();
          $ctrl.newUser = {};
        });
      }
    }

    function chooseToSignUp() {
      $ctrl.doSignUp = true;
    };

    function cancelSignUp() {
      $ctrl._reset();
    };

    function _reset() {
      $ctrl.user = {};
      $ctrl.newUser = {};
      $ctrl.doSignUp = false;
    }
		
  }

})();