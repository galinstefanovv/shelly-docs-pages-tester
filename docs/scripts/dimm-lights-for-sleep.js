var bedroomLights = Shelly.getDevice("x"); 
var livingroomLights = Shelly.getDevice("y");  

Shelly.setActiveTime({start: "22:00", duration: "60", days: [1,2,3,4,5,6,7]});

function dimDown() {
  var currentBrightness = bedroomLights.brightness;
  var newBrightness = currentBrightness - 10;
  bedroomLights.brightness = newBrightness;
  livingroomLights.brightness = newBrightness;
}

Shelly.setTimerTrigger(6, dimDown);