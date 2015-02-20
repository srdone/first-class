angular.module('firstClass').directive('fcsNavbar', ['$rootScope', '$state', function($rootScope, $state) {
  return {
    templateUrl: 'js/directives/directive-templates/navbar.template.html',
    link: function ($scope, $element, $attributes) {
      $rootScope.$watch('username', function (newValue, oldValue) {
        $scope.username = newValue;
      });

      $scope.goHome = function () {
        if($rootScope.loggedIn) {
          $state.go('troop');
        } else {
          $state.go('main');
        }
      };
    }
  }
}]);