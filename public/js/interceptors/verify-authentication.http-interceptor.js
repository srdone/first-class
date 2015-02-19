// see https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs

angular.module('firstClass').factory('verifyAuthenticationHttpInterceptor',
  ['$q', '$location', function ($q, $location) {

    return {
      response: function (response) {
        console.log(response);
        return response;
      },
      responseError: function (response) {
        console.log(response);
        if (response.status === 401) {
          $location.url('/');
        }
        return $q.reject(response);
      }
    }

  }]);