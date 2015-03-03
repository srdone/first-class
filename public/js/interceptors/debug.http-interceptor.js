angular.module('firstClass').factory('debugHttpInterceptor',
  ['$log', function ($log) {

    return {
      response: function (response) {
        $log.debug(response);
        return response;
      },
      responseError: function (response) {
        $log.debug(response);
        return response;
      }
    }

  }]);