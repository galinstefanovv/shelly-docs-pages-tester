const params = {
    windowMinutes: 60,
    maxOpens: 10,
    burstGapMinutes: 5,
    doorName: "Front door",
};

var door = Shelly.getDevice("x");

if (global.state === undefined) {
    global.state = {
        count: 0,
        windowStart: 0,
        lastOpen: 0,
    };
}

function recordDoorOpen() {
    const now = Date.now();
    const WINDOW_MS = params.windowMinutes * 60 * 1000;
    const BURST_GAP_MS = params.burstGapMinutes * 60 * 1000;

    if (now - global.state.lastOpen > BURST_GAP_MS) {
        global.state.count = 1;
        global.state.windowStart = now;
    } else {
        if (global.state.count === 0) {
            global.state.windowStart = now;
        }
        global.state.count++;
    }

    global.state.lastOpen = now;

    if (now - global.state.windowStart > WINDOW_MS) {
        global.state.count = 1;
        global.state.windowStart = now;
    }

    if (global.state.count > params.maxOpens) {
        notify();
        global.state.count = 0;
        global.state.windowStart = 0;
    }
}

function notify() {
    Shelly.sendPhoneStandardNotification(params.doorName + " activity burst detected");
}

Shelly.setTriggerOnce(door, "open", recordDoorOpen);
