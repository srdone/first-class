angular.module('firstClass').directive('fcsScoutPatrol', function () {

  return {
    scope: {
      patrol: '='
    },
    templateUrl: 'common/directives/scout-patrol/scout-patrol.template.html',
    link: function($scope, $element, $attribute) {

      $scope.$watch('patrol', function (newVal) {
        if (newVal) {
          $scope.patrolContainsPatrol = ($scope.patrol.toLowerCase().indexOf('patrol') !== -1);
        }
      });
    }
  }

});