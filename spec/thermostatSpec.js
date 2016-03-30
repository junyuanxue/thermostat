describe("Thermostat", function () {
  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", function () {
    expect(thermostat.temperature).toEqual(20);
  });

  describe("change in temperature", function () {
    it("can increase temperature", function () {
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21);
    });

    it("can decrease temperature", function () {
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(19);
    });

    it("cannot go below 10 degrees", function () {
      for (var i = 1; i <= 11; i++) {
        thermostat.decrease();
      }
      expect(thermostat.temperature).toEqual(10);
    });

    it("can reset temperature to 20", function () {
      thermostat.resetTemp();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("has power saving mode", function () {
    it("can be on", function () {
      expect(thermostat.isPowerSaving).toBe(true);
    });

    it("can be switched off", function () {
      thermostat.powerSavingOff();
      expect(thermostat.isPowerSaving).toBe(false);
    });

    it("can be switched back on", function () {
      thermostat.powerSavingOff();
      thermostat.powerSavingOn();
      expect(thermostat.isPowerSaving).toBe(true);
    });

    it("if on, temp should not go over 25 degress", function () {
      for (var i = 1; i <= 6; i++) {
        thermostat.increase();
      }
      expect(thermostat.temperature).toEqual(25);
    });

    it("if off, temp should not go over 32 degrees", function () {
      thermostat.powerSavingOff();
      for (var i = 1; i <= 13; i++) {
        thermostat.increase();
      }
      expect(thermostat.temperature).toEqual(32);
    });
  });

  describe("display energy usage", function () {
    it("low usage when temp is below 18 degrees", function () {
      for (var i = 1; i <= 3; i++) {
        thermostat.decrease();
      }
      expect(thermostat.energyUsage()).toEqual("low");
    });

    it("medium usage when temp is between 18 and 25 degrees", function () {
      expect(thermostat.energyUsage()).toEqual("medium");
    });

    it("high usage when temp reaches 25 degrees", function () {
      for (var i = 1; i <= 5; i++) {
        thermostat.increase();
      }
      expect(thermostat.energyUsage()).toEqual("high");
    });
  });
});
