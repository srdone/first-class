angular.module('firstClass').directive('fcsEScoutName', function () {
  return {
    template: '<span editable-text="scout.firstName" e-form="editable" onaftersave="updateScout()">{{scout.firstName}}</span>' + ' ' +
              '<span editable-text="scout.lastName" e-form="editable" onaftersave="updateScout()">{{scout.lastName}}</span>'
  }
});