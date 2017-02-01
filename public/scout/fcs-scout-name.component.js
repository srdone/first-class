(function () {
  'use strict';

  angular
    .module('firstClass')
    .component('fcsScoutName', {
      controller: FCSScoutNameComponent,
      template: '<div class="truncate">{{$ctrl.scout.firstName}} {{$ctrl.scout.lastName}}</div>',
      bindings: {
        scout: '<'
      }
    });

  FCSScoutNameComponent.$inject = [];

  function FCSScoutNameComponent() {}

})();