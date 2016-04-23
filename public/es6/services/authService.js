export default authService;

authService.$inject = ['$location', '$http', '$q', '$rootScope'];
function authService($location, $http, $q, $rootScope) {
  
  return {
    requireAuth: _requireAuth,
    signUp: _signUp,
    login: _login,
    logout: _logout,
    checkLoggedIn: _checkLoggedIn
  };

}

function _requireAuth() {
  console.log('called requireAuth');
  var deferred = $q.defer();

  $http.get('/loggedIn')
    .success(function (response) {
      console.log(response);
      $rootScope.loggedIn = true;
      $rootScope.username = response.data.username;
      deferred.resolve('success');
    })
    .error(function () {
      $location.path('/');
      deferred.reject();
    });

  return deferred.promise;
};

function _signUp(username, password) {
  return $http.post('/signup', {username: username, password: password});
};

function _login(username, password) {
  return $http.post('/login', {username: username, password: password}).then(function (response) {
    $rootScope.loggedIn = true;
    $rootScope.username = response.data.username;
    console.log('login called, responded: ' + JSON.stringify(response));
  });
};

function _logout() {
  return $http.post('/logout', {}).then(function (response) {
    $rootScope.loggedIn = false;
    $rootScope.username = undefined;
    console.log('logout called, responded: ' + JSON.stringify(response));
  });
};

function _checkLoggedIn() {
  return $http.get('/loggedIn')
    .success(function (response) {
      if (response.message === 'currently logged in') {
        $rootScope.username = response.username;
        $rootScope.loggedIn = true;
      }
    })
    .error(function (response) {
      $location.path('/');
      $rootScope.username = undefined;
      $rootScope.loggedIn = false;
    });
};