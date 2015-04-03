describe('the troopService', function () {
  var troopService;

  beforeEach(module('firstClass'));

  beforeEach(inject(function(_troopService_) {
    troopService = _troopService_;
  }));

  it('should have a troop array', function () {
    console.log(troopService);

    expect(troopService.troop).toBeDefined();
    expect(troopService.troop).toBeAnArray();
  });

  it('should have a function to add a scout', function () {

    expect(troopService.addScout).toBeAFunction();
  });

  describe('the addScout function', function () {
    console.log(troopService);
    var troop;
    var scout;

    beforeEach(function () {
      scout = {};
      troop = troopService.troop;
      troopService.addScout(scout);
    });

    it('should allow you to add a scout to the list', function () {

      expect(troop).toContain(scout);
    });

    it('should not allow you to add the same scout twice', function () {
      troopService.addScout(scout);

      expect(troop.length).toBe(1);
    });
  });

});