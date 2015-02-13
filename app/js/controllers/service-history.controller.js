angular.module('firstClass')
	.controller('ServiceHistoryController', ['$scope', '$stateParams', 'scoutService',
		function($scope, $stateParams, scoutService) {

			var _getScout = function () {
        scoutService.getScoutById($stateParams.scoutId).then(function (scout) {
          $scope.scout = scout;
        });
      };

			$scope.addService = function (service) {

				$scope.scout.addService(service.description, service.hours);

        // get rid of hash key
        var scoutToSave = angular.copy($scope.scout);

        scoutToSave.save().then(function () {
          _getScout();
        });

			};

			$scope.cancelAdd = function () {
				$scope.newService = {};
			};

		}]);