var app = angular.module('firstClass');

app.config(['$stateProvider', '$urlRouterProvider', 
	function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('main', {
				url: '/main',
				templateUrl: 'views/main.html'
			})
			.state('troop', {
				url: '/troop',
				templateUrl: 'views/troop.html'
			});

	}]);