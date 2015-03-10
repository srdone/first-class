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
      .error(function () {
        $location.path('/');
        deferred.reject();
      });

    return deferred.promise;

  };

  var _signUp = function (username, password) {
    return $http.post('/signup', {username: username, password: password});
  };

  var _login = function (username, password) {
    return $http.post('/login', {username: username, password: password}).then(function (response) {
      $rootScope.loggedIn = true;
      $rootScope.username = response.data.username;
      console.log('login called, responded: ' + JSON.stringify(response));
    });
  };

  var _logout = function () {
    return $http.post('/logout', {}).then(function (response) {
      console.log('logout called, responded: ' + JSON.stringify(response));
    });
  };

  var _checkLoggedIn = function () {
    return $http.get('/loggedIn')
      .success(function (response) {
        if (response.data.message === 'currently logged in') {
          $rootScope.username = response.data.username;
          $rootScope.loggedIn = true;
        }
      })
      .error(function (response) {
        $location.path('/');
        $rootScope.username = undefined;
        $rootScope.loggedIn = false;
      });
  };

  return {
    requireAuth: _requireAuth,
    signUp: _signUp,
    login: _login,
    logout: _logout,
    checkLoggedIn: _checkLoggedIn
  };

}]);