angular.module('firstClass').factory('authService', ['$location', '$http', '$q', '$rootScope', function ($location, $http, $q, $rootScope) {

  /* Private Variables */
  var loggedIn = false;
  var currentUsername = undefined;

  // see https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs
  var _requireAuth = function () {
    console.log('called requireAuth');
    var deferred = $q.defer();

    $http.get('/loggedIn')
      .success(function (response) {
        console.log(response);
        loggedIn = true;
        currentUsername = response.data.username;
        console.log('requireAuth', username);
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
    return $http.post('/login', {username: username, password: password})
      .then(function (response) {
        loggedIn = true;
        currentUsername = response.data.username;
        console.log(username);
        console.log('login called, responded: ', response);
      });
  };

  var _logout = function () {
    return $http.post('/logout', {})
      .then(function (response) {
        loggedIn = false;
        currentUsername = undefined;
        console.log('logout called, responded: ', response);
      });
  };

  var _checkLoggedIn = function () {
    return $http.get('/loggedIn')
      .then(function (response) {
        if (response.data.message === 'currently logged in') {
          currentUsername = response.data.username;
          console.log('checkLoggedIn success', username);
          loggedIn = true;
        }
      })
      .catch(function (response) {
        $location.path('/');
        currentUsername = undefined;
        console.log('checkLoggedIn failure', username);
        loggedIn = false;
      });
  };

  return {
    requireAuth: _requireAuth,
    signUp: _signUp,
    login: _login,
    logout: _logout,
    checkLoggedIn: _checkLoggedIn,
    getUsername: function () { return currentUsername; },
    setUsername: function (value) { currentUsername = value; },
    isLoggedIn: function () { return loggedIn; },
    setLoggedIn: function (state) { loggedIn = state; }
  };

}]);