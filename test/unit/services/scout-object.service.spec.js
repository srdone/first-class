describe('scoutObjectService', function () {
  var scoutObjectService, Scout;
  var requirementServiceMock = {};
  var dateServiceMock = {};
  var utilServiceMock = {};
  var persistenceServiceMock = {};
  var logMock = {};

  utilServiceMock.createUUID = function () {
    return 'uuidString';
  };

  logMock.debug = function () {

  };

  requirementServiceMock.getCurrentRank = function () {

  };

  requirementServiceMock.getMissingRequirements = function () {
    return [];
  };

  beforeEach(module('firstClass'));

  beforeEach(module(function($provide) {
    $provide.value('requirementService', requirementServiceMock);
    $provide.value('dateService', dateServiceMock);
    $provide.value('utilService', utilServiceMock);
    $provide.value('persistenceService', persistenceServiceMock);
    $provide.value('$log', logMock);
  }));

  beforeEach(inject(function(_scoutObjectService_) {
    scoutObjectService = _scoutObjectService_;
  }));

  beforeEach(function () {
    Scout = scoutObjectService.Scout;
  });

  it('should have a Scout property', function () {
    expect(Scout).toBeDefined();
  });

  describe('the scout property', function () {

    it('should be a function', function () {
      expect(Scout).toBeAFunction();
    });

  });

  it('should have a CreateScout property', function () {

    expect(scoutObjectService.createScout).toBeDefined();
  });

  describe('the createScout property', function () {

    it('should be a function', function () {
      expect(scoutObjectService.createScout).toBeAFunction();
    });

    it('should return a Scout instance', function () {
      expect(scoutObjectService.createScout({})).toEqual(jasmine.any(Scout));
    });
  });

});