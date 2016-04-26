import angular from 'angular';
import tpl from './make-editable.template.html!text';

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
      template: tpl
    }

  }
