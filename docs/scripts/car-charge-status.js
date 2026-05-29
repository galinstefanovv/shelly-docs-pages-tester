const params = {
  carChargedNotification: "Car is fully charged",
  carChargingNotification: "Car is currently charging",
  duration: 10.0,
  highThreshold: 1000.0,
  lowThreshold: 100.0,
};

var carCharger = Shelly.getDevice("x");

Shelly.setTriggerWithHoldOff(carCharger, "powerConsumption <" + params.lowThreshold, params.duration, () => {
  Shelly.sendPhoneStandardNotification(params.carChargedNotification);
});
Shelly.setTriggerWithHoldOff(carCharger, "powerConsumption >" + params.highThreshold, params.duration, () => {
  Shelly.sendPhoneStandardNotification(params.carChargingNotification);
});
