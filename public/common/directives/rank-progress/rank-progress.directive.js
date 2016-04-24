angular.module('firstClass').directive('fcsRankProgress', function () {

  return {
    restrict: 'E',
    scope: {
      pctProgress: '='
    },
    templateUrl: 'common/directives/rank-progress/rank-progress.template.html'
  }

});