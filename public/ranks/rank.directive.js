angular.module('firstClass').directive('fcsRank', function () {

  return {
    scope: {
      rank: '='
    },
    template: '<div class="rank">Current Rank: {{rank.name}}</div>'
  }

});