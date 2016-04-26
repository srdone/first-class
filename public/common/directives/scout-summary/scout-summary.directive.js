import angular from 'angular';
import tpl from './scout-summary.template.html!text';

angular.module('firstClass').directive('fcsScoutSummary', function () {

  return {
    scope: {
      scout: '='
    },
    template: tpl
  }

});