var garageDoor = Shelly.getDevice("x");  // Garage Door
var button = Shelly.getDevice("y");  // Button

function garageDoorControl() {
  garageDoor.open = true;
  garageDoor.open = {
    value: false,
    delay: "20m"
  };
}

Shelly.setTriggerOnce(button, "o1PressedOnce", garageDoorControl);