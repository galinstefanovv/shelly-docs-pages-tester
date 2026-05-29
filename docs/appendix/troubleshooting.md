---
sidebar_position: 6
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

# Troubleshooting

This page helps you quickly diagnose and fix common issues with your scripts. It covers the most frequent errors so you can restore normal operation fast and keep automations reliable.

**("The script you provided is invalid.")** - Script can’t be parsed/compiled (syntax/structure error). It won’t start.

```javascript
if (temp > 25   // closing bracket is missing
{
  ac.on = true;
}
```

**("A required device with id `'${deviceId}'` is missing.")** - A referenced deviceId isn’t found/paired/accessible; automation can’t bind to it.

```javascript
Shelly.getDevice("BAD_ID_123");
```

**("Device command `'${deviceName}.${field}'` is invalid.")** - You tried to write a non-existent/unsupported field (e.g., deviceName.field).

```javascript
ac.power = 1; // trying to command a field that doesn’t exist
```

**("Device check `'${deviceName}.${field}'` is invalid.")** - You tried to read/check a non-existent/unsupported field.

```javascript
return tempSensor.tempC > 25; // field name wrong; should be temperature
```

**("Field `'${deviceName}.${field}'` is read-only and cannot be used in a command.")** - Field is status-only; can’t be assigned (command).

```javascript
ac.temperature = 23; // status field, not commandable
```

**("Field `'${deviceName}.${field}'` is write-only and cannot be used in a check.")** - Field can be set but not read back; can’t be used in conditions.

**("Type mismatch for assignment `'${deviceName}.${field}'`: expected `${expectedType}` but got `${actualType}`.")** - Wrong data type assigned (e.g., string instead of boolean/number).

```javascript
ac.on = "true"; // string - expected boolean
```

**("Utility command `'${method}'` does not exist.")** - Utility method name doesn’t exist (typo/unsupported).

```javascript
Shelly.setActiveTimes(...)  // typo; method name wrong; should be setActiveTime
```

**("DeviceTrigger declaration `'${deviceName}.${method}'` does not exist.")** - Trigger method is invalid/unknown.

```javascript
Shelly.setTriggerOnce(tempSensor, "temperature > 25"); // method not supported on that object
```

**("Invalid check `'${field}'` in trigger declaration `'${deviceName}.${method}'`.")** - Trigger references an invalid field for that trigger type.

```javascript
Shelly.setRepeatedTrigger(tempSensor, "on == true"); // temp sensor has no “on”
```

**("Scene device commands exceed the max limit: `${commands}/${limit}`")** - You exceeded the max allowed device commands in one scene/script.

:::note
One scene sets On/Off/brightness for too many devices (e.g., 60+) in one run.
:::

**("Error during js run: ")** - Runtime error while executing (undefined, null, exception). Script stops/fails.

```javascript
return tempSensor.temperature.toFixed(1) > 25; // when temperature is null -> exception
```

**("Failed to convert scene")** - Scene -> script conversion couldn’t map something unsupported.

:::note
Scene uses UI-only features (some notifications/solar logic) that can’t map to script.
:::

**("Initialized DeviceTrigger is different from condition check")** - Trigger doesn’t match logic expected in a condition check.

Initialize a trigger

```javascript
setTriggerOnce(device, "temperature > 30");
```

The condition check is different

```javascript
var condition = device.humidity > 70;

if (condition) {
  Shelly.sendPhoneStandardNotification("alert");
}
```

**("Sunrise and sunset conditions are available only with a premium subscription. Please upgrade your account to use them.")** - Sunrise/sunset (solar) conditions require Premium.

:::note
You cannot add a Solar condition on a non-premium account.
:::

**Scripts are stateless** - This means that each trigger runs the script from the beginning. Because of this, variables are reset on every execution. The only way to preserve state between executions is the global object. For persistent state, you must use `global.counter` instead of a local variable.

```js
var kitchen = Shelly.getDevice("x"); // Kitchen

var counter = 0;

Shelly.setRepeatedTrigger(kitchen, "aPower", () => {
  if (counter === 0) {
    counter = counter + 1;
  } else {
    Shelly.logActivity();
  }
});
```

Here, `counter` is always reset to 0 when the script starts, so the condition `counter === 0` is always true. To keep the value between executions, you must use a global variable.

