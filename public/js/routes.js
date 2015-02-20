'use strict';

var app = angular.module('firstClass');

app.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'views/main.view.html',
				controller: 'MainController'
			})
			.state('troop', {
				url: '/troop',
				templateUrl: 'views/troop.view.html',
				controller: 'TroopController',
        resolve: {
          troop: ['scoutService', function (scoutService) {
            return scoutService.getScouts();
          }]
        }
			})
			.state('scout-detail', {
				url: '/scout/:scoutId',
				templateUrl: 'views/scout.view.html',
				controller: 'ScoutController',
        resolve: {
          scout: ['$stateParams', 'scoutService', function ($stateParams, scoutService) {
            return scoutService.getScoutById($stateParams.scoutId);
          }]
        }
			});

	}]);