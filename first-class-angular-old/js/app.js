'use strict';

var app = angular.module('firstClass', ['ui.router', 'ui.bootstrap', 'firebase']);

//from Firebase AngularFire documentation
app.run(['$rootScope', '$state', function($rootScope, $state) {
	$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {

		if (error === "AUTH_REQUIRED") {
			$state.go('main');
		}
	});

}]);