describe('scoutObjectService', function () {
  var scoutObjectService;
  var requirementServiceMock = {};
  var dateServiceMock = {};
  var utilServiceMock = {};
  var persistenceServiceMock = {};
  var logMock = {};

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

  it('should have a scout property', function () {
    var scout = scoutObjectService.Scout;

    expect(scout).toBeDefined();
  });

});