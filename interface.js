$(document).ready(function () {
  var thermostat = new Thermostat();

  $("#temp").prepend(thermostat.showTemperature());

  $("#temp-up").click(function () {
    thermostat.up();
    $("#temp").text(thermostat.showTemperature());
  });

  $("#temp-down").click(function () {
    thermostat.down();
    $("#temp").text(thermostat.showTemperature());
  });

});
