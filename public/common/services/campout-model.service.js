import angular from 'angular';

angular.module('firstClass').factory('campoutModel', ['$resource', function($resource) {

  var Campout = $resouce('/campouts/:campoutId', {campoutId: '@id'});

}]);