'use strict';

angular.module('firstClass').directive('fcsLogout',
  function () {

    return {
      restrict: 'A',
      scope: {
        title: '@'
      },
      controller: ['$scope', '$state', 'persistenceService', '$rootScope',
        function ($scope, $state, persistenceService, $rootScope) {

          $scope.logout = function () {
            persistenceService.logout().then(function () {
              $rootScope.loggedIn = false;
              $state.go('main');
              console.log("logged out");
            });
          }

        }],
      link: function (scope, element, attributes) {
        element.bind('click', scope.logout);
      }
    }

  });