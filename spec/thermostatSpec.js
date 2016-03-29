"use strict";

describe("Thermostat", function () {
  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it("starts at default temperature", function () {
    expect(thermostat.showTemperature()).toEqual(thermostat.DEFAULT_TEMP);
  });

  describe("change temperature", function () {
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

    it("can reset temperature to default", function () {
      thermostat.resetTemperature();
      expect(thermostat.showTemperature()).toEqual(thermostat.DEFAULT_TEMP);
    });
  });

  describe("has power saving mode", function () {
    it("has PSM on by default", function () {
      expect(thermostat.isPowerSaving()).toBe(true);
    });

    it("can switch PSM off", function () {
      thermostat.switchPowerSavingOff();
      expect(thermostat.isPowerSaving()).toBe(false);
    });

    it("can switch PSM back on", function () {
      thermostat.switchPowerSavingOff();
      thermostat.switchPowerSavingOn();
      expect(thermostat.isPowerSaving()).toBe(true);
    });

    describe("PSM on", function () {
      it("has a maximum temperature when power saving mode is on", function () {
        const temp_diff = thermostat.MAX_TEMP_PSM_ON - thermostat.DEFAULT_TEMP
        for (var i = 1; i <= temp_diff + 1; i++) {
          thermostat.up();
        }
        expect(thermostat.showTemperature()).toEqual(thermostat.MAX_TEMP_PSM_ON);
      });
    });

    describe("PSM off", function () {
      it("has a higher maximum temperature when power saving mode is off", function () {
        thermostat.switchPowerSavingOff();
        const temp_diff = thermostat.MAX_TEMP_PSM_OFF - thermostat.DEFAULT_TEMP
        for (var i = 1; i <= temp_diff + 1; i++) {
          thermostat.up();
        }
        expect(thermostat.showTemperature()).toEqual(thermostat.MAX_TEMP_PSM_OFF);
      });
    });
  });

  describe("displays energy usage", function () {
    describe("when the temperature is below medium usage limit", function () {
      it("displays low usage", function () {
        const temp_diff = thermostat.DEFAULT_TEMP - thermostat.MEDIUM_USAGE_LIMIT;
        for (var i = 1; i <= temp_diff + 1; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual("low usage");
      });
    });

    describe("when the temperature is at or above medium usage limit and below PSM maximum limit", function () {
      it("displays medium usage", function () {
        expect(thermostat.energyUsage()).toEqual("medium usage");
      });
    });

    describe("when the temperature is at or above PSM maximum limit", function () {
      it("displays high usage", function () {
        const temp_diff = thermostat.MAX_TEMP_PSM_ON - thermostat.DEFAULT_TEMP
        for (var i = 1; i <= temp_diff; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual("high usage");
      });
    });
  });



});
