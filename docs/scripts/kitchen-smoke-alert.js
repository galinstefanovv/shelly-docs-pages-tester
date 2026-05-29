const params = {
    message : "Smoke detected, kitchen appliances are switched off!"
};

var smokeSensor = Shelly.getDevice("x");
var emeter = Shelly.getDevice("y");

function turnOffEmeterAndSendAlert() {
    emeter.off = true;

    Shelly.sendPhoneStandardNotification(params.message);
    Shelly.sendEmailNotification(params.message);
}

Shelly.setTriggerOnce(smokeSensor, "smoke", turnOffEmeterAndSendAlert);