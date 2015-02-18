angular.module('firstClass').factory('authService', ['$location', function ($location) {

  // see https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs
  var _requireAuth = function () {
    console.log('called requireAuth');
    var deferred = $q.defer();

    $http.get('/loggedin').success(function (user) {
      if (user !== '0') {
        deferred.resolve();
      } else {
        deferred.reject();
        $location.url('/');
      }
    });

    return deferred.promise;
  };

  return {
    requireAuth: _requireAuth
  };

}]);