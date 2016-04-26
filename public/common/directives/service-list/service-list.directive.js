import angular from 'angular';
import tpl from './service-list.template.html!text';

angular.module('firstClass').directive('fcsServiceList', function () {

  return {
    scope: {
      scout: '=',
      serviceProjects: '='
    },
    bindToController: true,
    controller: 'ServiceListController',
    controllerAs: 'vm',
    template: tpl
  }

});