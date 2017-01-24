angular.module('firstClass').config(['$mdThemingProvider', function ($mdThemingProvider) {

  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('brown')
    .warnPalette('deep-orange');

}]);