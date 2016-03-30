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
      spyOn(thermostat, 'currentTemperature').and.returnValue(9);
      thermostat.decreaseTemperature()
      expect(function(){thermostat.decreaseTemperature()}).toThrow('Min. temp reached');

    })
  });
});
