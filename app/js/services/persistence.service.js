'use strict';

var app = angular.module('firstClass');

app.factory('persistenceService', ['$q', '$firebase', '$firebaseAuth',
	function ($q, $firebase, $firebaseAuth) {

	var ref = new Firebase("https://first-class.firebaseio.com");

	var auth = $firebaseAuth(ref);

	var syncScouts = $firebase(ref.child('scouts'));

	var _getScoutById = function (id) {
		var deferred = $q.defer();
		ref.child('scouts').child(id).on('value', function(snapshot) {
			deferred.resolve(snapshot.val());
		});

		return deferred.promise;
	};

	var _getScouts = function () {
		return syncScouts.$asArray().$loaded();
	};

	var _saveScout = function (scout) {
		var deferred = $q.defer();
		ref.child('scouts').child(scout.id).set(scout, function (error) {
			if (error) {
				deferred.reject('Error synchronizing' + error);
			} else {
				deferred.resolve(scout);
			}
		});

		return deferred.promise;
	};


	var _login = function (username, password) {
		ref.authWithPassword({
  		email    : username,
  		password : password
		}, function(error, authData) {
  			if (error) {
    			console.log("Login Failed!", error);
		  	} else {
		    	console.log("Authenticated successfully with payload:", authData);
		 	 	}
		});
	};

	var _logout = function () {
		ref.unauth();
	}

	return {
		requireAuth: auth.$requireAuth,
		login: _login,
		logout: _logout,
		saveScout: _saveScout,
		getScoutById: _getScoutById,
		getScouts: _getScouts
	};

}]);