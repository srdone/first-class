'use strict';

var app = angular.module('firstClass');

app.factory('persistenceService', ['$q', '$firebase', function ($q, $firebase) {

	var _testScouts = [
		{
			id: 'testid1',
			firstName: "Stephen",
			lastName: "Done",
			photoUrl: '',
			isOA: true,
			completedReqs: [],
			currentPatrol: "Owl",
			troop: '174',
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
			photoUrl: '',
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

	var ref = new Firebase("https://first-class.firebaseio.com");

	var _scouts = _testScouts;

	// var ref = new Firebase("https://first-class.firebaseio.com");
	// var syncScouts = $firebase(ref.child("scouts"));
	// var _scouts = syncScouts.$asArray();

	// if (_scouts.length === 0) {
	// 	_testScouts.forEach(function (scout) {
	// 		var ref = _scouts.$add(scout).then(function () {
	// 			scout.id = ref.key();
	// 		});
	// 		$save();
	// 	});
	// }

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

	//takes a type so we determine how to save the given object
	var _save = function (type, object) {

		// _scouts.$add(object).then(function completedSave () {
		// 	return object;
		// });

		var deferred = $q.defer();

		console.log('called save ' + type + ': ' + object);

		//using setTimeout to help understand $q
		setTimeout(function () {
			if (true) {
				_scouts.push(object);
				deferred.resolve(object);
			} else {
				deferred.reject('failed to save ' + type + ': ' + object);
			}
		}, 1000);

		return deferred.promise;

	}

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

	return {
		login: _login,
		save: _save,
		getScoutById: _getScoutById,
		getScoutsInTroop: _getScoutsInTroop
	};
}]);