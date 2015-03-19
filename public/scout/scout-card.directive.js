var app = angular.module('firstClass');

app.directive('fcsScoutCard', function () {
	return {
		scope: {
			scout: '='
		},
		templateUrl: 'scout/scout-card.template.html'
	};
});