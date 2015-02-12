var app = angular.module('firstClass');

app.directive('fcsScoutCard', function () {
	return {
		scope: {
			scout: '='
		},
		link: function (scope) {
			scope.$watch('scout', function(newValue, oldValue) {
				scope.scoutSummary = scope.scout.summarize();
			});
		},
		templateUrl: 'js/directives/directive-templates/scout-card.template.html'
	};
});