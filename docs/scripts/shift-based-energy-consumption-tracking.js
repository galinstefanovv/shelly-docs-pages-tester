var mainEmeter = Shelly.getDevice("x");

function pushConsumption() {
  var is_first_shift = Shelly.checkActiveTime({ start: "08:00", duration: "479", days: [1,2,3,4,5,6,7] });
  var is_second_shift = Shelly.checkActiveTime({ start: "16:00", duration: "479", days: [1,2,3,4,5,6,7] });

  if (is_first_shift) {
    if (global.first_shift === undefined) {
        global.first_shift = [];
    }
    global.first_shift.push(mainEmeter.powerConsumption);
  } 
  else if (is_second_shift) {
    if (global.second_shift === undefined) {
        global.second_shift = [];
    }
    global.second_shift.push(mainEmeter.powerConsumption);
  }
}

function calculateAvgConsumption() {
  var first_sum = 0; var second_sum = 0;
  var first_avg = 0; var second_avg = 0;

  for (var i = 0; i < global.first_shift.length; i++) {
    first_sum += global.first_shift[i];
  }
  for (var j = 0; j < global.second_shift.length; j++) {
    second_sum += global.second_shift[j];
  }

  if (global.first_shift.length > 0) {
    first_avg = first_sum / global.first_shift.length;
  }
  if (global.second_shift.length > 0) {
    second_avg = second_sum / global.second_shift.length;
  }

  return [first_avg, second_avg];
}

function sendAndClear() {
  var calculated = calculateAvgConsumption();
  var first = calculated[0];
  var second = calculated[1];

  Shelly.sendEmailNotification("First shift: " + first + " Second shift: " + second);

  global.first_shift = [];
  global.second_shift = [];
}

Shelly.setTimerTrigger(5, pushConsumption);
Shelly.setScheduleTrigger("00:00", [1,2,3,4,5,6,7], sendAndClear);