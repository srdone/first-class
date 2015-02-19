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
        $location.path('/');
        deferred.reject();
      });

    return deferred.promise;

  };

  var _signUp = function (newUser) {
    return $http.post('/signup', newUser);
  };

  return {
    requireAuth: _requireAuth,
    signUp: _signUp
  };

}]);