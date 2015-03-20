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
      templateUrl: 'campouts/campout-list.template.html'
    }

  }

}());