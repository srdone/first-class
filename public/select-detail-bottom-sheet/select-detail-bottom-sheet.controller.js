// largely from the angular material docs

'use strict';

angular.module('firstClass').controller('SelectDetailBottomSheetController',
  function ($mdBottomSheet) {

    var vm = this;

    vm.detailList = [
      {name: 'requirement', icon: 'details:requirement'},
      {name: 'service',     icon: 'details:service'},
      {name: 'position',    icon: 'details:position'},
      {name: 'campout',     icon: 'details:campout'}
    ];

    vm.selectListItem = function (index) {
      var selectedItem = vm.detailList[index];

      $mdBottomSheet.hide(selectedItem);
    }

  });