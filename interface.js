$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();
  $('#up').click(function(){
    thermostat.increaseTemperature();
  updateTemperature();
  });
  $('#down').click(function(){
    thermostat.decreaseTemperature();
  updateTemperature();
  });
  $('#reset').click(function(){
    thermostat.tempReset();
  updateTemperature();
  });
  $('#mode').click(function(){
    thermostat.switchModePowerSaving();
  });
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    if(thermostat.displayColor() === 'green') {
      $('#temperature').css('color', 'green')
    } else if(thermostat.displayColor() === 'yellow') {
      $('#temperature').css('color', 'yellow')
    } else {
      $('#temperature').css('color', 'red')
  }
    }

    // $('#temperature').attr('', thermostat.displayColor());
})
