'use strict';

angular.module('firstClass').directive('fcsLogout',
	function () {

		return {
			restrict: 'A',
			scope: {
				title: '@'
			},
			controller: function ($scope, $state, persistenceService) {

				$scope.logout = function () {
					persistenceService.logout();
					$state.go('main');
					console.log("logged out");
				}

			},
			link: function (scope, element, attributes) {
				element.bind('click', scope.logout);
			}
		}

	});