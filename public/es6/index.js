import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-aria';
import 'angular-animate';
import 'angular-resource';

import router from 'es6/router';
import authService from 'es6/services/authService';
import persistenceService from 'es6/services/persistenceService';

import fcsLogin from 'es6/login/fcs-login-directive';

angular.module('helloWorld', ['ui.router', 'ngMaterial', 'ngAria', 'ngAnimate', 'ngResource'])
  .config(router)
  .factory('authService', authService)
  .factory('persistenceService', persistenceService)
  .directive('fcsLogin', fcsLogin);

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['helloWorld']);
});