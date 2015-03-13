angular.module('firstClass').directive('fcsRankProgress', function () {

  return {
    restrict: 'E',
    scope: {
      pctProgress: '='
    },
    templateUrl: 'rank-requirements/rank-progress.template.html'
  }

});