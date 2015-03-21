var app = angular.module('firstClass');

app.directive('fcsScoutCard', ['$timeout', '$state', function ($timeout, $state) {
	return {
		scope: {
			scout: '='
		},
		templateUrl: 'scout/scout-card.template.html',
    link: function ($scope) {
      $scope.leaving = false;

      $scope.goToScout = function () {
        $scope.leaving = true;
        $timeout(function () {
          $state.go('scout-detail', { scoutId: $scope.scout.id });
        },500)
      };
    }
	};
}]);