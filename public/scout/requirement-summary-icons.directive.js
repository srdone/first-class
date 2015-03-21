angular.module('firstClass').directive('fcsRequirementSummaryIcons', function () {

  return {
    scope: {
      reqCategoryCount: '='
    },
    bindToController: true,
    templateUrl: 'scout/requirement-summary-icons.template.html',
    controller: function () {
      var vm = this;

      vm.hasRemainingRequirements = !(_.isEmpty(vm.reqCategoryCount));
    },
    controllerAs: 'vm'
  }

});