var bedroomBlind = Shelly.getDevice("x");

Shelly.setSolarTrigger({ event: "sunrise", direction: "before", time: "00:30" }, () => bedroomBlind.open = true);
