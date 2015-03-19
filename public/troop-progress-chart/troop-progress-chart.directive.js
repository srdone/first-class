angular.module('firstClass').directive('fcsTroopProgressChart', function () {

  return {
    restrict: 'E',
    scope: {
      troop: '=',
      height: '@',
      width: '@'
    },
    link: function ($scope, $element) {

      var svg = d3.select($element[0])
        .append('svg')
        .attr('width', $scope.width)
        .attr('height', $scope.height);

      var barPadding = 1;

      var yScale = d3.scale
        .linear()
        .domain([0, 1])
        .range([0, $scope.height]);

      var xScale = d3.scale
        .linear()
        .domain();

      var renderChart = function () {

        var dataset = $scope.troop.map(function (currentScout) {
          var name = currentScout.getName();
          var percentProgress = currentScout.getPercentProgressToFirstClass();

          return {
            name: name,
            percentProgress: percentProgress
          };
        });

        var rects = svg.selectAll('rect').data(dataset);

        // d3 is weird, you have to call enter and exit separately, then make changes.
        // otherwise you are only performing your changes to a subset of the data.
        rects.enter().append('rect');

        rects.exit().remove();

        rects.attr('x', function (d, i) { return i * ($scope.width / dataset.length); })
          .attr('y', function (d) { return $scope.height - yScale(d.percentProgress); })
          .attr('width', ($scope.width / dataset.length) - barPadding)
          .attr('height', function (d) {
            return yScale(d.percentProgress);
          });
      };

      $scope.$watch('troop', function () {
        renderChart();
      }, true);
    }
  }

});