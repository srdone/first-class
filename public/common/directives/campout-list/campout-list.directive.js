import angular from 'angular';
import tpl from './campout-list.template.html!text';

  angular
    .module('firstClass')
    .directive('fcsCampoutList', fcsCampoutList);

  /* @ngInject */
  function fcsCampoutList() {

    return {
      scope: {
        campouts: '=',
        scout: '='
      },
      bindToController: true,
      controller: 'CampoutListController',
      controllerAs: 'vm',
      template: tpl
    }

  }
