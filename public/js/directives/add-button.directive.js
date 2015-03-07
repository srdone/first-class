angular.module('firstClass').directive('fcsAddButton', function () {

  return {
    restrict: 'E',
    scope: {
      tipText: '='
    },
    templateUrl: 'js/directives/directive-templates/add-button.template.html'
  }

});