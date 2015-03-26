angular.module('firstClass').directive('fcsTroopProgressChart', function () {

  return {
    restrict: 'E',
    scope: {
      troop: '=',
      height: '@',
      width: '@'
    },
    template: '<canvas id="troop-progress-chart" width="225" height="300"></canvas>',
    link: function ($scope, $element) {

      var ctx = document.getElementById('troop-progress-chart').getContext('2d');

      var barChart = new Chart(ctx);

      var renderChart = function () {

        var progress = $scope.troop.map(function (currentScout) {
          var name = currentScout.getName();
          var percentProgress = currentScout.getPercentProgressToFirstClass() * 100;
          var serviceHours = currentScout.getHoursOfService();

          return {
            name: name,
            percentProgress: percentProgress,
            serviceHours: serviceHours
          }
        });

        var totalProgress = progress.reduce(function (previous, currentScout) {
          return previous += currentScout.percentProgress;
        }, 0);

        var totalServiceHours = progress.reduce(function (previous, currentScout) {
          return previous += currentScout.percentProgress;
        }, 0);

        var troopPercentProgress = Math.round(totalProgress / progress.length);

        var dataset = {
          labels: ['Troop Progress'],
          datasets: [
            {
              fillColor: "rgba(0, 150, 136, 0.5)",
              strokeColor: "rgba(0, 150, 136, 0.8)",
              highlightFill: "rgba(0, 150, 136, 0.75)",
              highlightStroke: "rgba(0, 150, 136, 1)",
              label: 'Troop Progress %',
              data: [troopPercentProgress]
            }
          ]
        };

        var options = {
          tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>%",
          scaleLabel: "<%=value%>%",
          scaleOverride: true,
          scaleSteps: 5,
          scaleStepWidth: 20,
          scaleStartValue: 0
        };

        barChart.Bar(dataset, options);
      };

      $scope.$watch('troop', function (newValue) {
        if (newValue) {
          renderChart();
        }
      }, true);
    }
  }

});