(function () {
  'use strict';

  angular
    .module('firstClass')
    .component('fcsLegal', {
      controller: FCSLegalComponent,
      templateUrl: 'legal/fcs-legal.component.html',
      bindings: {}
    });

  FCSLegalComponent.$inject = [];

  function FCSLegalComponent() {}

})();