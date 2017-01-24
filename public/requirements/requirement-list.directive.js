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
      templateUrl: 'requirements/requirement-list.template.html'
    }


  }

}());