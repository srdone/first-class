import angular from 'angular';
import tpl from './campout-item.template.html!text';

angular
  .module('firstClass')
  .directive('fcsCampoutItem', CampoutItemDirective);

function CampoutItemDirective () {

  return {
    scope: {
      campout: '='
    },
    bindToController: true,
    controller: 'CampoutItemController',
    controllerAs: 'vm',
    template: tpl
  }

}
