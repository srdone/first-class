var app = angular.module('firstClass');

app.directive('fcsScoutCard', function () {
	return {
		scope: {
			scout: '='
		},
		link: function (scope) {
			var scoutSummary = scope.scout.summarize();
			scope.scoutSummary = scoutSummary;
		},
		templateUrl: 'js/directives/directive-templates/scout-card.template.html'
	};
});