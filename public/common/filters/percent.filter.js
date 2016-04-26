import angular from 'angular';

angular.module('firstClass').filter('percent', function () {

  return function (input) {
    var rounded = Math.round(input * 100);
    return (rounded + '%');
  };

});