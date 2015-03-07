angular.module('firstClass').directive('fcsNightsOfCampingIcon', function () {

  return {
    restrict: 'E',
    scope: {
      nights: '='
    },
    templateUrl: 'js/directives/directive-templates/nights-of-camping-icon.template.html'
  }

});