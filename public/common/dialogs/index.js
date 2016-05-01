import angular from 'angular';

import campoutDialogService from './campout-dialog/campout-dialog.service';
import dateDialogService from './date-dialog/date-dialog.service';
import positionDialogService from './position-dialog/position-dialog.service';
import requirementDialogService from './requirement-dialog/requirement-dialog.service';
import scoutDialogService from './scout-dialog/scout-dialog.service';
import scoutListDialogService from './scout-list-dialog/scout-list-dialog.service';
import serviceProjectDialogService from './service-project-dialog/service-project-dialog.service';
import selectDetailBottomSheetService from './select-detail-bottom-sheet/select-detail-bottom-sheet.service';

angular.module('firstClass')
  .factory('campoutDialogService', campoutDialogService)
  .factory('dateDialogService', dateDialogService)
  .factory('positionDialogService', positionDialogService)
  .factory('requirementDialogService', requirementDialogService)
  .factory('scoutDialogService', scoutDialogService)
  .factory('scoutListDialogService', scoutListDialogService)
  .factory('serviceProjectDialogService', serviceProjectDialogService)
  .factory('selectDetailBottomSheetService', selectDetailBottomSheetService);