beforeEach(function () {

  var matchers = {
    toBeAFunction: function toBeAFunction () {
      return {
        compare: function (actual) {
          return {
            pass: actual && {}.toString.call(actual) === '[object Function]'
          }
        }
      }
    }
  };

  jasmine.addMatchers(matchers);

});