'use strict';

var app = angular.module('firstClass');

app.factory('scoutPersistenceService', function () {

	var _scouts = [
		{
			id: 'testid1',
			firstName: "Stephen",
			lastName: "Done",
			photoUrl: '',
			isOA: true,
			completedReqs: [],
			currentPatrol: "Owl",
			troop: '154',
			positionHistory: [],
			campingHistory: [],
			serviceHistory: []
		},
		{
			id: 'testid2',
			firstName: "Timothy",
			lastName: "Done",
			photoUrl: '',
			isOA: false,
			completedReqs: [],
			currentPatrol: "Monkey",
			troop: '154',
			positionHistory: [],
			campingHistory: [],
			serviceHistory: []
		},
		{
			id: 'testid3',
			firstName: "Gustavo",
			lastName: "Done",
			photoUrl: '',
			isOA: false,
			completedReqs: [],
			currentPatrol: "Fox",
			troop: '174',
			positionHistory: [],
			campingHistory: [],
			serviceHistory: []
		}
	];

	var _getScoutById = function (id) {
		for (var i = 0; i < _scouts.length; i++) {
			if (_scouts[i].id === id) {
				return _scouts[i];
			}
		}
	}

	var _getScoutsInTroop = function (troopId) {
		var scouts = []
		for (var i = 0; i < _scouts.length; i++) {
			if (_scouts[i].troop === troopId) {
				scouts.push(_scouts[i]);
			}
		}
		return scouts;
	};

	return {
		getScoutById: _getScoutById,
		getScoutsInTroop: _getScoutsInTroop
	};
});