angular.module('firstClass').directive('fcsScoutSummary', function () {

  return {
    scope: {
      scout: '='
    },
    templateUrl: 'common/directives/scout-summary/scout-summary.template.html'
  }

});