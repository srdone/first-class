'use strict';

var app = angular.module('firstClass');

app.directive('fcsLogin', function () {
	return {
		restrict: 'E',
		controller: 'LoginController',
		templateUrl: 'js/directives/directive-templates/login.template.html'
	};
});