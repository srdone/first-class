angular.module('firstClass')
	.controller('ServiceHistoryController', ['$scope', '$stateParams', 'scoutService',
		function($scope, $stateParams, scoutService) {

			scoutService.getScoutById($stateParams.scoutId).then(function (scout) {
				$scope.scout = scout;
			});

			$scope.addService = function (service) {

				var serviceAdded = $scope.scout
															.addService(
																service.description,
																service.hours
															);

        $scope.scout.save().catch(function () {
					$scope.scout.removeCamping(serviceAdded.id);
				});
			};

			$scope.cancelAdd = function () {
				$scope.newService = {};
			};

		}]);