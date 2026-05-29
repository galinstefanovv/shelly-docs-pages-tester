var doorSensor = Shelly.getDevice("x");
var light = Shelly.getDevice("y");
var rgbLight = Shelly.getDevice("z");

Shelly.setActiveTime({start: "17:00", duration: "600", days: [1, 2, 3, 4, 5, 6, 7]})

function turnOnLightsWhenOpened() {
    light.on = true;
    rgbLight.on = true;
}

Shelly.setTriggerOnce(doorSensor, "open", turnOnLightsWhenOpened);