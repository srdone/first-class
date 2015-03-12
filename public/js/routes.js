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
          existingRequirements: ['requirementService', function (requirementService) {
            return requirementService.getAllRequirements();
          }],
          troop: ['scoutService', '$log', 'existingRequirements', function (scoutService, $log) {
            $log.debug('resolving troop');
            return scoutService.getScouts();
          }]
        }
			})
			.state('scout-detail', {
				url: '/scout/:scoutId',
				templateUrl: 'views/scout.view.html',
				controller: 'ScoutController',
        resolve: {
          existingRequirements: ['requirementService', function (requirementService) {
            return requirementService.getAllRequirements();
          }],
          scout: ['$stateParams', 'scoutService', 'existingRequirements', function ($stateParams, scoutService) {
            return scoutService.getScoutById($stateParams.scoutId);
          }]
        }
			})
      .state('legal', {
        url: '/legal',
        templateUrl: 'views/legal.view.html'
      });

	}]);