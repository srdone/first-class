angular.module('firstClass')
	.controller('ServiceHistoryController', ['$scope', '$stateParams', 'scoutService',
		function($scope, $stateParams, scoutService) {

			var _getScout = function () {
        scoutService.getScoutById($stateParams.scoutId).then(function (scout) {
          $scope.scout = scout;
        });
      };

      $scope.service = {
        description: '',
        hours: 0
      };

      $scope.fields = [
        {property: $scope.service.description, inputType: 'text', placeholder: 'Description'},
        {property: $scope.service.hours, inputType: 'number', placeholder: 'Hours'}
      ];

      // TODO: fix funny animation of new service lines
			$scope.addService = function () {
        debugger;
				var scoutToUpdate = angular.copy($scope.scout);

        scoutToUpdate.addService($scope.fields[0].property, $scope.fields[1].property);

        scoutToUpdate.save().then(function () {
          _getScout();
        });

			};

		}]);