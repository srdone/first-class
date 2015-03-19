angular.module('firstClass').directive('fcsRequirementSummaryIcons', function () {

  return {
    scope: {
      reqCategoryCount: '='
    },
    templateUrl: 'scout/requirement-summary-icons.template.html'
  }

});