'use strict';

var app = angular.module('firstClass');

app.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
      .state('app', {
        abstract: true,
        resolve: {
          requirements: function (requirementService) {
            return requirementService.getAllRequirements();
          }
        },
        templateUrl: 'layout/layout.template.html',
        controller: 'LayoutController'
      })
			.state('app.main', {
				url: '/',
        views: {
          "mainView": {
            templateUrl:'login/login.view.html',
            controller: 'LayoutController'
          }
        }
			})
			.state('app.troop', {
				url: '/troop',
        views: {
          "mainView": {
            templateUrl: 'troop/troop.view.html',
            controller: 'TroopController'
          },
          "chartView": {
            template: '<fcs-troop-progress-chart troop="vm.troop"></fcs-troop-progress-chart>',
            controllerAs: 'vm',
            controller: function ($scope, requirements) {

              var vm = this;

              $scope.$on('troop:updated', function (event, troop) {
                vm.troop = troop;
              });
            }
          }
        }
			})
			.state('app.scout-detail', {
				url: '/scout/:scoutId',
        views: {
          "mainView": {
            templateUrl: 'scout/scout.view.html',
            controller: 'ScoutController',
            controllerAs: 'vm'
          },
          "chartView": {
            templateUrl: 'scout-sidebar/scout-sidebar.view.html',
            controller: 'ScoutSidebarController',
            controllerAs: 'vm'
          }
        }
			})
      .state('app.legal', {
        url: '/legal',
        views: {
          "mainView": {
            templateUrl: 'legal/legal.view.html'
          }
        }
      })
      .state('app.test', {
        url: '/experiments',
        views: {
          "mainView": {
            templateUrl: 'experiments/experiments.template.html',
            controller: 'ExperimentsController',
            controllerAs: 'vm'
          }
        }
      });

	}]);