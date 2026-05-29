var powerMeter = Shelly.getDevice("x");
var boiler = Shelly.getDevice("y");

Shelly.setRepeatedTrigger(powerMeter, "aPower >= 3000", () => boiler.off = true);