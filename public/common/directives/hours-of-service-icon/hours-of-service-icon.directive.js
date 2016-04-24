angular.module('firstClass').directive('fcsHoursOfServiceIcon', function () {

  return {
    scope: {
      hours: '='
    },
    templateUrl: 'common/directives/hours-of-service-icon/hours-of-service-icon.template.html'
  }

});