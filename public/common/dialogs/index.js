import campoutDialogService from './campout-dialog/campout-dialog.service';
import './date-dialog/date-dialog.service';
import './position-dialog/position-dialog.service';
import './requirement-dialog/requirement-dialog.service';
import './scout-dialog/scout-dialog.service';
import './scout-list-dialog/scout-list-dialog.service';
import './service-project-dialog/service-project-dialog.service';

import './date-dialog/date-dialog.controller';
import './position-dialog/position-dialog.controller';
import './requirement-dialog/requirement-dialog.controller';
import './scout-dialog/scout-dialog.controller';
import './scout-list-dialog/scout-list-dialog.controller';
import './service-project-dialog/service-project-dialog.controller';

import './select-detail-bottom-sheet/select-detail-bottom-sheet.controller';
import './select-detail-bottom-sheet/select-detail-bottom-sheet.service';

angular.module('firstClass')
  .factory('campoutDialogService', campoutDialogService);