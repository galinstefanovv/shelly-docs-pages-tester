var everyDayExtractorHood = Shelly.getScene("x");
var stove = Shelly.getDevice("y");

Shelly.setActiveTime({ start: "10:00", duration: "600", days: [1, 2, 3, 4, 5] });

Shelly.setTriggerOnce(stove, "o1On", () => everyDayExtractorHood.runDo());