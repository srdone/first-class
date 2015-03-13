angular.module('firstClass').directive('fcsNightsOfCampingIcon', function () {

  return {
    restrict: 'E',
    scope: {
      nights: '='
    },
    templateUrl: 'campouts/nights-of-camping-icon.template.html'
  }

});