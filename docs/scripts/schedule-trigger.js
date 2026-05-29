var bedroomBlind = Shelly.getDevice("x");

Shelly.setScheduleTrigger("07:00", [1,2,3,4,5], () => bedroomBlind.open = true);
