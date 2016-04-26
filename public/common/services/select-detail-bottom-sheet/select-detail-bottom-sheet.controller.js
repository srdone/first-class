import angular from 'angular';

angular.module('firstClass').controller('SelectDetailBottomSheetController',
  function ($mdBottomSheet) {

    var vm = this;

    vm.detailList = [
      {name: 'requirement', icon: 'details:requirement', displayName: 'req\'mnt'},
      {name: 'service',     icon: 'details:service', displayName: 'service'},
      {name: 'position',    icon: 'details:position', displayName: 'position'},
      {name: 'campout',     icon: 'details:campout', displayName: 'campout'}
    ];

    vm.selectListItem = function (index) {
      var selectedItem = vm.detailList[index];

      $mdBottomSheet.hide(selectedItem);
    }

  });