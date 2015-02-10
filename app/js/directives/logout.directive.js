'use strict';

angular.module('firstClass').directive('fcsLogout',
	function () {

		return {
			restrict: 'A',
			scope: {
				title: '@'
			},
			controller: function ($scope, persistenceService) {

				$scope.logout = function () {
					persistenceService.logout();
					console.log("logged out");
				}

			},
			link: function (scope, element, attributes) {
				element.bind('click', scope.logout);
			}
		}

	});