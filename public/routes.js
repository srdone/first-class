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
        views: {
          "mainView": {
            templateUrl: 'troop/troop.view.html',
            controller: 'TroopController'
          },
          "chartView": {
            template: '<div class="spacer"></div>'+
            '<fcs-troop-progress-chart troop="troop"></fcs-troop-progress-chart>',
            controller: function ($scope) {
              $scope.$on('troop:updated', function (event, troop) {
                $scope.troop = troop;
              });
            }
          }
        }
			})
			.state('scout-detail', {
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
      .state('legal', {
        url: '/legal',
        views: {
          "mainView": {
            templateUrl: 'legal/legal.view.html'
          }
        }
      });

	}]);