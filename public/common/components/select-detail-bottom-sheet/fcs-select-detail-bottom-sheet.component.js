(function () {
  'use strict';

  angular
    .module('firstClass')
    .component('fcsSelectDetailBottomSheet', {
      controller: FCSSelectDetailBottomSheetComponent,
      templateUrl: 'common/components/select-detail-bottom-sheet/fcs-select-detail-bottom-sheet.component.html',
      bindings: {}
    });

  FCSSelectDetailBottomSheetComponent.$inject = ['$mdBottomSheet'];

  function FCSSelectDetailBottomSheetComponent($mdBottomSheet) {
    var $ctrl = this;

    /* Public Properties */
    $ctrl.detailList = [
      {name: 'requirement', icon: 'details:requirement', displayName: 'req\'mnt'},
      {name: 'service',     icon: 'details:service', displayName: 'service'},
      {name: 'position',    icon: 'details:position', displayName: 'position'},
      {name: 'campout',     icon: 'details:campout', displayName: 'campout'}
    ];

    /* Public Functions */
    $ctrl.selectListItem = selectListItem;

    /* Implementation */

    function selectListItem(index) {
      var selectedItem = $ctrl.detailList[index];

      $mdBottomSheet.hide(selectedItem);
    }
  }

})();