const params = {
    arrivalDates: ["2026-06-10 15:00", "2026-07-20 12:00", "2026-08-05 14:00"],
    welcomeMessage: "Guests have arrived! Welcome routine activated.",
    unexpectedMessage: "Guest room door opened outside of a scheduled arrival.",
};

var guestRoomDoor = Shelly.getDevice("x");
var guestRoomLight = Shelly.getDevice("y");
var guestRoomAc = Shelly.getDevice("z");
var guestRoomTV = Shelly.getDevice("m");

if (global.welcomeTriggered === undefined) {
    global.welcomeTriggered = false;
}

function onGuestRoomDoorOpened() {
    var isArrivalDate = false;

    for (var i = 0; i < params.arrivalDates.length; i++) {
        if (Shelly.checkDateTime(params.arrivalDates[i])) {
            isArrivalDate = true;
        }
    }

    if (isArrivalDate && !global.welcomeTriggered) {
        guestRoomLight.on = true;
        guestRoomAc.on = true;
        guestRoomTV.on = true;
        Shelly.sendPhoneStandardNotification(params.welcomeMessage);
        global.welcomeTriggered = true;
    } else if (!isArrivalDate) {
        Shelly.sendPhoneAlertNotification(params.unexpectedMessage);
    }
}

function resetWelcome() {
    global.welcomeTriggered = false;
    guestRoomLight.off = true;
    guestRoomAc.off = true;
    guestRoomTV.off = true;
}

Shelly.setTriggerOnce(guestRoomDoor, "open", onGuestRoomDoorOpened);
Shelly.setScheduleTrigger("11:00", [1, 2, 3, 4, 5, 6, 7], resetWelcome);
