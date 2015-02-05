var app = angular.module('firstClass');

app.factory('scoutService', ['scoutObjectService', 'scoutPersistenceService',
	function (scoutObjectService, scoutPersistenceService) {
		var sos = scoutObjectService;
		var sps = scoutPersistenceService;

		return 'test scoutService' + sos + sps;
	}]);