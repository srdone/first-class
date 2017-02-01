(function () {
  'use strict';

  angular
    .module('firstClass')
    .component('fcsOaIcon', {
      controller: FCSOaIconComponent,
      templateUrl: 'common/components/oa-icon/fcs-oa-icon.component.html'
    });

  FCSOaIconComponent.$inject = [];

  function FCSOaIconComponent() {}

})();