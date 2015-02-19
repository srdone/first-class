angular.module('firstClass').directive('fcsShowOnLogin', ['$rootScope', function ($rootScope) {

  return {
    restrict: 'A',
    link: function ($scope, $element, $attributes) {
      $rootScope.$watch('loggedIn', function (newValue, oldValue) {
        if (newValue) {
          $element.removeClass('hidden');
        } else {
          $element.addClass('hidden');
        }
      });
    }
  }

}]);