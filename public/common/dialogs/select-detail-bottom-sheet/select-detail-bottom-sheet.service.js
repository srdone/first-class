import tpl from './select-detail-bottom-sheet.template.html!text';
import SelectDetailBottomSheetController from './select-detail-bottom-sheet.controller';

export { selectDetailBottomSheetService as default };

selectDetailBottomSheetService.$inject = ['$mdBottomSheet'];
function selectDetailBottomSheetService($mdBottomSheet) {

  return {
    show: _show
  }

  /*===============Functions==============*/

  function _getPresets() {
    return {
      template: tpl,
      controller: SelectDetailBottomSheetController,
      controllerAs: 'vm',
      parent: angular.element(document.getElementById('content'))
    };
  }

  function _show(event) {
    var presets = _getPresets();
    presets.targetEvent = event;
    return $mdBottomSheet.show(presets);
  }

}