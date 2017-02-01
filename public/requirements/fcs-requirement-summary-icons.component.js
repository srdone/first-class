(function () {
  'use strict';

  angular
    .module('firstClass')
    .component('fcsRequirementSummaryIcons', {
      controller: FCSRequirementSummaryIconsComponent,
      templateUrl: 'requirements/fcs-requirement-summary-icons.component.html',
      bindings: {
        reqCategoryCount: '<'
      }
    });

  FCSRequirementSummaryIconsComponent.$inject = [];

  function FCSRequirementSummaryIconsComponent() {
    var $ctrl = this;

    /* Public Properties */
    $ctrl.hasRemainingRequirements = true;

    /* Lifecycle Hooks */
    $ctrl.$onInit = $onInit;
    $ctrl.$onChanges = $onChanges;

    function $onInit() {
      $ctrl.hasRemainingRequirements = !(_.isEmpty($ctrl.reqCategoryCount));
    }

    function $onChanges() {
      $ctrl.$onInit();
    }

  }

})();