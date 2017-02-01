'use strict';

angular.module('firstClass').factory('selectDetailBottomSheetService', function ($mdBottomSheet) {

  var _getPresets = function () {
    return {
      template: '<fcs-select-detail-bottom-sheet></fcs-select-detail-bottom-sheet>',
      parent: angular.element(document.getElementById('content'))
    };
  };

  var _show = function (event) {
    var presets = _getPresets();
    presets.targetEvent = event;
    return $mdBottomSheet.show(presets);
  };

  return {
    show: _show
  }

});