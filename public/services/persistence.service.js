'use strict';

angular.module('firstClass').factory('persistenceService', ['$q', '$http', '$rootScope',
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
		return $http.put('/scouts/' + scout.id, scout).then(function (response) {
      return response.data;
    });
	};

  var _createScout = function (scout) {
    return $http.post('/scouts', scout).then(function (response) {
      return response.data;
    });
  };

    var _deleteScout = function (scout) {
      return $http.delete('/scouts/' + scout.id).then(function (response) {
        return response.data;
      });
    };

    var _getAllRequirements = function () {
      return $http.get('/requirements').then(function (response) {
        return response.data;
      });
    };

	return {
    createScout: _createScout,
		saveScout: _saveScout,
    deleteScout: _deleteScout,
		getScoutById: _getScoutById,
		getScouts: _getScouts,
    getAllRequirements: _getAllRequirements
	};

}]);