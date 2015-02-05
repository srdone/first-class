var app = angular.module('firstClass');

app.controller('ScoutSummaryController', ['$scope', function ($scope) {
	$scope.test = "ScoutSummaryController"

	$scope.scout = {
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
}]);