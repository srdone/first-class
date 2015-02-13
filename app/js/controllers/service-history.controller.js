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

        $scope.scout.save();

        _getScout();

			};

			$scope.cancelAdd = function () {
				$scope.newService = {};
			};

		}]);