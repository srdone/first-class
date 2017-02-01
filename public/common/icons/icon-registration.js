angular.module('firstClass').config(['$mdIconProvider', function($mdIconProvider) {

  $mdIconProvider
    .icon('requirements:camping'              , 'common/icons/svg/tent8.svg')
    .icon('requirements:cooking'              , 'common/icons/svg/barbecue5.svg')
    .icon('requirements:ropes and knots'      , 'common/icons/svg/rope2.svg')
    .icon('requirements:hiking'               , 'common/icons/svg/hiking2.svg')
    .icon('requirements:citizenship'          , 'common/icons/svg/american18.svg')
    .icon('requirements:safety'               , 'common/icons/svg/shield113.svg')
    .icon('requirements:fitness'              , 'common/icons/svg/flexions.svg')
    .icon('requirements:first aid'            , 'common/icons/svg/aid.svg')
    .icon('requirements:review'               , 'common/icons/svg/review2.svg')
    .icon('requirements:rank'                 , 'common/icons/svg/grade13.svg')
    .icon('requirements:joining'              , 'common/icons/svg/arrow498.svg')
    .icon('requirements:map and compass'      , 'common/icons/svg/map32.svg')
    .icon('requirements:participation'        , 'common/icons/svg/man204.svg')
    .icon('requirements:fire and stoves'      , 'common/icons/svg/fire4.svg')
    .icon('requirements:knives'               , 'common/icons/svg/swiss.svg')
    .icon('requirements:nutrition'            , 'common/icons/svg/healthy-food4.svg')
    .icon('requirements:swimming'             , 'common/icons/svg/person228.svg')
    .icon('requirements:personal management'  , 'common/icons/svg/planning.svg')
    .icon('requirements:plants and animals'   , 'common/icons/svg/deer4.svg')
    .icon('requirements:service'              , 'common/icons/svg/worker20.svg')
    .icon('requirements:scout facts'          , 'common/icons/svg/human45.svg')
    .icon('requirements:service hours'        , 'common/icons/svg/cement.svg')
    .icon('requirements:nights of camping'    , 'common/icons/svg/camping2.svg');

  $mdIconProvider
    .icon('badges:oa member'                  , 'common/icons/oa_pocket_device.svg');

  $mdIconProvider
    .icon('actions:edit'                      , 'lib/material-design-icons/editor/ic_mode_edit_48px.svg')
    .icon('actions:delete'                    , 'lib/material-design-icons/action/ic_delete_48px.svg')
    .icon('actions:add-person'                , 'lib/material-design-icons/social/ic_person_add_48px.svg')
    .icon('actions:batch-add'                 , 'lib/material-design-icons/av/ic_my_library_add_48px.svg')
    .icon('actions:go-back'                   , 'lib/material-design-icons/navigation/ic_arrow_back_48px.svg')
    .icon('actions:add-detail'                , 'lib/material-design-icons/content/ic_add_48px.svg')
    .icon('actions:show'                      , 'lib/material-design-icons/navigation/ic_expand_more_48px.svg');

  $mdIconProvider
    .icon('details:requirement'               , 'lib/material-design-icons/action/ic_assignment_48px.svg')
    .icon('details:campout'                   , 'lib/material-design-icons/image/ic_landscape_48px.svg')
    .icon('details:service'                   , 'lib/material-design-icons/editor/ic_format_paint_48px.svg')
    .icon('details:position'                  , 'lib/material-design-icons/social/ic_person_outline_48px.svg')

}]);