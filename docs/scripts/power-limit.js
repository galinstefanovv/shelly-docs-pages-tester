const params = {
  limitW: 2000,
};

var powerMeter = Shelly.getDevice("x");

Shelly.setTriggerOnce(powerMeter, "power > " + params.limitW, () => {
  Shelly.sendPhoneStandardNotification("Consumption is over the limit of: " + params.limitW);
});