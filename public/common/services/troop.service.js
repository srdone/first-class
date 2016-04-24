(function () {

  angular.module('firstClass')
    .factory('troopService', troopService);

  troopService.$inject = ['$resource'];

  function troopService ($resource) {

    var scout = $resource('/scouts/:id')

  }

})();