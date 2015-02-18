'use strict';

angular.module('firstClass').factory('persistenceService', ['$q', '$http', '$location',
	function ($q, $http, $location) {

	var _getScoutById = function (id) {
		// return promise
	};

	var _getScouts = function () {
		// return promise
	};

	var _saveScout = function (scout) {
		// return promise
	};


	var _login = function (username, password) {
		$http.post('/login', {username: username, password: password}).then(function (response) {
      console.log('login called, responded: ' + JSON.stringify(response));
    });
	};

	var _logout = function () {
		$http.post('/logout', {}).then(function (response) {
      console.log('logout called, responded: ' + JSON.stringify(response));
    });
	};

    // see https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs
    var _requireAuth = function () {
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
		requireAuth: _requireAuth,
		login: _login,
		logout: _logout,
		saveScout: _saveScout,
		getScoutById: _getScoutById,
		getScouts: _getScouts
	};

}]);