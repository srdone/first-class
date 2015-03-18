'use strict';

angular.module('firstClass').factory('selectDetailBottomSheetService', function ($mdBottomSheet) {

  var _bottomSheetPresets = {
    templateUrl: 'select-detail-bottom-sheet/select-detail-bottom-sheet.template.html',
    controller: 'SelectDetailBottomSheetController',
    controllerAs: 'vm',
    parent: angular.element(document.getElementById('content'))
  };

  var _show = function (event) {
    _bottomSheetPresets.targetEvent = event;
    return $mdBottomSheet.show(_bottomSheetPresets);
  };

  return {
    show: _show
  }

});