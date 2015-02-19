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
			})
			.state('scout-detail.requirements-progress', {
				url: '/scout/:scoutId',
				templateUrl: 'views/requirements-progress.view.html',
				controller: 'RequirementsProgressController'
			})
			.state('scout-detail.next-steps', {
				url: '/scout/:scoutId',
				templateUrl: 'views/next-steps.view.html',
				controller: 'NextStepsController'
			})
			.state('scout-detail.service-history', {
				url: '/scout/:scoutId',
				templateUrl: 'views/service-history.view.html',
				controller: 'ServiceHistoryController'
			})
      .state('scout-detail.position-history', {
        url: '/scout/:scoutId',
        templateUrl: 'views/position-history.view.html',
        controller: 'PositionHistoryController'
      })
      .state('scout-detail.camping-history', {
        url: '/scout/:scoutId',
        templateUrl: 'views/camping-history.view.html',
        controller: 'CampingHistoryController'
      })
			.state('requirement-management', {
				url: 'requirement-management',
				templateUrl: 'views/requirement-management.view.html',
				controller: 'RequirementManagementController'
			});

	}]);