angular.module('firstClass').directive('fcsNightsOfCampingIcon', function () {

  return {
    restrict: 'E',
    scope: {
      nights: '='
    },
    templateUrl: 'scout/campouts/nights-of-camping-icon.template.html'
  }

});