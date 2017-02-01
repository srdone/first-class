(function () {
  'use strict';

  angular
    .module('firstClass')
    .component('fcsHoursOfServiceIcon', {
      controller: FCSHoursOfServiceIconComponent,
      templateUrl: 'scout/fcs-hours-of-service-icon.component.html',
      bindings: {
        hours: '<'
      }
    });
  
  FCSHoursOfServiceIconComponent.$inject = [];

  function FCSHoursOfServiceIconComponent() {}

})();