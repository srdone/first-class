'use strict';

var app = angular.module('firstClass');

app.controller('ScoutController', ['$scope', 'scoutService', 'scout', '$mdBottomSheet', 'requirementService', '$mdDialog', '$filter', '$state',
	function ($scope, scoutService, scout, $mdBottomSheet, requirementService, $mdDialog, $filter, $state) {

		$scope.scout = scout;

    var warningDialog = $mdDialog.confirm().title('Warning').ok('Yes').cancel('Cancel');

    $scope.openAddScoutDetailsSheet = function () {
      $mdBottomSheet.show({
        templateUrl: 'js/bottom-sheets/add-details.bottom-sheet.html',
        controller: 'AddDetailsSheetController',
        resolve: {
          scout: function () {
            return $scope.scout;
          },
          requirements: function () {
            return $scope.scout.getMissingRequirements();
          }
        }
      });
    };

    $scope.editScout = function () {
      $mdBottomSheet.show({
        templateUrl: 'js/bottom-sheets/edit-scout.bottom-sheet.html',
        controller: 'EditScoutSheetController',
        resolve: {
          editingScout: function () {
            return angular.copy($scope.scout);
          }
        }
      }).then(function (scout) {
        $scope.scout = scout;
        $scope.scout.save();
      })
    };

    $scope.deleteRequirement = function(completedRequirement) {
      var dialog = warningDialog.content('Delete requirement ' + completedRequirement.requirement.name + ' and all parents?');

      $mdDialog.show(dialog).then(function () {
        $scope.scout.removeRequirementById(completedRequirement.requirement.id);
        $scope.scout.save().then(null, function () {
          $scope.scout.addRequirement(completedRequirement.requirement);
        });
      });
    };

    $scope.deleteCampout = function (campout) {
      var dialog = warningDialog.content('Delete campout record: ' + campout.description + ': ' +
        $filter('date')(campout.start, 'shortDate') + '-' + $filter('date')(campout.end, 'shortDate') + '?');

      $mdDialog.show(dialog).then(function () {
        $scope.scout.removeCampout(campout.id);
        $scope.scout.save();
      });
    };

    $scope.deleteService = function (service) {
      var dialog = warningDialog.content('Delete service record: ' + service.description + ': ' + service.hours + ' hours?');

      $mdDialog.show(dialog).then(function () {
        $scope.scout.removeService(service.id);
        $scope.scout.save();
      });
    };

    $scope.deletePosition = function (position) {
      var dialog = warningDialog.content('Delete position record: ' + position.title + ': ' +
        $filter('date')(position.start, 'shortDate') + '-' + $filter('date')(position.end, 'shortDate') + '?');

      $mdDialog.show(dialog).then(function () {
        $scope.scout.removePosition(position.id);
        $scope.scout.save();
      });
    };

    $scope.updateScout = function () {
      $scope.scout.save();
    };

	}]);