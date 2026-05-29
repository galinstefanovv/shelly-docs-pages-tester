var light = Shelly.getDevice("x"); // Light
var rgbLight = Shelly.getDevice("y"); // Color Light

global.counter = 0;

function turnOnRgbLight() {
  global.counter++;
  if (global.counter == 1) {
    rgbLight.on = true;
  }
}

Shelly.setTriggerOnce(light, "on", turnOnRgbLight);