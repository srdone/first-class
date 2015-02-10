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
					'currentAuth': ['persistenceService', function(persistenceService) {
						return persistenceService.requireAuth();
					}]
				}
			})
			.state('scout-detail', {
				url: '/scout/:scoutId',
				templateUrl: 'views/scout.view.html',
				controller: 'ScoutController',
				resolve: {
					'currentAuth': ['persistenceService', function(persistenceService) {
						return persistenceService.requireAuth();
					}]
				}
			})
			.state('scout-detail.requirements-progress', {
				url: '/scout/:scoutId',
				templateUrl: 'views/requirements-progress.view.html',
				controller: 'RequirementsProgressController',
				resolve: {
					'currentAuth': ['persistenceService', function(persistenceService) {
						return persistenceService.requireAuth();
					}]
				}
			})
			.state('scout-detail.next-steps', {
				url: '/scout/:scoutId',
				templateUrl: 'views/next-steps.view.html',
				controller: 'NextStepsController',
				resolve: {
					'currentAuth': ['persistenceService', function(persistenceService) {
						return persistenceService.requireAuth();
					}]
				}
			})
			.state('requirement-management', {
				url: 'requirement-management',
				templateUrl: 'views/requirement-management.view.html',
				controller: 'RequirementManagementController',
				resolve: {
					'currentAuth': ['persistenceService', function(persistenceService) {
						return persistenceService.requireAuth();
					}]
				}
			});

	}]);