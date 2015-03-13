angular.module('firstClass').directive('fcsHoursOfServiceIcon', function () {

  return {
    scope: {
      hours: '='
    },
    templateUrl: 'service-projects/hours-of-service-icon.template.html'
  }

});