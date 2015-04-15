angular.module('firstClass').directive('fcsScoutProgressChart', function () {

  return {
    restrict: 'E',
    scope: {
      scout: '='
    },
    template: '<canvas id="scout-progress-chart" width="225" height="300"></canvas>',
    link: function ($scope, $element) {

      var ctx = document.getElementById('scout-progress-chart').getContext('2d');

      var barChart = new Chart(ctx);

      var renderChart = function () {

        var scoutPercentProgress = Math.round($scope.scout.getPercentProgressToFirstClass() * 100);

        var dataset = {
          labels: ['Scout Progress'],
          datasets: [
            {
              fillColor: "rgba(0, 150, 136, 0.5)",
              strokeColor: "rgba(0, 150, 136, 0.8)",
              highlightFill: "rgba(0, 150, 136, 0.75)",
              highlightStroke: "rgba(0, 150, 136, 1)",
              label: 'Scout Progress %',
              data: [scoutPercentProgress]
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

      $scope.$watch('scout', function (newValue) {
        if (newValue) {
          renderChart();
        }
      }, true);
    }
  }

});