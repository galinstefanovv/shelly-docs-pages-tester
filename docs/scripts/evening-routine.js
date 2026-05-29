var livingroomLights = Shelly.getDevice("x");
var livingroomMotionSensor = Shelly.getDevice("y");
var tempSensor = Shelly.getDevice("z");
var ac = Shelly.getDevice("m"); 
var mainDoor = Shelly.getDevice("o");
var hallwayLights = Shelly.getDevice("q"); 

Shelly.setActiveTime({
    start: "18:00",
    duration: "780",
    days: [1, 2, 3, 4, 5]
});

Shelly.setTriggerOnce(livingroomMotionSensor, "motion", () => {
  livingroomLights.on = true;
});

Shelly.setTriggerOnce(tempSensor, "temperature > 27", () => {
  ac.on = true;
});

Shelly.setTriggerOnce(mainDoor, "open", () => {
  Shelly.sendPhoneAlertNotification("Door opened");
  hallwayLights.on = true;
});

Shelly.setScheduleTrigger("07:00", [1,2,3,4,5], () => {
  if (mainDoor.closed) {
    livingroomLights.off = true;
    ac.off = true;
    hallwayLights.off = true;
  }
}); 