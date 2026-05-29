var microwave = Shelly.getDevice("x");
var coffee = Shelly.getDevice("y");  
var kettle = Shelly.getDevice("z"); 
var door = Shelly.getDevice("m");
var bluetoothButton = Shelly.getDevice("n");

function incrementMicro() {
    if (global.kitchenStats === undefined) {
        global.kitchenStats = {
            total_usages: 0, 
            micro: 0, 
            coffee: 0, 
            kettle: 0
        };
    } 
    
    global.kitchenStats.total_usages++; 
    global.kitchenStats.micro++;
}

function incrementCoffee() {
    if (global.kitchenStats === undefined) {
        global.kitchenStats = {
            total_usages: 0, micro: 0, coffee: 0, kettle: 0
        };
    } 
    
    global.kitchenStats.total_usages++; 
    global.kitchenStats.coffee++;
}

function incrementKettle() {
    if (global.kitchenStats === undefined) {
        global.kitchenStats = {
            total_usages: 0, 
            micro: 0, 
            coffee: 0, 
            kettle: 0
        };
    } 
    
    global.kitchenStats.total_usages++; 
    global.kitchenStats.kettle++;
}

Shelly.setScheduleTrigger("07:30", [1,2,3,4,5], () => { microwave.o1On = true; coffee.o1On = true; kettle.o1On = true; });
Shelly.setTriggerWithHoldOff(microwave, "o1PowerConsumption > 50", 1, incrementMicro);
Shelly.setTriggerWithHoldOff(coffee, "o1PowerConsumption > 30", 1, incrementCoffee);
Shelly.setTriggerWithHoldOff(kettle, "o1PowerConsumption > 100", 1, incrementKettle);
Shelly.setScheduleTrigger("18:30", [1,2,3,4,5], () => { microwave.o1On = false; coffee.o1On = false; kettle.o1On = false;});