import _ from 'lodash';

export { RequirementDialogController as default };

RequirementDialogController.$inject = ['$mdDialog', 'existingRequirements', '$timeout'];
function RequirementDialogController($mdDialog, existingRequirements, $timeout) {

    var vm = this;
    vm.returnAllSelections = returnAllSelections;
    vm.returnChangedSelections = returnChangedSelections;
    vm.cancel = $mdDialog.cancel;
    
    // wait to run _init until controller has instantiated. Otherwise bindToController hasn't yet run
    $timeout(_init.bind(this), 4);
    
    /*============Functions============*/

    function returnAllSelections() {
      $mdDialog.hide(_getAllSelected());
    }

    function returnChangedSelections() {
      var wasPreSelected = _getWasPreSelected();

      var added = _.difference(_getAllSelected(), wasPreSelected);
      var removed = _.intersection(_getNotSelected(), wasPreSelected);

      $mdDialog.hide({
        added: added,
        removed: removed
      });
    };

    function _init() {
      existingRequirements.forEach(_clearRequirementSelections);

      var categories = existingRequirements.map((req) => req.category);

      vm.categories = _.uniq(categories);

      if (vm.preSelectedRequirements.length) {
        vm.preSelectedRequirements.forEach(_markAsSelected);
      }
    };
    
    function _clearRequirementSelections (currentRequirement) {
        if (currentRequirement.isSelected) {
          delete currentRequirement.isSelected;
        }
    }
    
    function _markAsSelected(current) {
        var index = _.findIndex(existingRequirements, _.matches({id: current.id}));

        existingRequirements[index].isSelected = true;
        existingRequirements[index].wasPreSelected = true;
    }

    function _getAllSelected() {
      return _.filter(existingRequirements, 'isSelected');
    };

    function _getNotSelected() {
      return _.filter(existingRequirements, req => !req.isSelected);
    };

    function _getWasPreSelected() {
      return _.filter(existingRequirements, 'wasPreSelected');
    };

  }