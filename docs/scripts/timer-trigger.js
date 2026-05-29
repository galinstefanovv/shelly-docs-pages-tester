var bedroomBlind = Shelly.getDevice("x");

Shelly.setTimerTrigger(30, () => bedroomBlind.open = false);
