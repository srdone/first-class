angular.module('firstClass').config(['$mdIconProvider', function($mdIconProvider) {

  $mdIconProvider
    .icon('requirements:camping'            , 'shared/icons/svg/tent8.svg')
    .icon('requirements:cooking'              , 'shared/icons/svg/barbecue5.svg')
    .icon('requirements:ropes and knots'      , 'shared/icons/svg/rope2.svg')
    .icon('requirements:hiking'               , 'shared/icons/svg/hiking2.svg')
    .icon('requirements:citizenship'          , 'shared/icons/svg/american18.svg')
    .icon('requirements:safety'               , 'shared/icons/svg/shield113.svg')
    .icon('requirements:fitness'              , 'shared/icons/svg/flexions.svg')
    .icon('requirements:first aid'            , 'shared/icons/svg/aid.svg')
    .icon('requirements:review'               , 'shared/icons/svg/review2.svg')
    .icon('requirements:rank'                 , 'shared/icons/svg/grade13.svg')
    .icon('requirements:joining'              , 'shared/icons/svg/arrow498.svg')
    .icon('requirements:map and compass'      , 'shared/icons/svg/map32.svg')
    .icon('requirements:participation'        , 'shared/icons/svg/man204.svg')
    .icon('requirements:fire and stoves'      , 'shared/icons/svg/fire4.svg')
    .icon('requirements:knives'               , 'shared/icons/svg/swiss.svg')
    .icon('requirements:nutrition'            , 'shared/icons/svg/healthy-food4.svg')
    .icon('requirements:swimming'             , 'shared/icons/svg/person228.svg')
    .icon('requirements:personal management'  , 'shared/icons/svg/planning.svg')
    .icon('requirements:plants and animals'   , 'shared/icons/svg/deer4.svg')
    .icon('requirements:service'              , 'shared/icons/svg/worker20.svg')
    .icon('requirements:scout facts'          , 'shared/icons/svg/human45.svg')
    .icon('requirements:service hours'        , 'shared/icons/svg/cement.svg')
    .icon('requirements:nights of camping'    , 'shared/icons/svg/camping2.svg');

  $mdIconProvider
    .icon('badges:oa member'                  , 'shared/icons/oa_pocket_device.svg');

  $mdIconProvider
    .icon('actions:edit'                      , 'bower_components/material-design-icons/editor/svg/design/ic_mode_edit_48px.svg')
    .icon('actions:delete'                    , 'bower_components/material-design-icons/action/svg/production/ic_delete_48px.svg')

}]);