function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.isPowerSaving = true;
  this.MIN_TEMP = 10;
  this.POWER_SAVING_MAXIMUM = 25;
  this.MAX_TEMP = 32;
  this.LOW_USAGE_LIMIT = 18;
  this.MEDIUM_USAGE_LIMIT = 25;
};

Thermostat.prototype.increase = function () {
  if (this.isPowerSaving && this.temperature >= this.POWER_SAVING_MAXIMUM) {
    return;
  }
  if (!this.isPowerSaving && this.temperature >= this.MAX_TEMP) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.decrease = function () {
  if (this.temperature > this.MIN_TEMP) {
    this.temperature -= 1;
  };
};

Thermostat.prototype.powerSavingOff = function () {
  this.isPowerSaving = false;
};

Thermostat.prototype.powerSavingOn = function () {
  this.isPowerSaving = true;
};

Thermostat.prototype.resetTemp = function () {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < this.LOW_USAGE_LIMIT) {
    return "low";
  }
  if (this.temperature >= this.MEDIUM_USAGE_LIMIT) {
    return "high";
  }
  return "medium";
};
