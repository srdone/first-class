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

      var renderChart = function () {
        var progress = $scope.troop.map(function (currentScout) {
          var name = currentScout.getName();
          var percentProgress = currentScout.getPercentProgressToFirstClass();

          return {
            name: name,
            percentProgress: percentProgress
          };
        });

        var data = progress.map(function (currentScout) {
          return currentScout.percentProgress * 100;
        });

        var labels = progress.map(function (currentScout) {
          return currentScout.name;
        });

        svg.selectAll('rect')
          .data(data)
          .enter()
          .append('rect')
          .attr('x', function (d, i) {
            return i * ($scope.width / data.length)
          })
          .attr('y', function (d) {
            return $scope.height - d;
          })
          .attr('width', ($scope.width / data.length) - barPadding)
          .attr('height', function (d) {
            return d
          });
      };

      $scope.$watch('troop', function () {
        renderChart();
      }, true);
    }
  }

});