var button = Shelly.getDevice("x");
var light = Shelly.getDevice("y"); 

Shelly.setTriggerOnce(button, "o1PressedOnce", () => {light.on = !light.on;});
