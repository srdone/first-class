import angular from 'angular';
import 'angular-ui-router';

import router from 'es6/router';

angular.module('helloWorld', ['ui.router'])
  .config(router);

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['helloWorld']);
});