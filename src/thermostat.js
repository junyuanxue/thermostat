function Thermostat(){
  this.temperature = 20;
  this.minTemp = 10
}

Thermostat.prototype.currentTemperature = function(){
  return this.temperature
}

Thermostat.prototype.increaseTemperature = function(){
  this.temperature ++ ;
}

Thermostat.prototype.decreaseTemperature = function(){
  if ( this.currentTemperature() <= this.minTemp ) {
    throw 'Min. temp reached';
  }
  this.temperature --;
}
