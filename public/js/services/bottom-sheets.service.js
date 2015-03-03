angular.module('firstClass').factory('bottomSheets', function () {

  var _addScoutSheet = {
    templateUrl: 'js/bottom-sheets/add-scout.bottom-sheet.html',
    controller: 'AddScoutSheetController'
  }

  return {
    addScoutSheet: _addScoutSheet
  }

});