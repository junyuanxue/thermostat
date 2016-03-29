"use strict";

describe("Thermostat", function () {
  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it("starts at default temperature", function () {
    expect(thermostat.showTemperature()).toEqual(thermostat.DEFAULT_TEMP);
  });

  it("increases the temperature with the up button", function () {
    thermostat.up();
    expect(thermostat.showTemperature()).toEqual(thermostat.DEFAULT_TEMP + 1);
  });

  it("decreases the temperature with the down button", function () {
    thermostat.down();
    expect(thermostat.showTemperature()).toEqual(thermostat.DEFAULT_TEMP - 1);
  });

  it("cannot decrease temperature once reaching minimum temperature", function () {
    const temp_diff = thermostat.DEFAULT_TEMP - thermostat.MIN_TEMP
    for (var i = 1; i <= temp_diff + 1; i++) {
      thermostat.down();
    }
    expect(thermostat.showTemperature()).toEqual(thermostat.MIN_TEMP);
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

  it("has a maximum temperature when power saving mode is on", function () {
    const temp_diff = thermostat.MAX_TEMP_PSM_ON - thermostat.DEFAULT_TEMP
    for (var i = 1; i <= temp_diff + 1; i++) {
      thermostat.up();
    }
    expect(thermostat.showTemperature()).toEqual(thermostat.MAX_TEMP_PSM_ON);
  });

  it("has a higher maximum temperature when power saving mode is off", function () {
    thermostat.switchPowerSavingOff();
    const temp_diff = thermostat.MAX_TEMP_PSM_OFF - thermostat.DEFAULT_TEMP
    for (var i = 1; i <= temp_diff + 1; i++) {
      thermostat.up();
    }
    expect(thermostat.showTemperature()).toEqual(thermostat.MAX_TEMP_PSM_OFF);
  });

  it("can reset temperature to default", function () {
    thermostat.resetTemperature();
    expect(thermostat.showTemperature()).toEqual(thermostat.DEFAULT_TEMP);
  });
});
