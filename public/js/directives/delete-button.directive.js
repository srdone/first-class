angular.module('firstClass').directive('fcsDeleteButton', function () {

  return {
    restrict: 'E',
    scope: {
      fcsAriaLabel: '@'
    },
    templateUrl: 'js/directives/directive-templates/delete-button.template.html'
  }

});