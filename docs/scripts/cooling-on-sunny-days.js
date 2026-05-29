var livingroomTemperature = Shelly.getDevice("x");
var livingroomMotion = Shelly.getDevice("y");
var blinds = Shelly.getDevice("z");

function closeBlinds() {
  var condition = livingroomMotion.motion &&
                  livingroomMotion.illuminance > 100 &&
                  livingroomTemperature.temperature > 25;

  if (condition) {
    blinds.closeRoller = {
      value: true,
      delay: "30s"
    };
  }
}

Shelly.setTriggerOnce(livingroomMotion, "motion", closeBlinds);
Shelly.setTriggerOnAnyChange(livingroomTemperature, "temperature > 25", closeBlinds);
