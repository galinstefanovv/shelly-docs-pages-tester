var basementHTS = Shelly.getDevice("x"); 
var storeRoomHTS = Shelly.getDevice("y"); 
var bathroomHTS = Shelly.getDevice("z"); 

var basementFan = Shelly.getDevice("m"); 
var storeRoomFan = Shelly.getDevice("n"); 
var bathroomFan = Shelly.getDevice("p");

Shelly.setTriggerOnce(basementHTS, "humidity >= 65", () => {basementFan.o1On = true;});
Shelly.setTriggerOnce(basementHTS, "humidity <= 50", () => {basementFan.o1On = false;});

Shelly.setTriggerOnce(storeRoomHTS, "humidity >= 65", () => {storeRoomFan.o1On = true;});
Shelly.setTriggerOnce(storeRoomHTS, "humidity <= 50", () => {storeRoomFan.o1On = false;});

Shelly.setTriggerOnce(bathroomHTS, "humidity >= 65", () => {bathroomFan.o1On = true;});
Shelly.setTriggerOnce(bathroomHTS, "humidity <= 50", () => {bathroomFan.o1On = false;});