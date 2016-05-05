import angular from 'angular';

import layoutTpl from './layout/layout.template.html!text';
import loginTpl from './login/login.view.html!text';
import troopTpl from './troop/troop.view.html!text';
import scoutTpl from './scout/scout.view.html!text';
import scoutSidebarTpl from './scout-sidebar/scout-sidebar.view.html!text';
import legalTpl from './legal/legal.view.html!text';

import LayoutController from './layout/layout.controller';
import ScoutController from './scout/scout.controller';
import TroopController from './troop/troop.controller';
import ScoutSidebarController from './scout-sidebar/scout-sidebar.controller';

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
        template: layoutTpl,
        controller: LayoutController
      })
			.state('app.main', {
				url: '/',
        views: {
          "mainView": {
            template: loginTpl,
            controller: LayoutController
          }
        }
			})
			.state('app.troop', {
				url: '/troop',
        views: {
          "mainView": {
            template: troopTpl,
            controller: TroopController
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
            template: scoutTpl,
            controller: ScoutController,
            controllerAs: 'vm'
          },
          "chartView": {
            template: scoutSidebarTpl,
            controller: ScoutSidebarController,
            controllerAs: 'vm'
          }
        }
			})
      .state('app.legal', {
        url: '/legal',
        views: {
          "mainView": {
            template: legalTpl
          }
        }
      });

	}]);