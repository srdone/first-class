angular.module('firstClass').factory('scoutModelService', ['$resource', 'campoutModel', function ($resource, campoutModel) {

  var Scout = $resource('/scouts/:scoutId', {scoutId: '@id'});

  var getCurrentRank = function() {
    $log.debug('called scoutObjectService.getCurrentRank');
    return requirementService.getCurrentRank(this._completedReqs);
  };

  var getQualifiedNightsOfCamping = function() {

    var longestLTC;
    // changed to filter from map - map leaves spaces in the resulting array
    // see http://stackoverflow.com/questions/9289/removing-elements-with-array-map-in-javascript
    var filteredCampouts = this._campingHistory.filter(function (element) {
      // include if it is less than 5 nights long
      // this is the definition of a 'short term camp'
      // see http://blog.scoutingmagazine.org/2012/06/07/ask-the-expert-interpreting-camping-merit-badge-requirement-9a/
      if ( dateService.diff(element.start, element.end) < 5 ) {
        return element;
      } else {
        // include one long term camp
        // replace the current value for the longestLTC if current is longer
        // or if longestLTC isn't set
        if (!longestLTC ||
          (dateService.diff(longestLTC.start, longestLTC.end) <
          dateService.diff(element.start, element.end))) {
          longestLTC = element;
        }
      }
    });
    //add in the one qualified campout - if it exists
    if (longestLTC) {
      filteredCampouts.push(longestLTC);
    }

    var totalQualifiedNights = filteredCampouts.reduce(function (previous, current) {
      return previous += dateService.diff(current.start, current.end);
    }, 0);
    return totalQualifiedNights;
  };

  var isOAQualified = function() {
    return this.isFirstClass() && this.getQualifiedNightsOfCamping() >= 15;
  };

  var isFirstClass = function () {
    return (this.getCurrentRank().name === 'first class');
  };

  var addCampout = function(desc, start, end) {
    var campout = new Camping(undefined, desc, start, end);
    this._campingHistory.push(campout);
    return campout;
  };

  angular.extend(Scout.prototype,
    getCurrentRank,
    getQualifiedNightsOfCamping,
    isOAQualified,
    isFirstClass,
    addCampout);

  return Scout;

}]);