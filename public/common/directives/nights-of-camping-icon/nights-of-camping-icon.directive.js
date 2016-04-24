angular.module('firstClass').directive('fcsNightsOfCampingIcon', function () {

  return {
    restrict: 'E',
    scope: {
      nights: '='
    },
    templateUrl: 'common/directives/nights-of-camping-icon/nights-of-camping-icon.template.html'
  }

});