import angular from 'angular';
import tpl from './hours-of-service-icon.template.html!text';

angular.module('firstClass').directive('fcsHoursOfServiceIcon', function () {

  return {
    scope: {
      hours: '='
    },
    template: tpl
  }

});