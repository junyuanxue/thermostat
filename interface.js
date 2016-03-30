$ ( document ).ready(function () {
  var thermostat = new Thermostat()

  $('#city-name').text("CATLAND");

  $('#current-temperature').text("100000000");

  $ ("html").mouseenter(function () {
    $(this).css("cursor", "url(http://orig14.deviantart.net/1586/f/2011/191/2/1/bda__kitty_cat_icon_by_sabakugaara-d3lnz58.gif), auto");
  });

  $ ( "#temperature" ).text(thermostat.temperature);

  $ ( "#temperature" ).attr("class",thermostat.energyUsage());

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
    $ ("img").attr("src", "https://media.giphy.com/media/ffWXNxlfEcrHG/giphy.gif");
  };

  $( '#select-city' ).submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $( "#city-name" ).text(city);
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3a6bc93def461093f7bebf5f7e4cc1bf&units=metric', function(data) {
          $('#current-temperature').text(data.main.temp);
      });
  });

});
