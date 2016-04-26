import angular from 'angular';
import tpl from './nights-of-camping-icon.template.html!text'

angular.module('firstClass').directive('fcsNightsOfCampingIcon', function () {

  return {
    restrict: 'E',
    scope: {
      nights: '='
    },
    template: tpl
  }

});