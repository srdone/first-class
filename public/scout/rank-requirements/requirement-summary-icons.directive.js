angular.module('firstClass').directive('fcsRequirementSummaryIcons', function () {

  return {
    scope: {
      reqCategoryCount: '='
    },
    templateUrl: 'scout/rank-requirements/requirement-summary-icons.template.html',
    link: function ($scope, $element, $attributes) {
      if (_.isEmpty($scope.reqCategoryCount)) {
        $element.hide();
      }
    }
  }

});