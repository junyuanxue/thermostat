describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('#temperature', function() {
    it('default temperature 20', function() {
      expect(thermostat.temperature).toEqual(20);
    });
});
});
