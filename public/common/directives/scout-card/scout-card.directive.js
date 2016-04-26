import angular from 'angular';
import tpl from './scout-card.template.html!text';

var app = angular.module('firstClass');

app.directive('fcsScoutCard', ['$timeout', '$state', function ($timeout, $state) {
	return {
    restrict: 'E',
		scope: {
			scout: '='
		},
    transclude: true,
		template: tpl
	};
}]);