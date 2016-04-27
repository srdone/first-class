import angular from 'angular';
import tpl from './requirement-list.template.html!text';
import RequirementListController from './requirement-list.controller';

  angular
    .module('firstClass')
    .directive('fcsRequirementList', fcsRequirementList);

function fcsRequirementList() {

  return {
    scope: {
      scout: '=',
      requirements: '='
    },
    bindToController: true,
    controller: RequirementListController,
    controllerAs: 'vm',
    template: tpl
  }
  
}
