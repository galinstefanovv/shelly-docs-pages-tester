var floodSensor = Shelly.getDevice("x"); 
var gasSensor = Shelly.getDevice("y");
var emeter = Shelly.getDevice("z"); 

Shelly.setTriggerOnce(floodSensor, "flood", () => {
    Shelly.sendPhoneAlertNotification("Alert for flood!");
});
Shelly.setTriggerOnce(gasSensor, "gas", () => {
    Shelly.sendPhoneAlertNotification("Alert for gas!");
});
Shelly.setTriggerOnce(emeter, "aVoltage < 180", () => {
    Shelly.sendPhoneAlertNotification("Alert for low voltage!");
});