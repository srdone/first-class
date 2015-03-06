angular.module('firstClass').directive('fcsScoutPatrol', function () {

  return {
    scope: {
      patrol: '='
    },
    templateUrl: 'js/directives/directive-templates/scout-patrol.template.html',
    link: function($scope, $element, $attribute) {
      $scope.patrolContainsPatrol = ($scope.patrol.toLowerCase().indexOf('patrol') !== -1);
    }
  }

});