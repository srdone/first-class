var app = angular.module('firstClass');

app.directive('fcsScoutCard', function () {
	return {
		scope: {
			scout: '=fcsScoutSummary'
		},
		templateUrl: 'js/directives/directive-templates/scout-card.template.html'
	};
});