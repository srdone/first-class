(function () {

  angular
    .module('firstClass')
    .directive('fcsMakeEditable', MakeEditableDirective);

  function MakeEditableDirective () {

    return {
      restrict: 'E',
      transclude: true,
      scope: {
        ariaDescription: '@',
        delete: '&',
        edit: '&',
        item: '=',
        editTakesEvents: '&',
        deleteTakesEvents: '&'
      },
      bindToController: true,
      controller: 'MakeEditableController',
      controllerAs: 'vm',
      templateUrl: 'common/directives/make-editable/make-editable.template.html'
    }

  }

}());