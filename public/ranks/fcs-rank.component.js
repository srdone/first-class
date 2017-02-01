(function () {

  angular
    .module('firstClass')
    .component('fcsRank', {
      controller: FCSRankComponent,
      template: '<div class="rank">Current Rank: {{$ctrl.rank.name}}</div>',
      bindings: {
        rank: '<'
      }
    });

  FCSRankComponent.$inject = [];

  function FCSRankComponent() {}

})();