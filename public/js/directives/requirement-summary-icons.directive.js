angular.module('firstClass').directive('fcsRequirementSummaryIcons', function () {

  return {
    scope: {
      reqCategoryCount: '='
    },
    templateUrl: 'js/directives/directive-templates/requirement-summary-icons.template.html',
    link: function ($scope, $element, $attributes) {
      var icons = {};

      icons['camping'] = 'icons/svg/tent8.svg';
      icons['cooking'] = 'icons/svg/barbecue5.svg';
      icons['ropes and knots'] = 'icons/svg/rope2.svg';
      icons['hiking'] = 'icons/svg/hiking2.svg';
      icons['citizenship'] = 'icons/svg/american18.svg';
      icons['safety'] = 'icons/svg/shield113.svg';
      icons['fitness'] = 'icons/svg/flexions.svg';
      icons['first aid'] = 'icons/svg/aid.svg';
      icons['review'] = 'icons/svg/review2.svg';
      icons['rank'] = 'icons/svg/grade13.svg';
      icons['joining'] = 'icons/svg/arrow498.svg';
      icons['map and compass'] = 'icons/svg/map32.svg';
      icons['participation'] = 'icons/svg/man204.svg';
      icons['fire and stoves'] = 'icons/svg/fire4.svg';
      icons['knives'] = 'icons/svg/swiss.svg';
      icons['nutrition'] = 'icons/svg/healthy-food4.svg';
      icons['swimming'] = 'icons/svg/person228.svg';
      icons['personal management'] = 'icons/svg/planning.svg';
      icons['plants and animals'] = 'icons/svg/deer4.svg';
      icons['service'] = 'icons/svg/worker20.svg';
      icons['scout facts'] = 'icons/svg/human45.svg'

      $scope.icons = icons;

      if (_.isEmpty($scope.reqCategoryCount)) {
        $element.hide();
      }
    }
  }

});