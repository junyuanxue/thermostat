$(document).ready(function () {
  var thermostat = new Thermostat();

  $("#temp").prepend(thermostat.temperature);

  $("#temp-up").click(function () {
    thermostat.up();
    $("#temp").text(thermostat.temperature);
  })

});
