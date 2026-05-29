const params = {
  illuminanceValue: 50,
};

var light = Shelly.getDevice("x");
var motionSensor = Shelly.getDevice("y");

Shelly.setActiveTime({
  start: "18:00",
  duration: "720",
  days: [1, 2, 3, 4, 5, 6, 7],
});

Shelly.setTriggerOnAnyChange(motionSensor, "illuminance <" + params.illuminanceValue, () => {
    light.on = motionSensor.motion;
  }
);
