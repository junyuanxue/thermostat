"use strict";

function Thermostat() {
  this._temperature = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this._powerSaving = true;
};

Thermostat.prototype.showTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.up = function () {
  if (this.isMaxTemperature()) {
    return;
  }
  else {
    this._temperature += 1;
  }
};

Thermostat.prototype.down = function () {
  if (this.isMinTemperature()) {
    return;
  }
  else {
    this._temperature -= 1;
  }
};

Thermostat.prototype.isMinTemperature = function () {
  return this._temperature === this.MIN_TEMP;
};

Thermostat.prototype.isMaxTemperature = function () {
  if (this.isPowerSaving()) {
    return this._temperature === this.MAX_TEMP_PSM_ON;
  }
  else {
    return this._temperature === this.MAX_TEMP_PSM_OFF;
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
