var app = angular.module('firstClass');

app.directive('fcsScoutCard', function () {
	return {
		scope: {
			scout: '='
		},
		templateUrl: 'js/directives/directive-templates/scout-card.template.html',
    transclude: true
	};
});