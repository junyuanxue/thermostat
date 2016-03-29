"use strict";

describe("Thermostat", function () {
  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function () {
    expect(thermostat.showTemperature()).toEqual(20);
  });

  it("increases the temperature with the up button", function () {
    thermostat.up();
    expect(thermostat.showTemperature()).toEqual(21);
  });

  it("decreases the temperature with the down button", function () {
    thermostat.down();
    expect(thermostat.showTemperature()).toEqual(19);
  });

  it("minimum temperature is 10 degrees", function () {
    for (var i = 1; i <= 11; i++) {
      thermostat.down();
    }
    expect(thermostat.showTemperature()).toEqual(10);
  });

  it("has power saving mode by default", function () {
    expect(thermostat.isPowerSaving()).toBe(true);
  });

  it("can switch power saving mode off", function () {
    thermostat.switchPowerSavingOff();
    expect(thermostat.isPowerSaving()).toBe(false);
  });

  it("can switch power saving mode back on", function () {
    thermostat.switchPowerSavingOff();
    thermostat.switchPowerSavingOn();
    expect(thermostat.isPowerSaving()).toBe(true);
  });

  it("maximum temperature is 25 degrees when power saving mode is on", function () {
    for (var i = 1; i <= 6; i++) {
      thermostat.up();
    }
    expect(thermostat.showTemperature()).toEqual(25);
  });

  it("maximum temperature is 32 degrees when power saving mode is off", function () {
    thermostat.switchPowerSavingOff();
    for (var i = 1; i <= 13; i++) {
      thermostat.up();
    }
    expect(thermostat.showTemperature()).toEqual(32);
  });
});
