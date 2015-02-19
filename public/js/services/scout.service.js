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
					scoutData._completedReqs,
					scoutData.currentPatrol,
					scoutData.troop,
					scoutData._positionHistory,
					scoutData._campingHistory,
					scoutData._serviceHistory
				);
		};

		//returns scout object
		var _getScoutById = function (scoutId) {
			return persistenceService.getScoutById(scoutId).then(function (scoutRaw) {

				var scoutConverted = _convertScout(scoutRaw);

				return scoutConverted;
			});
		};

		//returns scout objects
		var _getScouts = function () {
			return persistenceService.getScouts().then(function (troopScoutDataRaw) {
        debugger;

				var troopScoutsConverted = troopScoutDataRaw.map(function (current) {

					return _convertScout(current);
				});

				return troopScoutsConverted;
			});
		};

		var _createNewScout = function (scout) {
			var newScout = new Scout(undefined, scout.firstName, scout.lastName);
			return newScout.save();
		};

		return {
			createNewScout: _createNewScout,
			getScoutById: _getScoutById,
			getScouts: _getScouts
		}

	}]);