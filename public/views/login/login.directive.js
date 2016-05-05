import angular from 'angular';
import LoginController from './login.controller';
import tpl from './login.template.html!text';

var app = angular.module('firstClass');

app.directive('fcsLogin', function () {
	return {
		restrict: 'E',
		controller: LoginController,
		template: tpl
	};
});