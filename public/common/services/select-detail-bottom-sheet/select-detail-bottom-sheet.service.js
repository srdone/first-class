'use strict';

angular.module('firstClass').factory('selectDetailBottomSheetService', function ($mdBottomSheet) {

  var _getPresets = function () {
    return {
      templateUrl: 'common/services/select-detail-bottom-sheet/select-detail-bottom-sheet.template.html',
      controller: 'SelectDetailBottomSheetController',
      controllerAs: 'vm',
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