'use strict';

var app = angular.module('firstClass');

app.factory('scoutService', ['scoutObjectService', 'persistenceService',
	function (scoutObjectService, persistenceService) {
		
		var Scout = scoutObjectService.Scout;

		//convert scout json to object
		var _convertScout = function (scoutData) {
			return new Scout(
					scoutData.id,
					scoutData.firstName,
					scoutData.lastName,
					scoutData.photoUrl,
					scoutData.isOA,
					scoutData.completedReqs,
					scoutData.currentPatrol,
					scoutData.troop,
					scoutData.positionHistory,
					scoutData.campingHistory,
					scoutData.serviceHistory
				);
		};

		//returns scout object
		var _getScoutById = function (scoutId) {
			var scoutRaw = scoutPersistenceService.getScoutById(scoutId);
			var scoutConverted = _convertScout(scoutRaw);

			return scoutConverted;
		};

		//returns scout objects
		var _getScoutsInTroop = function (troopId) {
			var troopScoutDataRaw = scoutPersistenceService.getScoutsInTroop(troopId);
			var troopScoutsConverted = troopScoutDataRaw.map(function (current) {
				return _convertScout(current);
			});

			return troopScoutsConverted;
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

			console.log(summarized);
			return summarized;
		};

		//takes scout object, returns generic object data summary
		var _summarizeScout = function (scout) {
			return scout.summarize();
		};

		var _createNewScout = function (scout) {
			var newScout = new Scout(undefined, scout.firstName, scout.lastName);
			newScout.save().then(function returnScoutOnSave () {
				return newScout;
			};
		};

		return {
			createNewScout: _createNewScout,
			getScoutSummaryById: _getScoutSummaryById,
			getScoutSummariesInTroop: _getScoutSummariesInTroop
		}

	}]);