$ ( document ).ready(function () {
  thermostat = new Thermostat()

  $ ( "#temperature" ).text(thermostat.temperature);

  $ ( "#temperature" ).attr("class", thermostat.energyUsage());

  $ ( "#psm" ).text("On");

  $ ( "#increase" ).click(function () {
    thermostat.increase();
    updateTemperature();
  });

  $ ( "#decrease" ).click(function () {
    thermostat.decrease();
    updateTemperature();
  });

  $ ( "#reset" ).click(function () {
    thermostat.resetTemp();
    updateTemperature();
  });

  $ ( "#psm-on" ).click(function () {
    thermostat.powerSavingOn();
    $ ( "#psm" ).text("On");
  });

  $ ( "#psm-off" ).click(function () {
    thermostat.powerSavingOff();
    $ ( "#psm" ).text("Off");
  });

  updateTemperature = function() {
    $ ( "#temperature" ).text(thermostat.temperature);
    $ ( "#temperature" ).attr("class", thermostat.energyUsage());
  };

});
