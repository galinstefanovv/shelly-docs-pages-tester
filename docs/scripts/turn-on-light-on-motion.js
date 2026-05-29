var light = Shelly.getDevice("x");

function turnOnLightOnMotion() {
  if (Shelly.checkActiveTime({start: "22:00", duration: "480", days: [1, 2, 3, 4, 5, 6, 7]})) {
    light.on = true;
  }
}

Shelly.setTriggerOnce(motionSensor, "motion", turnOnLightOnMotion);