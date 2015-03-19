angular.module('firstClass').directive('fcsHoursOfServiceIcon', function () {

  return {
    scope: {
      hours: '='
    },
    templateUrl: 'scout/hours-of-service-icon.template.html'
  }

});