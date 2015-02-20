angular.module('firstClass')
	.controller('ServiceHistoryController', ['$scope', '$stateParams', 'scoutService',
		function($scope, $stateParams, scoutService) {

			var _getScout = function () {
        scoutService.getScoutById($stateParams.scoutId).then(function (scout) {
          $scope.scout = scout;
        });
      };

      // TODO: fix funny animation of new service lines
			$scope.addService = function (service) {

				var scoutToUpdate = angular.copy($scope.scout);

        scoutToUpdate.addService(service.description, service.hours);

        scoutToUpdate.save().then(function () {
          _getScout();
        });

			};

			$scope.cancelAdd = function () {
				$scope.newService = {};
			};

		}]);