angular.module('firstClass').directive('fcsToggleOnLogin', ['$rootScope', function ($rootScope) {

  return {
    restrict: 'A',
    link: function ($scope, $element, $attributes) {
      // setting fcs-toggle-on-login to 'hide' causes the element to be hidden on login
      // without setting that value, defaults to hiding until logged in.

      var showOnLogin = true;

      if ($attributes.fcsToggleOnLogin === 'hide') {
        showOnLogin = false;
      }

      $rootScope.$watch('loggedIn', function (newValue, oldValue) {
        if (newValue === showOnLogin) {
          $element.removeClass('hidden');
        } else {
          $element.addClass('hidden');
        }
      });
    }
  }

}]);