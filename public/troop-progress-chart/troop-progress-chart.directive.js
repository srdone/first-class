angular.module('firstClass').directive('fcsTroopProgressChart', function () {

  return {
    restrict: 'E',
    scope: {
      troop: '=',
      height: '@',
      width: '@'
    },
    template: '<canvas id="troop-progress-chart" width="250" height="500"></canvas>',
    link: function ($scope, $element) {

      var ctx = document.getElementById('troop-progress-chart').getContext('2d');

      var barChart = new Chart(ctx);

      var renderChart = function () {

        var progress = $scope.troop.map(function (currentScout) {
          var name = currentScout.getName();
          var percentProgress = currentScout.getPercentProgressToFirstClass() * 100;

          return {
            name: name,
            percentProgress: percentProgress
          }
        });

        var totalProgress = progress.reduce(function (previous, currentScout) {
          return previous += currentScout.percentProgress;
        }, 0);

        var troopPercentProgress = (totalProgress / progress.length);

        var dataset = {
          labels: ['Troop Progress'],
          datasets: [
            {
              fillColor: "rgba(220,220,220,0.5)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              label: 'Percent Progress to First Class',
              data: [troopPercentProgress]
            }
          ]
        };
        debugger;

        barChart.Bar(dataset);
      };

      $scope.$watch('troop', function () {
        renderChart();
      }, true);
    }
  }

});