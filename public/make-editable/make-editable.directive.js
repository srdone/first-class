(function () {

  angular
    .module('firstClass')
    .directive('fcsMakeEditable', MakeEditableDirective);

  function MakeEditableDirective () {

    return {
      transclude: true,
      scope: {
        description: '@',
        delete: '&',
        edit: '&',
        item: '=',
        editTakesEvents: '&',
        deleteTakesEvents: '&'
      },
      bindToController: true,
      controller: 'MakeEditableController',
      controllerAs: 'vm',
      templateUrl: 'make-editable/make-editable.template.html'
    }

  }

}());