(function () {
'use strict';

	angular
		.module('firstClass')
		.component('fcsScoutCard', {
			controller: FCSScoutCardComponent,
			templateUrl: 'scout/fcs-scout-card.component.html',
    	transclude: true,
			bindings: {
				scout: '<'
			}
		})

	FCSScoutCardComponent.$inject = [];

	function FCSScoutCardComponent() {}

})();