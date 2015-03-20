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
      templateUrl: '/campouts/campout-item.template.html'
    }

  }

}());