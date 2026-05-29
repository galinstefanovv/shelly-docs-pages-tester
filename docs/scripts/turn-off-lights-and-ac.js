var mainDoor = Shelly.getDevice("x"); 
var houseLights = Shelly.getDevice("y"); 
var ac = Shelly.getDevice("z");

Shelly.setActiveTime({ start: "06:00", duration: "300", days: [1, 2, 3, 4, 5] })

function turnOffDevicesWhenClosed() {
    if (houseLights.on || ac.on) {
        houseLights.off = true;
        ac.off = true;
    }
}

Shelly.setTriggerOnce(mainDoor, "closed", turnOffDevicesWhenClosed);