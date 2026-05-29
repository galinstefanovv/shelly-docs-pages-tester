var mainDoor = Shelly.getDevice("x");
var alarmSystem = Shelly.getAlarm("y");

Shelly.setTriggerOnce(mainDoor, "closed", () => alarmSystem.enable());