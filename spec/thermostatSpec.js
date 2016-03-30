describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('#temperature adjusters', function() {

    it('temperature up increase temperature by 1', function(){
      thermostat.increaseTemperature()
      expect(thermostat.currentTemperature()).toEqual(21);
    })

    it('thermostat down decrease temperature by 1', function(){
      thermostat.decreaseTemperature()
      expect(thermostat.currentTemperature()).toEqual(19);
    })
  });


  describe ('#Default temps', function(){

    it('default temperature 20', function() {
      expect(thermostat.currentTemperature()).toEqual(20);
    });

    it('thermostat thows error if temp is less than 10', function(){
      spyOn(thermostat, 'currentTemperature').and.returnValue(10);
      expect(function(){thermostat.decreaseTemperature()}).toThrow('Min. temp reached');

    })
  });

  describe ('#Power saving mode', function() {

    it('max temp 25 if power saving mode on', function(){

      spyOn(thermostat, 'currentTemperature').and.returnValue(25);
      expect(function(){thermostat.increaseTemperature()}).toThrow('Max. temp reached');
    });
  

    it('max temp is 32 if power saving mode off', function(){
      thermostat.isPowerSaving = false
      expect(thermostat.maxTemp()).toEqual(32);
    })

    it('power saving should be on by default', function() {
      expect(thermostat.isPowerSaving).toEqual(true);
    })

    it(' should be false if turned off', function(){
      thermostat.switchModePowerSaving()
      expect(thermostat.isPowerSaving).toEqual(false);
    })
  });
});
