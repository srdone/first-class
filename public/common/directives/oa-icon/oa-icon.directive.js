import angular from 'angular';
import tpl from './oa-icon.template.html!text';

angular.module('firstClass').directive('fcsOaIcon', function () {

  return {
    restrict: 'E',
    template: tpl,
  }

});