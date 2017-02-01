(function () {

  angular
    .module('firstClass')
    .component('fcsMakeEditable', {
      controller: FCSMakeEditableComponent,
      templateUrl: 'common/components/make-editable/fcs-make-editable.component.html',
      bindings: {
        ariaDescription: '@',
        delete: '&',
        edit: '&',
        item: '<',
        editTakesEvents: '&',
        deleteTakesEvents: '&'
      },
      transclude: true
    });

  FCSMakeEditableComponent.$inject = ['$parse', '$log', '$element'];

  /* @ngInject */
  function FCSMakeEditableComponent($parse, $log, $element) {
    /* jshint validthis: true */
    var $ctrl = this;

    /* Public Properties */
    $ctrl.canEdit = false;
    $ctrl.canDelete = false;

    /* Lifecycle Hooks */
    $ctrl.$onInit = $onInit;

    /* Public Functions */
    $ctrl.deleteFunction = deleteFunction;
    $ctrl.editFunction = editFunction;
    
    /* Private Functions */
    $ctrl._checkForAccessibility = _checkForAccessibility;

    function $onInit() {
      $ctrl.deleteTakesEvents = $parse($ctrl.deleteTakesEvents)();
      $ctrl.editTakesEvents = $parse($ctrl.editTakesEvents)();
      $ctrl.delete = $parse($ctrl.delete)();
      $ctrl.edit = $parse($ctrl.edit)();
      $ctrl.canEdit = $ctrl.edit ? true : false;
      $ctrl.canDelete = $ctrl.delete ? true : false;
      $ctrl._checkForAccessibility();
    }

    function deleteFunction ($event) {
      if ($ctrl.deleteTakesEvents) {
        $ctrl.delete($event, $ctrl.item);
      } else {
        $ctrl.delete($ctrl.item);
      }
    }

    function editFunction (event) {
      if ($ctrl.editTakesEvents) {
        $ctrl.edit(event, $ctrl.item);
      } else {
        $ctrl.edit($ctrl.item);
      }
    }

    function _checkForAccessibility () {
      if (!$ctrl.ariaDescription) {
        $log.warn('ARIA: attribute " aria-description ", required for accessibility, is missing on node:');
        $log.log($element[0]);
      }
    }

  }

}());