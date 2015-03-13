'use strict';

var app = angular.module('firstClass');

app.controller('ScoutController', ['$scope', 'scoutService', 'scout', '$mdBottomSheet', 'requirementService', '$mdDialog', '$filter', '$mdToast',
	function ($scope, scoutService, scout, $mdBottomSheet, requirementService, $mdDialog, $filter, $mdToast) {

		$scope.scout = scout;

    var warningDialog = $mdDialog.confirm().title('Warning').ok('Yes').cancel('Cancel');

    $scope.openAddScoutDetailsSheet = function () {
      $mdBottomSheet.show({
        templateUrl: 'scout/add-details/add-details.bottom-sheet.html',
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
        templateUrl: 'scout/edit-scout/edit-scout.bottom-sheet.html',
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
        $scope.scout.save()
          .then(function () {
            $mdToast.showSimple('Deleted requirement and its dependents: ' + completedRequirement.requirement.name);
          }, function () {
            $scope.scout.addRequirement(completedRequirement.requirement);
            $mdToast.showSimple('A server error occurred: Failed to delete requirement');
          });
      });
    };

    $scope.deleteCampout = function (campout) {
      var dialog = warningDialog.content('Delete campout record: ' + campout.description + ': ' +
        $filter('date')(campout.start, 'shortDate') + '-' + $filter('date')(campout.end, 'shortDate') + '?');

      $mdDialog.show(dialog).then(function () {
        $scope.scout.removeCampout(campout.id);
        $scope.scout.save()
          .then(function () {
            $mdToast.showSimple('Deleted campout: ' + campout.toString());
          }, function () {
            $scope.scout.addCampout(campout);
            $mdToast.showSimple('A server error occurred: Failed to delete campout');
          });
      });
    };

    $scope.deleteService = function (service) {
      var dialog = warningDialog.content('Delete service record: ' + service.description + ': ' + service.hours + ' hours?');

      $mdDialog.show(dialog).then(function () {
        $scope.scout.removeService(service.id);
        $scope.scout.save()
          .then(function () {
            $mdToast.showSimple('Deleted service project: ' + service.toString());
          }, function () {
            $scope.scout.addService(service);
            $mdToast.showSimple('A server error occurred: Failed to delete service project');
          });
      });
    };

    $scope.deletePosition = function (position) {
      var dialog = warningDialog.content('Delete position record: ' + position.title + ': ' +
        $filter('date')(position.start, 'shortDate') + '-' + $filter('date')(position.end, 'shortDate') + '?');

      $mdDialog.show(dialog).then(function () {
        $scope.scout.removePosition(position.id);
        $scope.scout.save()
          .then(function () {
            $mdToast.showSimple('Deleted position: ' + position.toString());
          }, function () {
            $scope.scout.addPosition(position);
            $mdToast.showSimple('A server error occurred: Failed to delete position');
          });
      });
    };

    $scope.updateScout = function () {
      $scope.scout.save();
    };

	}]);