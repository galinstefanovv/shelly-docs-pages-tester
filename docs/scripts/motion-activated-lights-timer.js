var motionSensor = Shelly.getDevice("x");
var hallwayLights = Shelly.getDevice("y");

global.timer = "15m";

function turnOnHallwayLights() {
  if (motionSensor.illuminance < 5.0) {
    hallwayLights.on = {
      value: true,
      timeout: global.timer
    };
  }
}

Shelly.setTriggerOnce(motionSensor, "motion", turnOnHallwayLights);