import angular from 'angular';
import tpl from './requirement-summary-icons.template.html!text';
import _ from 'lodash';

angular.module('firstClass').directive('fcsRequirementSummaryIcons', function () {

  return {
    scope: {
      reqCategoryCount: '='
    },
    bindToController: true,
    template: tpl,
    controller: function () {
      var vm = this;
      
      vm.hasRemainingRequirements = !(_.isEmpty(vm.reqCategoryCount));
    },
    controllerAs: 'vm'
  }

});