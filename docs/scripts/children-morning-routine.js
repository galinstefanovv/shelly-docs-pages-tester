if (global.childrenFlags === undefined) {
    global.childrenFlags = {up: false, kitchen: false, out: false};
}

Shelly.setActiveTime({ start: "06:00", duration: "165", days: [1,2,3,4,5] });

var childDoorSensor = Shelly.getDevice("x"); 
var frontDoorSensor = Shelly.getDevice("y"); 
var kitchenMotionSensor = Shelly.getDevice("z");

Shelly.setTriggerOnce(childDoorSensor, "open", () => {global.childrenFlags.up = true; Shelly.sendPhoneStandardNotification("Children are up", "0");});
Shelly.setTriggerOnce(kitchenMotionSensor, "motion", () => {global.childrenFlags.kitchen = true; Shelly.sendPhoneStandardNotification("Children in kitchen", "0");});
Shelly.setTriggerOnce(frontDoorSensor, "open", () => {global.childrenFlags.out = true; Shelly.sendPhoneStandardNotification("Children are out", "0");});

function summarizeEvents() {
  var msg = "Morning summary: ";

  if (global.childrenFlags.up) {msg += "Children woke up. ";} else {msg += "No wake-up detected. ";}
  if (global.childrenFlags.kitchen) {msg += "Visited kitchen. ";} else {msg += "No kitchen activity. ";}
  if (global.childrenFlags.out) {msg += "Left home. ";} else {msg += "Did not leave home. ";}

  Shelly.sendPhoneStandardNotification(msg, "0");

  global.childrenFlags = {up: false, kitchen: false, out: false};
}

Shelly.setScheduleTrigger("08:40", [1,2,3,4,5], summarizeEvents);