import angular from 'angular';
import tpl from './select-detail-bottom-sheet.template.html!text';

angular.module('firstClass').factory('selectDetailBottomSheetService', function ($mdBottomSheet) {

  var _getPresets = function () {
    return {
      template: tpl,
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