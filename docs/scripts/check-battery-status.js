var motionSensor = Shelly.getDevice("x");

Shelly.setActiveTime({start: "17:00", duration: "180", days: [1, 2, 3, 4, 5]});

Shelly.setTriggerOnAnyChange(motionSensor, "battery < 20.0", () => {
    Shelly.sendEmailNotification(`Motion sensor battery is ${motionSensor.battery}%`);
});