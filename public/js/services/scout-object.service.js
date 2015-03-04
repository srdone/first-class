'use strict';	

var app = angular.module('firstClass');

app.factory('scoutObjectService', ['requirementService', 'dateService', 'utilService', 'persistenceService', '$log',
	function (requirementService, dateService, utilService, persistenceService, $log) {

    var tempNeededReqs = [
        {title: 'test data', color: 'blue'},
        {title: 'knots', color: 'brown'},
        {title: 'camping', color: 'green'},
        {title: 'first-aid', color: 'red'}
      ];
	  /**
	  * @ngdoc function
	  * @name firstClassApp.ScoutService.Scout
	  * @description
	  * # Scout object
	  *
	  * All parameters are optional
	  * Creates a new scout with various parameters
	  *
	  * @param {String} firstName First name of scout
	  * @param {String} lastName Last name of scout
	  * @param {String} currentPatrol Title of the current patrol
	  * @param {boolean} isOA Whether the scout is a member of the Order of the Arrow
	  * @param {Array<Requirement>} completedReqs A list of all the requirements a scout has completed
	  * @param {Array<Position>} positionHistory A list of positions the scout has held in the troop
	  * @param {Array<Camping>} campingHistory A list of campouts the scout has attended
	  * @param {Array<Service>} serviceHistory A list of service projects the scout has participated in.
	  *
	  * @returns {Scout} A scout object
	  */
	  var Scout = function(id, firstName, lastName, photoUrl, isOA, completedReqs,
	  		currentPatrol, troop, positionHistory, campingHistory, serviceHistory) {

	  	var _convertServiceHistory = function (rawServiceArray) {
	    	return rawServiceArray.map(function (current) {
	    		return new Service(current.id, current.description, current.hours);
	    	});
	    };

	    var _convertCampingHistory = function (rawCampingArray) {
	    	return rawCampingArray.map(function (current) {
	    		return new Camping(current.id, current.description, current.start, current.end);
	    	});
	    };

	    var _convertPositionHistory = function (rawPositionArray) {
	    	return rawPositionArray.map(function (current) {
	    		return new Position(current.id, current.title, current.start, current.end);
	    	});
	    };

      var _convertCompletedRequirements = function (completedReqs) {
        $log.debug(completedReqs);
        return completedReqs.map(function (current) {
          return {
            requirement: new requirementService.Requirement(current.requirement),
            dateCompleted: current.dateCompleted
          };
        });
      };

	    var _tempUserImage = 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg';

	    this.id = id || utilService.createUUID();
	    this.firstName = firstName || '';
	    this.lastName = lastName || '';
	    this.currentPatrol = currentPatrol || '';
	    this.troop = '154';
	    this.photoUrl = photoUrl || _tempUserImage;
	    this.isOA = isOA === undefined ? false : isOA;
	    this._completedReqs = completedReqs ? _convertCompletedRequirements(completedReqs) : [];
	    this._positionHistory = positionHistory ? _convertPositionHistory(positionHistory) : [];
	    this._campingHistory = campingHistory ? _convertCampingHistory(campingHistory) : [];
	    this._serviceHistory = serviceHistory ? _convertServiceHistory(serviceHistory) : [];
	  };
	  Scout.prototype.save = function () {
	  	return persistenceService.saveScout(this);
	  };
	  /**
	  * @ngdoc function
	  * @name firstClassApp.ScoutService.Scout.prototype.currentRank
	  * @description
	  * # Scout.prototype.currentRank
	  *
	  * @returns {String} The current rank held by the scout
	  */
	  Scout.prototype.getCurrentRank = function() {
	      return 'Eagle';
	  };

	  Scout.prototype.getQualifiedNightsOfCamping = function() {

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
	  Scout.prototype.isOAQualified = function() {
	    return this.isFirstClass() && this.getQualifiedNightsOfCamping() >= 15;
	  };
	  //returns true if the scout is at least first class
	  Scout.prototype.isFirstClass = function () {
	    return true;
	  };
	  Scout.prototype.addCampout = function(desc, start, end) {
	    var camping = new Camping(undefined, desc, start, end);
	    this._campingHistory.push(camping);
	    return camping;
	  };
	  Scout.prototype.removeCampout = function (id) {
	    for (var i = 0; i < this._campingHistory.length; i++) {
	      if (this._campingHistory[i].id === id) {
	        this._campingHistory.splice(i, 1);
	        return true;
	      }
	    }
	    return false;
	  };
    Scout.prototype.getCamping = function () {
      return this._campingHistory;
    };
	  Scout.prototype.addPosition = function (title, start, end) {
	    var position = new Position(undefined, title, start, end);
	    this._positionHistory.push(position);
	    return position;
	  };
	  Scout.prototype.removePosition = function (id) {
	    for (var i = 0; i < this._positionHistory.length; i++) {
	      if (this._positionHistory[i].id === id) {
	        this._positionHistory.splice(i, 1);
	        return true;
	      }
	    }
	    return false;
	  };
    Scout.prototype.getPositions = function () {
      return this._positionHistory;
    };
    Scout.prototype.getCurrentPositions = function () {
      return this._positionHistory.filter(function (element, index, array) {
        var end = element.end || Date.now();
        return dateService.inRange(Date.now(), element.start, end);
      });
    };
	  Scout.prototype.addService = function (description, hours) {
	    var service = new Service(undefined, description, hours);
	    this._serviceHistory.push(service);
	    return service;
	  };
	  Scout.prototype.removeService = function (id) {
	    for (var i = 0; i < this._serviceHistory.length; i++) {
	      if (this._serviceHistory[i].id === id) {
	        this._serviceHistory.splice(i, 1);
	        return true;
	      }
	    }
	    return false;
	  };
    Scout.prototype.getService = function () {
      return this._serviceHistory;
    };
    Scout.prototype.getHoursOfService = function () {
      return this._serviceHistory.reduce(function (prev, curr) {
        return prev += curr.hours;
      }, 0);
    };
    Scout.prototype.completedRequirementDateById = function (id) {
      for (var i = 0; i < this._completedReqs.length; i++) {
        if (this._completedReqs[i].requirement.id === id) {
          return this._completedReqs[i].dateCompleted;
        }
      }
      return false;
    };
    Scout.prototype.addRequirement = function (requirement) {
      if (!this.completedRequirementDateById(requirement.id)) {
        this._completedReqs.push({requirement: requirement, dateCompleted: Date.now()});
      }
    };
    Scout.prototype.removeRequirementById = function (id) {
      $log.debug('Removing: ' + id);
      $log.debug('Completed requirements: ');
      $log.debug(this._completedReqs);
      for (var i = 0; i < this._completedReqs.length; i++) {
        $log.debug(this._completedReqs[i].requirement.id);
        if (this._completedReqs[i].requirement.id === id) {
          var deleted = this._completedReqs.splice(i, 1);
          $log.debug('Deleted: ' + deleted);
          return true;
        }
      }
      $log.debug('Could not find a requirement to delete');
      return false;
    };
	    Scout.prototype.getCompletedRequirements = function () {
	      return this._completedReqs;
	    };
	    Scout.prototype.getPercentProgressToNextRank = function () {
        // TODO: calculate this off of requirements
	    	return 30;
	    };
	    Scout.prototype.getNeededRequirementCategories = function () {
        // TODO: calculate these off the requirements list
	    	return tempNeededReqs;
	    };
	    Scout.prototype.getMeritBadgeCount = function () {
	    	return 20;
	    };

	  var Position = function (id, title, start, end) {
	    this.id = id || utilService.createUUID();
	    this.title = title || '';
	    this.start = dateService.convert(start);
	    this.end = !end ? null : dateService.convert(end);
	  };
	  /**
	  * @ngdoc function
	  * @name firstClassApp.ScoutService.Scout.prototype.monthsInPostition
	  * @description
	  * # Scout.prototype.monthsInPosition
	  * Takes the internal _positionHistory calculates the number of months
	  * the scout has held the current position. Months is based on 30 day months.
	  * Treats null end dates as the current date. Rounds down to most recent month
	  *
	  * @returns {Number} Number of months rounded to nearest whole number
	  */
	  Position.prototype.monthsInPosition = function() {
	    var start = this.start;
	    var end = this.end || new Date(); // replaces null end date with current date.
	    return Math.floor((end - start) / ( 1000 * 60 * 60 * 24 * 30 ));
	  };

	  var Service = function (id, description, hours) {
	    this.id = id || utilService.createUUID();
	    this.description = description;
	    this.hours = hours;
	  };
	   
	  var Camping = function (id, description, start, end) {
	    this.id = id || utilService.createUUID();
	    this.description = description;
	    this.start = dateService.convert(start);
	    this.end = dateService.convert(end);
	  };

	  return {
	  	Scout: Scout
	  };
	}]);