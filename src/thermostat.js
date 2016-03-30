function Thermostat(){
  this.temperature = 20;
}

Thermostat.prototype.currentTemperature = function(){
  return this.temperature
}

Thermostat.prototype.increaseTemperature = function(){
  this.temperature ++ ;
}

Thermostat.prototype.decreaseTemperature = function(){
  this.temperature -- ;
}