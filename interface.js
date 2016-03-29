$(document).ready(function () {
  var thermostat = new Thermostat();

  updateTemperature()

  $("#temp-up").click(function () {
    thermostat.up();
    updateTemperature();
  });

  $("#temp-down").click(function () {
    thermostat.down();
    updateTemperature();
  });

  $("#reset-temp").click(function () {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $("#psm-on").click(function () {
    thermostat.switchPowerSavingOn();
    $("#psm").text("On");
    updateTemperature();
  });

  $("#psm-off").click(function () {
    thermostat.switchPowerSavingOff();
    $("#psm").text("Off");
    updateTemperature();
  });

  function updateTemperature() {
    $("#temp").text(thermostat.showTemperature());
    // $("#temp").addClass(thermostat.energyUsage());
    }
  };

});
