import angular from 'angular';
import tpl from './position-summary.template.html!text';

angular.module('firstClass').directive('fcsPositionSummary', function () {

  return {
    restrict: 'E',
    scope: {
      position: '='
    },
    template: tpl
  }

});