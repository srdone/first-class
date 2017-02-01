(function () {
  'use strict';

  angular
    .module('firstClass')
    .component('fcsNightsOfCampingIcon', {
      controller: FCSNightsOfCampingIconComponent,
      templateUrl: 'scout/fcs-nights-of-camping-icon.component.html',
      bindings: {
        nights: '<'
      }
    });
  
  FCSNightsOfCampingIconComponent.$inject = [];

  function FCSNightsOfCampingIconComponent() {}

})();