// see https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs

angular.module('firstClass').factory('verifyAuthenticationHttpInterceptor',
  ['$q', '$state', '$rootScope', function ($q, $state, $rootScope) {

    return {
      response: function (response) {
        console.log(response);
        return response;
      },
      responseError: function (response) {
        console.log(response);
        if (response.status === 401) {
          $rootScope.loggedIn = false;
          $state.go('main');
        }
        return $q.reject(response);
      }
    }

  }]);