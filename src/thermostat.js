"use strict";

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32
  this.MEDIUM_USAGE_LIMIT = 18;
  this.temperature = this.DEFAULT_TEMP;
  this._powerSaving = true;
};

Thermostat.prototype.showTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.up = function () {
  if (this.isMaxTemperature()) {
    return;
  }
  else {
    this.temperature += 1;
  }
};

Thermostat.prototype.down = function () {
  if (this.isMinTemperature()) {
    return;
  }
  else {
    this.temperature -= 1;
  }
};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.isMinTemperature = function () {
  return this.temperature === this.MIN_TEMP;
};

Thermostat.prototype.isMaxTemperature = function () {
  if (this.isPowerSaving()) {
    return this.temperature === this.MAX_TEMP_PSM_ON;
  }
  else {
    return this.temperature === this.MAX_TEMP_PSM_OFF;
  }
};

Thermostat.prototype.isPowerSaving = function () {
  return this._powerSaving;
};

Thermostat.prototype.switchPowerSavingOff = function () {
  this._powerSaving = false;
};

Thermostat.prototype.switchPowerSavingOn = function () {
  this._powerSaving = true;
};

Thermostat.prototype.energyUsage = function () {
  if (this.showTemperature() < this.MEDIUM_USAGE_LIMIT) {
    return "low usage";
  }
  if (this.showTemperature() >= this.MAX_TEMP_PSM_ON) {
    return "high usage";
  }
  return "medium usage";
};
