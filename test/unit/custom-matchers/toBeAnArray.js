beforeEach(function () {

  var matchers = {
    toBeAnArray: function toBeAnArray () {
      return {
        compare: function (actual) {
          return {
            pass: Array.isArray(actual)
          }
        }
      }
    }
  };

  jasmine.addMatchers(matchers);

});