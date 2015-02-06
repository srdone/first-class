'use strict';

var app = angular.module('firstClass');

app.factory('scoutPersistenceService', function () {

	var _scouts = [
		{
			id: 'testid1',
			firstName: "Stephen",
			lastName: "Done",
			photoUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
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
			photoUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
			isOA: false,
			completedReqs: [],
			currentPatrol: "Monkey",
			troop: '174',
			positionHistory: [
				{title: 'WebMaster', start: 'Jan 1, 2013', end: 'Dec 31, 2013'},
  				{title: 'Patrol Leader', start: 'Jan 1, 2014', end: 'Sep 5, 2014'},
  				{title: 'Senior Patrol Leader', start: 'Dec 12, 2014'}
			],
			serviceHistory: [
				{description: 'Cleaning the park', hours: 2},
  				{description: 'Painting the church', hours: 1},
  				{description: 'Cleaning the ditches', hours: 0.5}
			],
			campingHistory: [
				{description: 'Goblin Valley', start: 'Jan 1, 2012', end: 'Jan 2, 2012'},
  				{description: 'Deer Creek', start: 'Sep 5, 2013', end: 'Sep 6, 2013'},
  				{description: 'Zion National Park', start: 'Sep 10, 2014', end: 'Sep 13, 2014'},
  				{description: 'Maple Dell', start: 'July 10, 2014', end: 'July 15, 2014'},
  				{description: 'Orange Groves', start: 'Aug 13, 2014', end: 'Aug 16, 2014'},
  				{description: 'Camporee', start: 'Aug 17, 2014', end: 'Aug 19, 2014'}
			]
		},
		{
			id: 'testid3',
			firstName: "Gustavo",
			lastName: "Done",
			photoUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
			isOA: false,
			completedReqs: [],
			currentPatrol: "Fox",
			troop: '174',
			positionHistory: [
				{title: 'Patrol Leader', start: 'Jan 23, 2013', end: 'Sep 5, 2014'}
			],
			campingHistory: [
				{description: 'Zion National Park', start: 'Sep 10, 2014', end: 'Sep 13, 2014'},
  				{description: 'Maple Dell', start: 'July 10, 2014', end: 'July 15, 2014'},
  				{description: 'Orange Groves', start: 'Aug 13, 2014', end: 'Aug 16, 2014'},
  				{description: 'Camporee', start: 'Aug 17, 2014', end: 'Aug 19, 2014'}
			],
			serviceHistory: [
				{description: 'Cleaning the park', hours: 2},
  				{description: 'Painting the church', hours: 1},
  				{description: 'Cleaning the ditches', hours: 3.5}
			]
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