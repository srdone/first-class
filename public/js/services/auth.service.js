angular.module('firstClass').factory('authService', ['$location', '$http', '$q', '$rootScope', function ($location, $http, $q, $rootScope) {

  // see https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs
  var _requireAuth = function () {
    console.log('called requireAuth');
    var deferred = $q.defer();

    $http.get('/loggedin')
      .success(function (response) {
        console.log(response);
        $rootScope.username = response.data.username;
        deferred.resolve('success');
      })
      .failure(function () {
        $location.path('/');
        deferred.reject();
      });

    return deferred.promise;

  };

  var _signUp = function (username, password) {
    return $http.post('/signup', {username: username, password: password});
  };

  return {
    requireAuth: _requireAuth,
    signUp: _signUp
  };

}]);