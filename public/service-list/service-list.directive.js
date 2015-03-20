'use strict';

angular.module('firstClass').directive('fcsServiceList', function () {

  return {
    scope: {
      scout: '=',
      serviceProjects: '='
    },
    bindToController: true,
    controller: 'ServiceListController',
    controllerAs: 'vm',
    templateUrl: 'service-list/service-list.template.html'
  }

});