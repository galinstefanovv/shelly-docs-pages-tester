var button = Shelly.getDevice("x");
var coffee = Shelly.getDevice("y");
var light = Shelly.getDevice("z");

global.buttonSinglePresses = 0;

function turnOnDevices() {
  global.buttonSinglePresses++;

  if (global.buttonSinglePresses == 1) {
    light.on = true;
  } else if (global.buttonSinglePresses == 2) {
    coffee.on = true;   
  } else {
    global.buttonSinglePresses = 0;
    coffee.on = false;
    light.on = false;
  }
}

Shelly.setTriggerOnce(button, "pressedOnce", turnOnDevices);