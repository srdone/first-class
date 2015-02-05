var app = angular.module('firstClass');

app.factory('scoutPersistenceService', function () {

	var _scouts = [
		{
			id: 'testid',
			firstName: "Stephen",
			lastName: "Done",
			photoUrl: '',
			currentRank: "Eagle",
			currentPatrol: "Owl",
			currentPositions: [
				{title: "Scoutmaster", monthsInPosition: 10},
				{title: "Troop Committee Member", monthsInPosition: 5}
			],
			isOA: true,
			isOAQualified: true,
			qualifiedNightsOfCamping: 30,
			hoursOfService: 7,
			percentProgressToNextRank: 30,
			neededRequirementCategories: [
				{title: 'knots', color: 'brown'},
				{title: 'camping', color: 'green'},
				{title: 'first-aid', color: 'red'}
			],
			numberOfMeritBadges: 30
		}
	];

	var _getScoutById = function (id) {
		for (var i = 0; i < _scouts.length; i++) {
			if (_scouts[i].id === id) {
				return _scouts[i];
			}
		}
	}

	return {
		getScoutById: _getScoutById
	};
});