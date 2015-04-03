'use strict';

angular.module('firstClass').service('troopService', function () {

  this.troop = [];

  this.addScout = function addScout (scout) {
    if(this.troop.indexOf(scout) === -1) {
      this.troop.push(scout);
    }
  }

});