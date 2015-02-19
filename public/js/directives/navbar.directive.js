angular.module('firstClass').directive('fcsNavbar', ['$rootScope', function($rootScope) {
  return {
    templateUrl: 'js/directives/directive-templates/navbar.template.html',
    link: function ($scope, $element, $attributes) {
      $rootScope.$watch('username', function (newValue, oldValue) {
        $scope.username = newValue;
      });
    }
  }
}]);