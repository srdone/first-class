var app = angular.module('firstClass');

app.directive('fcsScoutCard', function () {
	return {
		scope: {
			scout: '='
		},
		templateUrl: 'js/directives/directive-templates/scout-card.template.html',
    link: function ($scope, $element, $attributes) {
      $scope.$watch('scout.currentPatrol', function (n, o) {
        if (n.toLowerCase().indexOf('patrol') !== -1) {
          $scope.patrolContainsPatrol = true;
        }
      });
    }
	};
});