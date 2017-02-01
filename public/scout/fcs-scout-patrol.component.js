(function () {
  'use strict';

  angular
    .module('firstClass')
    .component('fcsScoutPatrol', {
      controller: FCSScoutPatrol,
      templateUrl: 'scout/fcs-scout-patrol.component.html',
      bindings: {
        patrol: '<'
      }
    });

  FCSScoutPatrol.$inject = [];

  function FCSScoutPatrol() {};

})();