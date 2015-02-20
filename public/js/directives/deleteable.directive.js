angular.module('firstClass').directive('fcsDeleteable', [function () {

  return {
    restrict: 'A',
    link: function ($scope, $element, $attributes) {

      var deleteMe = function () {
        $scope[$attributes.fcsDeleteable].delete();
      };

      var deleteHook = $element.find('.delete-hook');

      var deleteImage = '<span class="glyphicon glyphicon-remove"></span>';

      if (deleteHook.length > 0) {
        deleteHook.html(deleteImage);
        deleteHook.on('click', deleteMe);
      } else {
        $element.append(deleteImage);
        $element.on('click', deleteMe);
      }

    }
  };

}]);