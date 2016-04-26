import angular from 'angular';
import tpl from './scout-patrol.template.html!text';

angular.module('firstClass').directive('fcsScoutPatrol', function () {

  return {
    scope: {
      patrol: '='
    },
    template: tpl,
    link: function($scope, $element, $attribute) {

      $scope.$watch('patrol', function (newVal) {
        if (newVal) {
          $scope.patrolContainsPatrol = ($scope.patrol.toLowerCase().indexOf('patrol') !== -1);
        }
      });
    }
  }

});