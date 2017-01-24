angular.module('firstClass').directive('fcsRankProgress', function () {

  return {
    restrict: 'E',
    scope: {
      pctProgress: '='
    },
    templateUrl: 'ranks/rank-progress.template.html'
  }

});