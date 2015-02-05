var app = angular.module('firstClass');

app.factory('scoutService', ['scoutObjectService', 'scoutPersistenceService',
	function (scoutObjectService, scoutPersistenceService) {
		
		//returns scout object
		var _getScoutById = function (id) {
			return scoutPersistenceService.getScoutById(id);
		};

		//returns generic object data
		var _getScoutSummaryById = function (id) {
			return _getScoutById(id);
		};

		return {
			getScoutSummaryById: _getScoutSummaryById
		}

	}]);