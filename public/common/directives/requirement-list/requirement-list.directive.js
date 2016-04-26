import angular from 'angular';
import tpl from './requirement-list.template.html!text';

  angular
    .module('firstClass')
    .directive('fcsRequirementList', fcsRequirementList);

  /* @ngInject */
  function fcsRequirementList() {

    return {
      scope: {
        scout: '=',
        requirements: '='
      },
      bindToController: true,
      controller: 'RequirementListController',
      controllerAs: 'vm',
      template: tpl
    }
    
  }
