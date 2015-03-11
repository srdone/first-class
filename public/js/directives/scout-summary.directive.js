angular.module('firstClass').directive('fcsScoutSummary', function () {

  return {
    scope: {
      scout: '='
    },
    templateUrl: 'js/directives/directive-templates/scout-summary.template.html'
  }

});