$ ( document ).ready(function () {
  thermostat = new Thermostat()

  $ ("html").mouseenter(function () {
    $(this).css("cursor", "url(http://orig14.deviantart.net/1586/f/2011/191/2/1/bda__kitty_cat_icon_by_sabakugaara-d3lnz58.gif), auto");
  });

  $ ( "#temperature" ).text(thermostat.temperature);

<<<<<<< HEAD
  $ ( "#temperature" ).attr("class", thermostat.energyUsage());
=======
  $ ( "#temperature" ).attr("class",thermostat.energyUsage());

>>>>>>> c9a9b2776191d6a11a8812ce2a00d6d794ce8ff9

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
<<<<<<< HEAD
=======
    $ ("img").attr("src", "https://media.giphy.com/media/ffWXNxlfEcrHG/giphy.gif");
>>>>>>> c9a9b2776191d6a11a8812ce2a00d6d794ce8ff9
  };

  $.ajax({
    url : "http://api.wunderground.com/api/cd59938254e12ba3/geolookup/conditions/forecast/q/London.json",
    dataType : "jsonp",
    success : function(parsed_json) { var location = parsed_json['location']['city'];
      var temp_c = parsed_json['current_observation']['temp_c'];
      $( "#api" ).text("Current temperature in " + location + " is: " + temp_c);
    }
  });

});
