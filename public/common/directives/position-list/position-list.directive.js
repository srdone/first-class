(function () {

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
      templateUrl: 'common/directives/position-list/position-list.template.html'
    }


  }

}());