function Thermostat(){
  this.temperature = 20;
  this.minTemp = 10;
  this.isPowerSaving = true;

}

Thermostat.prototype.currentTemperature = function(){
  return this.temperature
}

Thermostat.prototype.increaseTemperature = function(){
  if ( this.currentTemperature() >= this.maxTemp()) {
    throw 'Max. temp reached';
}
  this.temperature ++;
}

Thermostat.prototype.decreaseTemperature = function(){
  if ( this.currentTemperature() <= this.minTemp ) {
    throw 'Min. temp reached';
  }
  this.temperature --;
}

Thermostat.prototype.maxTemp = function(){
  if(this.isPowerSaving === true) {return 25;}
    else
      {return 32;}
}

Thermostat.prototype.switchModePowerSaving = function() {
  if (this.isPowerSaving === true)
    {this.isPowerSaving=false;}
  else
    {this.isPowerSaving=true;}
}

Thermostat.prototype.tempReset = function() {
    this.temperature = 20;
}
