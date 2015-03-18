'use strict';

angular.module('firstClass').directive('fcsServiceDetail', function () {

  return {
    scope: {
      scout: '='
    },
    bindToController: true,
    controller: 'ServiceDetailController',
    controllerAs: 'vm',
    templateUrl: 'service-detail/service-detail.template.html'
  }

});