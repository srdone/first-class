'use strict';

var app = angular.module('firstClass');

app.directive('fcsLogin', function () {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/directive-templates/login.template.html'
	};
});