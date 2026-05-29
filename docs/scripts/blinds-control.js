var humidityAndTemperatureSensor = Shelly.getDevice("x"); 
var hallwayMotionSensor = Shelly.getDevice("y"); 
var blinds = Shelly.getDevice("z");

function defineBlindsPosition() {
  if (hallwayMotionSensor.illuminance > 40) {blinds.open = false;}
}

Shelly.setTriggerOnce(humidityAndTemperatureSensor, "temperature >= 26", defineBlindsPosition);