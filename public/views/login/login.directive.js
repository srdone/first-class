'use strict';

var app = angular.module('firstClass');

app.directive('fcsLogin', function () {
	return {
		restrict: 'E',
		controller: 'LoginController',
		templateUrl: 'views/login/login.template.html'
	};
});