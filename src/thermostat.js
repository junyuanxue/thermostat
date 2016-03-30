function Thermostat(){
  this.temperature = 20;
  this.isPowerSaving = true;
  this.MINIMUM_TEMPERATURE = 10;
  this.POWER_SAVING_MAXIMUM = 25;
}

Thermostat.prototype.increase = function() {
  if (this.isPowerSaving && (this.temperature >= this.POWER_SAVING_MAXIMUM)) {
    return;
  }
  this.temperature += 1;
}

Thermostat.prototype.decrease = function() {
  if (this.temperature > this.MINIMUM_TEMPERATURE) {
    this.temperature -= 1;
  };
}

Thermostat.prototype.powerSavingOff = function() {
  this.isPowerSaving = false;
}

Thermostat.prototype.powerSavingOn = function() {
  this.isPowerSaving = true;
}
