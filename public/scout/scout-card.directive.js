var app = angular.module('firstClass');

app.directive('fcsScoutCard', ['$timeout', '$state', function ($timeout, $state) {
	return {
    restrict: 'E',
		scope: {
			scout: '='
		},
    transclude: true,
		templateUrl: 'scout/scout-card.template.html'
	};
}]);