```js
var kitchen = Shelly.getDevice("x"); // Kitchen

function checkPower() {
  if (typeof global.counter === "undefined") {
    global.counter = 0;
  }

  if (global.counter === 0) {
    global.counter = global.counter + 1;
  } else {
    Shelly.logActivity();
  }
}

Shelly.setRepeatedTrigger(kitchen, "aPower", checkPower);
```

## Shelly scenes - validator exceptions reference
 
Each section below catalogs an error class produced by the scene
validator/runner. Every example is a minimal repro: copy the snippet,
paste it into a script and the validator will surface the documented
error.
 
### Categories

- **[UNSUPPORTED_SYNTAX](#unsupported_syntax)** - Language features the runtime forbids;
- **[JS_RUN_FAILED (syntax)](#js_run_failed---syntax-errors)** - Script does not parse;
- **[JS_RUN_FAILED (runtime)](#js_run_failed---runtime-errors)** - Script parses but blows up at run time;
- **[Scene-validation](#scene-validation-errors)** - Script runs but produces an invalid scene;

## UNSUPPORTED_SYNTAX

The Shelly scene runtime is synchronous and single-pass. Asynchronous primitives, dynamic code evaluation and ad-hoc control structures are rejected at parse time so that a scene's behaviour is fully determined by its declared triggers and actions.

### setTimeout

**Why it fails:**

Timers are not part of the scene model. Delays must be expressed via
trigger metadata (e.g. hold-off, schedule, timer triggers), not via
`setTimeout`, which would imply background execution outside the
trigger/action lifecycle.
 
**Resulting error:** UNSUPPORTED_SYNTAX (setTimeout)

```js
const light1 = Shelly.getDevice("x");
Shelly.setTriggerOnce(light1, "on == false", () => {
    setTimeout(() => { light1.on = true; }, 1000);
});
```

### setInterval 
 
**Why it fails:**

Same reasoning as **[setTimeout](#unsupported_syntax)** - recurring work belongs in `setTimerTrigger` or
`setRepeatedTrigger`, not in a JS interval.

**Resulting error:** UNSUPPORTED_SYNTAX (setInterval)

```js
const light2 = Shelly.getDevice("x");
Shelly.setTriggerOnce(light2, "on == false", () => {
    setInterval(() => { light2.on = true; }, 500);
});
```

### clearTimeout

**Why it fails:**

Timer APIs are blocked wholesale; their cancellation counterparts are
blocked for symmetry.

**Resulting error:** UNSUPPORTED_SYNTAX (clearTimeout)

```js
const light3 = Shelly.getDevice("x");
Shelly.setTriggerOnce(light3, "on == false", () => {
    clearTimeout(1);
    light3.on = true;
});
```

### clearInterval 

**Why it fails:** see **[clearTimeout](#cleartimeout)**.
**Resulting error:** UNSUPPORTED_SYNTAX (clearInterval)

```js
const light4 = Shelly.getDevice("x");
Shelly.setTriggerOnce(light4, "on == false", () => {
    clearInterval(1);
    light4.on = true;
});
```

### eval
 
**Why it fails:**

`eval` allows code to be constructed at runtime, which defeats the
static analysis the scene engine relies on to extract triggers,
conditions, and actions.

**Resulting error:** UNSUPPORTED_SYNTAX (eval)

```js
const light5 = Shelly.getDevice("x");
Shelly.setTriggerOnce(light5, "on == false", () => {
    eval("light5.on = true");
});
```

### new Promise 
 
**Why it fails:**

Promises imply asynchronous resolution. The runtime has no event loop
to drain microtasks, so promise-based code cannot be guaranteed to
complete inside a trigger handler.
 
**Resulting error:** UNSUPPORTED_SYNTAX (Promise)

```js
const light6 = Shelly.getDevice("x");
Shelly.setTriggerOnce(light6, "on == false", () => {
    const p = new Promise((res) => res(1));
    light6.on = true;
});
```

### async function declaration
 
**Why it fails:**
An `async` function returns a Promise - see **[new Promise](#new-promise)**. Handlers must be
plain synchronous functions.
 
**Resulting error:** UNSUPPORTED_SYNTAX (async function)

```js
const light7 = Shelly.getDevice("x");
async function handler7() { light7.on = true; }
Shelly.setTriggerOnce(light7, "on == false", handler7);
```

### async function expression 
 **Why it fails:** see **[async function declaration](#async-function-declaration)**.
 **Resulting error:** UNSUPPORTED_SYNTAX (async function)

```js
const light8 = Shelly.getDevice("x");
Shelly.setTriggerOnce(light8, "on == false", async function () {
    light8.on = true;
});
```

### async arrow function 
 **Why it fails:** see **[async function declaration](#async-function-declaration)**.
 **Resulting error:** UNSUPPORTED_SYNTAX (async arrow)

```js
const light9 = Shelly.getDevice("x");
const handler9 = async () => { light9.on = true; };
Shelly.setTriggerOnce(light9, "on == false", handler9);
```

### await 
**Why it fails:**
`await` is meaningless without an async context, and async contexts
are themselves disallowed (**[async function declaration](#async-function-declaration)**, **[async function expression](#async-function-expression)**, **[async arrow function](#async-arrow-function)**).

**Resulting error:** UNSUPPORTED_SYNTAX (await)

```js
const light10 = Shelly.getDevice("x");
function handler10() {
    await Promise.resolve();
    light10.on = true;
}
Shelly.setTriggerOnce(light10, "on == false", handler10);
```

### init / when / do structure 
**Why it fails:**
The legacy `init`/`when`/`do` template was replaced by the
trigger-registration API (`Shelly.setTriggerOnce`, `setCondition`,
etc.). Scripts using the old skeleton are rejected so users migrate
to the supported model rather than producing scenes with no triggers.
 
**Resulting error:** UNSUPPORTED_SYNTAX (init/when/do)

```js
const light11 = Shelly.getDevice("x");
function when() { 
  return light11.on == false; 
}
function doBlock() { 
  light11.on = true; 
}
```

 
## JS_RUN_FAILED - syntax errors

The script cannot be parsed at all. Validation halts before any
trigger/action analysis runs.

### SyntaxError 
 **Why it fails:**
`function broken(` is unterminated; the parser bails out before the
trigger registration is even reached.

 **Resulting error:** JS_RUN_FAILED (SyntaxError)

```js
const light12 = Shelly.getDevice("x");
function broken(
Shelly.setTriggerOnce(light12, "on == false", broken);
```
 
## JS_RUN_FAILED - runtime errors

The script parses but throws while the validator executes it in the
sandboxed worker. These errors mirror the standard JS error taxonomy.

### Infinite loop outside any handler 
 **Why it fails:**
Top-level code runs during validation. An unbounded `while (true)` at
that level pins the worker until the watchdog kills it.
 
**Resulting error:** JS_RUN_FAILED (timeout / infinite loop)

```js
const light13 = Shelly.getDevice("x");
if (global.counter === undefined) { 
  global.counter = 0; 
}
while (true) { 
  global.counter++; 
}
Shelly.setTriggerOnce(light13, "on == false", () => {
    light13.on = true;
});
```

### Infinite loop inside a handler 
 **Why it fails:**
The validator simulates trigger firings; an unbounded loop in the
handler hangs that simulation and trips the watchdog.
 
**Resulting error:** JS_RUN_FAILED (timeout / infinite loop)

```js
const btn1 = Shelly.getDevice("x");
if (global.counter === undefined) { 
  global.counter = 0; 
}
Shelly.setTriggerOnce(btn1, "pressedOnce", () => {
  while (true) { 
    global.counter++; 
  }
});
```

### Direct recursion -> stack overflow 
**Why it fails:**
Detected statically by `detectRecursion`: a function that calls
itself with no terminating condition will exhaust the stack.
 
**Resulting error:** JS_RUN_FAILED (RangeError: stack overflow)

```js
const btn2 = Shelly.getDevice("x");
function recurse() { 
  recurse(); 
}
Shelly.setTriggerOnce(btn2, "pressedOnce", () => {
    recurse();
});
```

### Mutual recursion -> stack overflow 
 **Why it fails:** same detector as **[Direct recursion -> stack overflow](direct-recursion->stack-overflow)** - `a -> b -> a` cycles indefinitely.
 **Resulting error:** JS_RUN_FAILED (RangeError: stack overflow)

```js
const btn3 = Shelly.getDevice("x");
function a() { 
  b(); 
}
function b() { 
  a(); 
}
Shelly.setTriggerOnce(btn3, "pressedOnce", () => a());
```

### ReferenceError 
**Why it fails:**
`undefinedVariable` is neither declared in the script nor present in
the runtime's known-globals list - caught by
`detectUndeclaredReferences`.

**Resulting error:** JS_RUN_FAILED (ReferenceError: undefinedVariable)

```js
const light14 = Shelly.getDevice("x");
const btn4 = Shelly.getDevice("REAL_DEVICE_ID");
Shelly.setTriggerOnce(btn4, "pressedOnce", () => {
  light14.on = undefinedVariable;
});
```

### TypeError - property assignment on null
**Why it fails:**
`detectNullUndefinedAccess` tracks `const x = null;` and rejects any
member access on `x`. (Mirrors the JS runtime "Cannot set properties
of null" error.)
 
**Resulting error:** JS_RUN_FAILED (TypeError: cannot set property on null)

```js
const btn5 = Shelly.getDevice("x");
Shelly.setTriggerOnce(btn5, "pressedOnce", () => {
  const x = null;
  x.foo = 1;
});
```

### TypeError - calling undefined
**Why it fails:**
Same detector as **[TypeError - property assignment on null](typeerror-property-assignment-on-null)** - `const y = undefined; y()` is statically
flagged as a call on a non-callable.

**Resulting error:** JS_RUN_FAILED (TypeError: y is not a function)

```js
const btn6 = Shelly.getDevice("x");
Shelly.setTriggerOnce(btn6, "pressedOnce", () => {
    const y = undefined;
    y();
});
```

### RangeError - invalid array length 
**Why it fails:**
`detectInvalidArrayLength` rejects `new Array(<negative>)` /
non-integer length - JS itself would throw "Invalid array length".
 
**Resulting error:** JS_RUN_FAILED (RangeError: invalid array length)

```js
const btn7 = Shelly.getDevice("x");
Shelly.setTriggerOnce(btn7, "pressedOnce", () => {
    const arr = new Array(-1);
});
```

### RangeError - toFixed out of range 
**Why it fails:**
`Number.prototype.toFixed` accepts 0–100 fraction digits;
`detectInvalidToFixed` flags arguments outside that range.
 
**Resulting error:** JS_RUN_FAILED (RangeError: toFixed digits)

```js
const btn8 = Shelly.getDevice("x");
Shelly.setTriggerOnce(btn8, "pressedOnce", () => {
    (1).toFixed(101);
});
```

### Explicit throw 
**Why it fails:**
`detectThrowStatement` forbids any `throw` in script bodies - scenes
should declare error states declaratively, not by throwing.

**Resulting error:** JS_RUN_FAILED (THROW_STATEMENT_NOT_ALLOWED)

```js
const btn9 = Shelly.getDevice("x");
Shelly.setTriggerOnce(btn9, "pressedOnce", () => {
    throw new Error("boom");
});
```

### JSON.parse on invalid input 
**Why it fails:**
`detectInvalidJsonParse` evaluates `JSON.parse` calls whose argument
is a string literal. If the literal is not valid JSON, the call is
rejected statically rather than at runtime.
 
**Resulting error:** JS_RUN_FAILED (INVALID_JSON_PARSE)

```js
const btn10 = Shelly.getDevice("x");
Shelly.setTriggerOnce(btn10, "pressedOnce", () => {
    JSON.parse("not json");
});
```
 
## Scene-validation errors

The script runs to completion, but the resulting scene is structurally
invalid: missing pieces, references to unknown devices/fields, or
malformed utility calls.

### SCRIPT_HAS_NO_TRIGGERS 
**Why it fails:**
A scene must declare at least one trigger. This script only mutates a
device at top level, so nothing fires it.

```js
const light15 = Shelly.getDevice("x");
light15.on = true;
```

### SCRIPT_HAS_NO_ACTIONS
**Why it fails:**
The trigger handler is empty - the scene has nothing to do when it
fires, which is almost certainly a mistake.

```js
const btn11 = Shelly.getDevice("x");
Shelly.setTriggerOnce(btn11, "pressedOnce", () => {
});
```

### MISSING_DEVICE 
**Why it fails:**
`phantom` resolves to a device id (`ffffffffffff`) that the user
does not own / does not exist in the account. Referenced devices
must be present at validation time.

```js
const btn12   = Shelly.getDevice("x");
const phantom = Shelly.getDevice("ffffffffffff");
Shelly.setTriggerOnce(btn12, "pressedOnce", () => {
    phantom.on = true;
});
```

### INVALID_DEVICE_COMMAND 
**Why it fails:**
`nonExistent` is not a writable field on this device type. Each
device exposes a fixed schema of commands; assignments outside that
schema are rejected.

```js
const light16 = Shelly.getDevice("x");
const btn13   = Shelly.getDevice("x");
Shelly.setTriggerOnce(btn13, "pressedOnce", () => {
    light16.nonExistent = 42;
});
```

### INVALID_DEVICE_CHECK 
**Why it fails:**
The condition references a field (`nonExistent`) that is not part of
the device's readable schema. Conditions are evaluated against the
real device state, so unknown fields are rejected.

```js
const light17 = Shelly.getDevice("x");
Shelly.setCondition(light17, "nonExistent == true");
Shelly.setTriggerOnce(light17, "on == false", () => {
    light17.on = true;
});
```

### WRITE_ONLY_FIELD_CHECK 
**Why it fails:**
`delay` is a write-only field (it parameterises an action). It has
no observable value, so it cannot appear in a condition.

```js
const light18 = Shelly.getDevice("x");
Shelly.setCondition(light18, "delay == 5");
Shelly.setTriggerOnce(light18, "on == false", () => {
    light18.on = true;
});
```

### INVALID_TRIGGER_CHECK
**Why it fails:**
`nonExistent` is not a valid trigger expression for this device -
triggers are limited to fields/events the device actually emits.

```js
const light19 = Shelly.getDevice("x");
Shelly.setTriggerOnce(light19, "nonExistent == 1", () => {
    light19.on = true;
});
```

### INVALID_UTILITY_COMMAND 
**Why it fails:**
`Shelly.doSomethingCustom` is not in the registered utility-method
set. Only a fixed list of `Shelly.*` helpers is allowed in action
position.

```js
const btn14 = Shelly.getDevice("x");
Shelly.setTriggerOnce(btn14, "pressedOnce", () => {
    Shelly.doSomethingCustom("hi");
});
```

### UNINITIALIZED_GLOBAL 
**Why it fails:**
`global.neverSetAnywhere` is read but never assigned anywhere in the
script. Globals must have at least one writer so the engine knows
their type and initial value.

```js
const light20 = Shelly.getDevice("x");
const btn15   = Shelly.getDevice("x");
Shelly.setTriggerOnce(btn15, "pressedOnce", () => {
  if (global.neverSetAnywhere > 3) {
    light20.on = true;
  }
});
```

### SOLAR_TRIGGER_PREMIUM_FEATURE 
**Why it fails:**
`setSolarTrigger` (sunrise/sunset triggers) is gated behind a
premium plan. Free-tier accounts that use it get a paywall error
instead of silently dropping the trigger.

```js
const light21 = Shelly.getDevice("x");
Shelly.setSolarTrigger("sunset", () => light21.on = true);
```

### Notification - missing required parameters
**Why it fails:**
`sendEmailNotification` requires at minimum a message argument; an
empty call has nothing to send.

```js
const btn16 = Shelly.getDevice("x");
Shelly.setTriggerOnce(btn16, "pressedOnce", () => {
    Shelly.sendEmailNotification();
});
```

### Notification - message argument required 
**Why it fails:**
The single argument here (`"30s"`) is interpreted as a delay-style
value, leaving the required `message` parameter unsupplied.

```js
const btn17 = Shelly.getDevice("x");
Shelly.setTriggerOnce(btn17, "pressedOnce", () => {
    Shelly.sendEmailNotification("30s");
});
```

### Notification - object-literal form removed
**Why it fails:**
The legacy `{ message, delay }` object form is no longer accepted;
notifications now use positional arguments. Scripts using the old
shape are flagged so they get migrated.

```js
const btn18 = Shelly.getDevice("x");
Shelly.setTriggerOnce(btn18, "pressedOnce", () => {
  Shelly.sendEmailNotification({ message: "hi", delay: 5 });
});
```

### Notification - invalid parameter type 
**Why it fails:**
The `message` parameter must be a string. Passing a number is a
type-mismatch and is rejected during validation.

```js
const btn19 = Shelly.getDevice("x");
Shelly.setTriggerOnce(btn19, "pressedOnce", () => {
    Shelly.sendEmailNotification(42);
});
```
