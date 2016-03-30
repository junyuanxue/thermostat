function Thermostat(){
  this.temperature = 20;
  this.minTemp = 10
  this.maxTemp = 25
}

Thermostat.prototype.currentTemperature = function(){
  return this.temperature
}

Thermostat.prototype.increaseTemperature = function(){
  if ( this.currentTemperature() >= this.maxTemp ) {
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
