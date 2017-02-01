(function () {
  'use strict';

  angular
    .module('firstClass')
    .component('fcsRankProgress', {
      controller: FCSRankProgressComponent,
      templateUrl: 'ranks/fcs-rank-progress.component.html',
      bindings: {
        pctProgress: '<'
      }
    });

  FCSRankProgressComponent.$inject = [];

  function FCSRankProgressComponent() {};

})();