angular.module('firstClass').directive('fcsRankProgress', function () {

  return {
    restrict: 'E',
    scope: {
      pctProgress: '='
    },
    templateUrl: 'scout/rank-requirements/rank-progress.template.html'
  }

});