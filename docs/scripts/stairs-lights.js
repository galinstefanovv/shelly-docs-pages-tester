var stairsLight = Shelly.getDevice("x");
var stairsMotionSensor = Shelly.getDevice("y"); 

function turnLightsForThreeMins() {
  stairsLight.on = true;
  
  stairsLight.on = {
    value: false,
    delay: "3m"
  };
}

Shelly.setTriggerOnce(stairsMotionSensor, "motion", turnLightsForThreeMins);