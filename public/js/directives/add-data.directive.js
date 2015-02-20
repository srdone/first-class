angular.module('firstClass').directive('fcsAddData', [function () {

  return {
    restrict: 'E',
    scope: {
      action: '&',
      fields: '=',
      addButton: '@'
    },
    templateUrl: 'js/directives/directive-templates/add-data.template.html',
    link: function ($scope, $element, $attributes) {
      $scope.addState = false;

      $scope.showAdd = function () {
        $scope.addState = true;
      };

      $scope.cancelAdd = function () {
        $scope.addState = false;
        _reset();
      };

      var _reset = function () {
        for (var key in $attributes.fields) {
          if ($attributes.fields.hasOwnProperty(key)) {
            $attributes.fields[key].property = null;
          }
        }
      };

    }
  }

}]);