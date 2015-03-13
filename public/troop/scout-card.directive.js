var app = angular.module('firstClass');

app.directive('fcsScoutCard', function () {
	return {
		scope: {
			scout: '='
		},
		templateUrl: 'troop/scout-card.template.html'
	};
});