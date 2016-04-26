import angular from 'angular';

// see https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs

angular.module('firstClass').factory('verifyAuthenticationHttpInterceptor',
  ['$q', '$location', '$rootScope', '$log', function ($q, $location, $rootScope, $log) {

    return {
      response: function (response) {
        $log.debug(response);
        return response;
      },
      responseError: function (response) {
        $log.debug(response);
        if (response.status === 401) {
          $rootScope.loggedIn = false;
          $location.url('/');
        }
        return $q.reject(response);
      }
    }

  }]);