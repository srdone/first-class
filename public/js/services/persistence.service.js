'use strict';

angular.module('firstClass').factory('persistenceService', ['$q', '$http',
	function ($q, $http) {

	var _getScoutById = function (id) {
		// return promise
	};

	var _getScouts = function () {
		return $http.get('/scouts').then(function (response) {
      return response.data;
    });
	};

	var _saveScout = function (scout) {
		return $http.post('/scouts', scout);
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

	return {
		login: _login,
		logout: _logout,
		saveScout: _saveScout,
		getScoutById: _getScoutById,
		getScouts: _getScouts
	};

}]);