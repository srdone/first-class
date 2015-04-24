(function () {

  angular.module('firstClass')
    .controller('ExperimentsController', ExperimentsController);

  ExperimentsController.$inject = ['$log', '$resource'];

  function ExperimentsController ($log, $resource) {

    var Scout = $resource('/scouts/:id')

    console.log(Scout);

    debugger;

  }

})();