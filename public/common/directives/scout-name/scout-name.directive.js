angular.module('firstClass').directive('fcsScoutName', function () {

  return {
    scope: {
      scout: '='
    },
    template: '<div class="truncate">{{scout.firstName}} {{scout.lastName}}</div>'
  }

});