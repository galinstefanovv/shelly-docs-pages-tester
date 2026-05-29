const params = {
  illuminanceValue: 50.0,
};

var lights = Shelly.getGroup(1);
var motionSensor = Shelly.getDevice("x");

function turnOnLights() {
  if (motionSensor.illuminance < params.illuminanceValue) {
      lights.turnOn();
  } 
}

Shelly.setTriggerOnce(motionSensor, "motion", turnOnLights);