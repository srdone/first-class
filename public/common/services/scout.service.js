'use strict';

var app = angular.module('firstClass');

app.factory('scoutService', ['scoutObjectService', 'persistenceService', '$log',
	function (scoutObjectService, persistenceService, $log) {
		
		var Scout = scoutObjectService.Scout;

		//convert scout json to object
		var _convertScout = function (scoutData) {

			return new Scout(
					scoutData._id,
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
      $log.debug('getScoutById called with scoutId: ' + scoutId);

			return persistenceService.getScoutById(scoutId).then(function (scoutRaw) {

				var scoutConverted = _convertScout(scoutRaw);

				return scoutConverted;
			});
		};

		//returns scout objects
		var _getScouts = function () {
      $log.debug('getScouts called');
			return persistenceService.getScouts().then(function (troopScoutDataRaw) {

				var troopScoutsConverted = troopScoutDataRaw.map(function (current) {

					return _convertScout(current);
				});

				return troopScoutsConverted;
			});
		};

		var _createNewScout = function (scout) {
      $log.debug('createNewScout called');
      $log.debug(scout);
			return persistenceService.createScout(scout).then(function (newScoutData) {
        return _convertScout(newScoutData);
      });
		};

		return {
			createNewScout: _createNewScout,
			getScoutById: _getScoutById,
			getScouts: _getScouts
		}

	}]);