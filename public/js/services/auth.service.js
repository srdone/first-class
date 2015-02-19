angular.module('firstClass').factory('authService', ['$location', '$http', '$q', function ($location, $http, $q) {

  // see https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs
  var _requireAuth = function () {
    console.log('called requireAuth');
    var deferred = $q.defer();

    $http.get('/loggedin')
      .success(function (response) {
        console.log(response);
        deferred.resolve('success');
      })
      .failure(function () {
        $location.url('/');
        deferred.reject();
      });

    return deferred.promise;

  };

  return {
    requireAuth: _requireAuth
  };

}]);