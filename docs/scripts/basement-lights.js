var basementLight = Shelly.getDevice("x"); 
var basementMotionSensor = Shelly.getDevice("y");

Shelly.setTriggerOnce(basementMotionSensor, "motion", () => {basementLight.on = true});
Shelly.setTriggerWithHoldOff(basementMotionSensor, "noMotion", 1, () => {basementLight.on = false});