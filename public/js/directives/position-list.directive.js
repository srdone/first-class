angular.module('firstClass').directive('fcsPositionList', function () {

  return {
    restrict: 'E',
    scope: {
      positions: '='
    },
    templateUrl: 'js/directives/directive-templates/position-list.template.html'
  }

});