'use strict';

var app = angular.module('firstClass');

app.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('main', {
				url: '/',
        views: {
          "mainView": {
            templateUrl:'login/login.view.html',
            controller: 'LayoutController'
          }
        }
			})
			.state('troop', {
				url: '/troop',
        resolve: {
          existingRequirements: ['requirementService', function (requirementService) {
            return requirementService.getAllRequirements();
          }],
          troop: ['scoutService', '$log', 'existingRequirements', function (scoutService, $log) {
            $log.debug('resolving troop');
            return scoutService.getScouts();
          }]
        },
        views: {
          "mainView": {
            templateUrl: 'troop/troop.view.html',
            controller: 'TroopController'
          },
          "chartView": {
            template: '<fcs-troop-progress-chart troop="troop" width="100" height="50"></fcs-troop-progress-chart>',
            controller: ['$scope', 'troop', function($scope, troop) {
              $scope.troop = troop;
            }]
          }
        }
			})
			.state('scout-detail', {
				url: '/scout/:scoutId',
        resolve: {
          existingRequirements: ['requirementService', function (requirementService) {
            return requirementService.getAllRequirements();
          }],
          scout: ['$stateParams', 'scoutService', 'existingRequirements', function ($stateParams, scoutService) {
            return scoutService.getScoutById($stateParams.scoutId);
          }]
        },
        views: {
          "mainView": {
            templateUrl: 'scout/scout.view.html',
            controller: 'ScoutController'
          }
        }
			})
      .state('legal', {
        url: '/legal',
        views: {
          "mainView": {
            templateUrl: 'legal/legal.view.html'
          }
        }
      });

	}]);