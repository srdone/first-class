import angular from 'angular';
import tpl from './rank-progress.template.html!text';

angular.module('firstClass').directive('fcsRankProgress', function () {

  return {
    restrict: 'E',
    scope: {
      pctProgress: '='
    },
    template: tpl
  }

});