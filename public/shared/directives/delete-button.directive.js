angular.module('firstClass').directive('fcsDeleteButton', function () {

  return {
    restrict: 'E',
    scope: {
      fcsAriaLabel: '@'
    },
    templateUrl: 'shared/directives/delete-button.template.html'
  }

});