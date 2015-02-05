'use strict';

var app = angular.module('firstClass');

app.factory('scoutService', ['scoutObjectService', 'scoutPersistenceService',
	function (scoutObjectService, scoutPersistenceService) {
		
		//returns scout object
		var _getScoutById = function (scoutId) {
			return scoutPersistenceService.getScoutById(scoutId);
		};

		//returns scout objects
		var _getScoutsInTroop = function (troopId) {
			return scoutPersistenceService.getScoutsInTroop(troopId);
		};

		//returns generic object data
		var _getScoutSummaryById = function (id) {
			var scout = _getScoutById(id);
			return _summarizeScout(scout);
		};

		//returns list of scout summmary generic object data
		var _getScoutSummariesInTroop = function (troopId) {
			var scouts = _getScoutsInTroop(troopId);

			var summarized = scouts.map(function (currentScoutId) {
				return _summarizeScout(currentScoutId);
			});

			return summarized;
		};

		//takes scout object, returns generic object data summary
		var _summarizeScout = function (scout) {
			return scout;
		};

		return {
			getScoutSummaryById: _getScoutSummaryById,
			getScoutSummariesInTroop: _getScoutSummariesInTroop
		}

	}]);