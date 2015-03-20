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
      templateUrl: 'positions/position-list.template.html'
    }


  }

}());