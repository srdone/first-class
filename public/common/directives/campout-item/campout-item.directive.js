(function () {

  angular
    .module('firstClass')
    .directive('fcsCampoutItem', CampoutItemDirective);

  function CampoutItemDirective () {

    return {
      scope: {
        campout: '='
      },
      bindToController: true,
      controller: 'CampoutItemController',
      controllerAs: 'vm',
      templateUrl: 'common/directives/campout-item/campout-item.template.html'
    }

  }

}());