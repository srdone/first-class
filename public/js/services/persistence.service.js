'use strict';

angular.module('firstClass').factory('persistenceService', ['$q', '$http',
	function ($q, $http) {

	var _getScoutById = function (id) {
		return $http.get('/scouts/' + id).then(function (response) {
      return response.data;
    });
	};

	var _getScouts = function () {
		return $http.get('/scouts').then(function (response) {
      return response.data;
    });
	};

	var _saveScout = function (scout) {
		return $http.put('/scouts', scout).then(function (response) {
      return response.data;
    });
	};

  var _createScout = function (scout) {
    return $http.post('/scouts', scout).then(function (response) {
      return response.data;
    });
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
    createScout: _createScout,
		saveScout: _saveScout,
		getScoutById: _getScoutById,
		getScouts: _getScouts
	};

}]);