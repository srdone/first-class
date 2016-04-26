import angular from 'angular';
import tpl from './position-list.template.html!text';

  angular
    .module('firstClass')
    .directive('fcsPositionList', fcsPositionList);

  /* @ngInject */
  function fcsPositionList() {

    return {
      scope: {
        scout: '=',
        positions: '='
      },
      bindToController: true,
      controller: 'PositionListController',
      controllerAs: 'vm',
      template: tpl
    }

  }
