var colorLight = Shelly.getDevice("y");

function turnOnLightOnEvenings() {
    if (colorLight.off) {
        colorLight.on = true;
    } 
}

Shelly.setScheduleTrigger("19:30", [1, 2, 3, 4, 5, 6, 7], turnOnLightOnEvenings);