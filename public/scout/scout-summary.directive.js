angular.module('firstClass').directive('fcsScoutSummary', function () {

  return {
    scope: {
      scout: '='
    },
    templateUrl: 'scout/scout-summary.template.html'
  }

});