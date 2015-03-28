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

  it('should have a Scout property', function () {
    Scout = scoutObjectService.Scout;

    expect(Scout).toBeDefined();
  });

  describe('the scout property', function () {
    var scout;

    it('should be a function', function () {
      expect(Scout).toBeAFunction();
    });

    //beforeEach(function () {
    //  scout = new scoutObjectService.Scout;
    //});

  });

});