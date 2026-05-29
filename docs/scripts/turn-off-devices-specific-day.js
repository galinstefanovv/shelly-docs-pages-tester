var bedroomBlind = Shelly.getDevice("x");

function closeBlindBeforeTrip() {
    bedroomBlind.open = false;
    Shelly.sendPhoneStandardNotification("Bedroom blind closed");
}

Shelly.setDateTimeTrigger("2026-06-01", "20:00", closeBlindBeforeTrip);
