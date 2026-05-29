var kitchenLight = Shelly.getDevice("x");

Shelly.setActiveTime({
    start: "19:00",
    duration: "240",
    days: [1, 2, 3, 4, 5, 6, 7]
});

Shelly.setTimerTrigger(60, () => {
    kitchenLight.on = {
        value: true,
        timeout: "30m"
    };
});