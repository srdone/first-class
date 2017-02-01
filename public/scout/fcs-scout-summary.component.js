(function () {
'use strict';

	angular
		.module('firstClass')
		.component('fcsScoutSummary', {
			controller: FCSScoutSummaryComponent,
			templateUrl: 'scout/fcs-scout-summary.component.html',
			bindings: {
				scout: '<'
			}
		})

  function FCSScoutSummaryComponent() {}

})();