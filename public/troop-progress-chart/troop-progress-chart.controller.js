angular.module('firstClass').controller('TroopProgressChartController', ['$timeout', '$scope', '$element', function ($timeout, $scope, $element) {

  var vm = this;

  var svg = d3.select($element[0])
    .append('svg')
    .attr('width', vm.width)
    .attr('height', vm.height);

  var progress = vm.troop.map(function (currentScout) {
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

  vm.dataset = {
    data: data,
    labels: labels
  };

  var barPadding = 1;

  svg.selectAll('rect')
    .data(vm.dataset.data)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
      return i * (vm.width / vm.dataset.data.length)
    })
    .attr('y', function (d) {
      return vm.height - d;
    })
    .attr('width', (vm.width / vm.dataset.data.length) - barPadding)
    .attr('height', function (d) {
      return d
    });


}]);