angular.module('firstClass').directive('fcsRequirementSummaryIcons', function () {

  return {
    scope: {
      reqCategoryCount: '='
    },
    templateUrl: 'rank-requirements/requirement-summary-icons.template.html',
    link: function ($scope, $element, $attributes) {
      var icons = {};

      icons['camping']              = 'shared/icons/svg/tent8.svg';
      icons['cooking']              = 'shared/icons/svg/barbecue5.svg';
      icons['ropes and knots']      = 'shared/icons/svg/rope2.svg';
      icons['hiking']               = 'shared/icons/svg/hiking2.svg';
      icons['citizenship']          = 'shared/icons/svg/american18.svg';
      icons['safety']               = 'shared/icons/svg/shield113.svg';
      icons['fitness']              = 'shared/icons/svg/flexions.svg';
      icons['first aid']            = 'shared/icons/svg/aid.svg';
      icons['review']               = 'shared/icons/svg/review2.svg';
      icons['rank']                 = 'shared/icons/svg/grade13.svg';
      icons['joining']              = 'shared/icons/svg/arrow498.svg';
      icons['map and compass']      = 'shared/icons/svg/map32.svg';
      icons['participation']        = 'shared/icons/svg/man204.svg';
      icons['fire and stoves']      = 'shared/icons/svg/fire4.svg';
      icons['knives']               = 'shared/icons/svg/swiss.svg';
      icons['nutrition']            = 'shared/icons/svg/healthy-food4.svg';
      icons['swimming']             = 'shared/icons/svg/person228.svg';
      icons['personal management']  = 'shared/icons/svg/planning.svg';
      icons['plants and animals']   = 'shared/icons/svg/deer4.svg';
      icons['service']              = 'shared/icons/svg/worker20.svg';
      icons['scout facts']          = 'shared/icons/svg/human45.svg';

      $scope.icons = icons;

      if (_.isEmpty($scope.reqCategoryCount)) {
        $element.hide();
      }
    }
  }

});