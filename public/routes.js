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
            template: '<fcs-login></fcs-login>',
          }
        }
			})
			.state('troop', {
				url: '/troop',
        views: {
          "mainView": {
            template: '<fcs-troop></fcs-troop>',
          }
        }
			})
			.state('scout-detail', {
				url: '/scout/:scoutId',
        views: {
          "mainView": {
            template: '<fcs-scout></fcs-scout>',
          }
        }
			})
      .state('legal', {
        url: '/legal',
        views: {
          "mainView": {
            template: '<fcs-legal></fcs-legal>'
          }
        }
      });

	}]);