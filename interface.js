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
    if(thermostat.isPowerSaving === true) {
    $('#mode').text('TURN MODE ON');
    $('#mode_display').text('Energy Saving Mode: OFF');
  } else {
    $('#mode').text('TURN MODE OFF');
    $('#mode_display').text('Energy Saving Mode: ON');
  }
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  //   if(thermostat.displayColor() === 'green') {
  //     $('#color').css('background-color', 'green')
  //   } else if(thermostat.displayColor() === 'yellow') {
  //     $('#color').css('background-color', 'yellow')
  //   } else {
  //     $('#color').css('background-color', 'red')
  // }

    $('#color').attr('class', thermostat.displayColor());
  }
})
