angular.module('firstClass').directive('fcsHoursOfServiceIcon', function () {

  return {
    scope: {
      hours: '='
    },
    templateUrl: 'js/directives/directive-templates/hours-of-service-icon.template.html'
  }

});