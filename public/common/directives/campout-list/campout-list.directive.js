(function () {

  angular
    .module('firstClass')
    .directive('fcsCampoutList', fcsCampoutList);

  /* @ngInject */
  function fcsCampoutList() {

    return {
      scope: {
        campouts: '=',
        scout: '='
      },
      bindToController: true,
      controller: 'CampoutListController',
      controllerAs: 'vm',
      templateUrl: 'common/directives/campout-list/campout-list.template.html'
    }

  }

}());