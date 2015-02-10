'use strict';

angular.module('firstClass').directive('fcsLogout',
	function () {

		return {
			restrict: 'E',
			scope: {
				title: '@'
			},
			controller: function ($scope, persistenceService) {

				$scope.logout = function () {
					persistenceService.logout();
				}

			},
			template: '<button ng-click="logout()">{{title}}</button>'
		}

	});