'use strict';	

var app = angular.module('firstClass');

app.factory('scoutObjectService', ['dateService', 'utilService', 'persistenceService',
	function (dateService, utilService, persistenceService) {
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

	    var _tempUserImage = 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg';

	    this.id = id || utilService.createUUID();
	    this.firstName = firstName || '';
	    this.lastName = lastName || '';
	    this.currentPatrol = currentPatrol || '';
	    this.troop = '154';
	    this.photoUrl = photoUrl || _tempUserImage;
	    this.isOA = isOA === undefined ? false : isOA;
	    this._completedReqs = completedReqs || [];
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
	  /**
	  * @ngdoc function
	  * @name firstClassApp.ScoutService.Scout.prototype.currentPositions
	  * @description
	  * # Scout.prototype.currentPositions
	  * Takes the private variable _positionHistory and compares the dates of the
	  * history to the date provided and returns a list of positions that the scout held
	  * on that date.
	  *
	  * @param {Date} date The date to compare positions against
	  * @returns {Array<Position>} Array of positions the Scout currently holds
	  */
	  Scout.prototype.getCurrentPositions = function(date) {
	    var currentPos = [];
	    var currentDate = date || new Date();
	    for (var i = 0; i < this._positionHistory.length; i++) {
	      if (!this._positionHistory[i].end) {
	        currentPos.push(this._positionHistory[i]);
	      } else if (dateService.inRange(currentDate, this._positionHistory[i].start,
	                                           this._positionHistory[i].end)) {
	        currentPos.push(this._positionHistory[i]);
	      }
	    }
	    return currentPos;
	  };
	  /**
	  * @ngdoc function
	  * @name firstClassApp.ScoutService.Scout.prototype.hoursOfService
	  * @description
	  * # Scout.prototype.hoursOfService
	  * Returns the total hours of service based on _serviceHistory
	  *
	  * @returns {Number} Total number of hours of service
	  */
	  Scout.prototype.getHoursOfService = function() {
	    var totalHrs = this._serviceHistory.reduce(function(previous, current) {
	      return previous += current.hours;
	    }, 0);
	    return totalHrs;
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
	  Scout.prototype.addCamping = function(desc, start, end) {
	    var camping = new Camping(desc, start, end);
	    this._campingHistory.push(camping);
	    return camping;
	  };
	  Scout.prototype.removeCamping = function (id) {
	    for (var i = 0; i < this._campingHistory.length; i++) {
	      if (this._campingHistory[i].id === id) {
	        this._campingHistory.splice(i, 1);
	        return true;
	      }
	    }
	    return false;
	  };
	  Scout.prototype.addPosition = function (title, start, end) {
	    var position = new Position(title, start, end);
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
	    Scout.prototype.getCompletedRequirements = function () {
	      return this._completedReqs;
	    };
	    Scout.prototype.getPercentProgressToNextRank = function () {
	    	return Math.random() * 100;
	    };
	    Scout.prototype.getNeededRequirementCategories = function () {
	    	return [
	    		{title: 'test data', color: 'blue'},
					{title: 'knots', color: 'brown'},
					{title: 'camping', color: 'green'},
					{title: 'first-aid', color: 'red'}
				]
	    };
	    Scout.prototype.getMeritBadgeCount = function () {
	    	return Math.floor( Math.random() * 30 );
	    };
	    Scout.prototype.summarize = function () {
	    	return {
	    		id: this.id,
					firstName: this.firstName,
					lastName: this.lastName,
					photoUrl: this.photoUrl,
					currentRank: this.getCurrentRank(),
					currentPatrol: this.currentPatrol,
					currentPositions: this.getCurrentPositions(),
					isOA: this.isOA,
					isOAQualified: this.isOAQualified,
					qualifiedNightsOfCamping: this.getQualifiedNightsOfCamping(),
					hoursOfService: this.getHoursOfService(),
					percentProgressToNextRank: this.getPercentProgressToNextRank(),
					neededRequirementCategories: this.getNeededRequirementCategories(),
					numberOfMeritBadges: this.getMeritBadgeCount(),
					troop: this.troop
	    	}
	    }

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