$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();
  displayTemp();

  $(window).unload(function (){
    var temperature = thermostat.temperature;
    var city = $('#city_name').text();
    $.ajax({
      type: "POST",
      url: 'http://localhost:4567/temperature',
      data: {'temperature': temperature,
             'city': city},
      crossDomain: true,
      async: false
    });
  });

  $.ajax({
    type: "GET",
    url: 'http://localhost:4567/temperature',
    success: function(data) {
      console.log(data)
      $('#temperature').text(data.temperature);
      thermostat.temperature = data.temperature;
      updateTemperature();
      console.log(data.city);
      getCityTemp(data.city);
    },
    dataType: 'json',
    crossDomain: true,
  })

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
  };

  });

  function displayTemp(city){
    $('#submit').click(function(event) {
      event.preventDefault();
      var city = $('#current-city').val();
      getCityTemp(city);
    })
  };

  function getCityTemp(city){
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=2e925c65c1b89a2ba47e82955d1e0efa&units=metric', function(data) {
      $('#current_temperature').text(data.main.temp);
      $('#city_name').text(city);
    });
  };

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    if(thermostat.displayColor() === 'green') {
      $('#color-text').text('GREEN')
    } else if(thermostat.displayColor() === 'yellow') {
      $('#color-text').text('YELLOW')
    } else {
      $('#color-text').text('RED')
  }
    $('#color').attr('class', thermostat.displayColor());
  };
});
