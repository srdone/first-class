angular.module('firstClass').directive('fcsRankProgress', function () {

  return {
    restrict: 'E',
    scope: {
      pctProgress: '='
    },
    templateUrl: 'js/directives/directive-templates/rank-progress.template.html'
  }

});