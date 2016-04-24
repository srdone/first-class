(function () {

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
      templateUrl: 'common/directives/requirement-list/requirement-list.template.html'
    }


  }

}());