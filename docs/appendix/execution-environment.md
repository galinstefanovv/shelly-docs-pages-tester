---
sidebar_position: 7
---

# Execution environment

In Shelly Control, scripts don’t run on the actual devices. They run in a secure cloud environment instead.

- The system gives the script a snapshot of all device states.
- The script processes this information and generates a list of actions.
- After the script finishes, the platform applies those actions to the devices.

This setup keeps everything predictable, safe and isolated, because scripts can’t directly control devices or access the system while they are running.

## Execution model

The execution process follows a strict and predictable sequence:

### Execution flow

1. The platform captures the current state of all devices as a snapshot.
2. The script starts inside the cloud-based Sandbox.
3. The script processes the device snapshot and runs its logic.
4. The script generates a list of actions to be applied.
5. Execution ends and the Sandbox returns the generated actions.
6. The platform applies the actions to the appropriate devices.

Scripts work with a snapshot of device states captured before execution begins. Device states are not updated live while the script is running. Any changes requested by the script are applied only after execution completes.

Scripts never run on the devices themselves. They cannot communicate with devices during execution and cannot directly change any device state.

<img src="/img/execution-environment/sandbox-new.drawio.png" alt="Input, script and output" width="1000" />

## Controlled execution environment

The scripting engine is built to make sure every script runs in a predictable, isolated and secure environment. The Sandbox strictly controls what scripts are allowed to do, how long they can run and how many system resources they can use. These limitations ensure that user‑created scripts cannot disrupt system processes, affect device performance or compromise the stability of the platform.

## Sandbox

All scripts run inside a controlled Sandbox that ensures security, stability and fair use of system resources. The Sandbox keeps scripts isolated from the system and applies strict rules that limit what a script can access or do.

## Environment restrictions

The following limitations apply to all scripts:

- **No filesystem access** - Scripts cannot read or write files in any way.
- **No network access** - Scripts cannot send requests or communicate with external services.
- **No external processes** - Scripts cannot start or interact with system processes or threads.
- **No direct device access** - Scripts cannot communicate with devices during execution. Device actions are queued and applied only after execution completes.
- **Resource limits** - CPU time, memory usage and execution behavior are restricted to keep scripts safe and predictable.
- **No dynamic code loading** - Scripts cannot load or generate code at runtime; features like import or runtime evaluation are not allowed.
- **No timers** - Scripts cannot use in-script timers (`setTimeout`, `setInterval`). Time-based behavior is handled through platform-managed triggers such as `setScheduleTrigger` or `setTimerTrigger`.
- **Asynchronous features** - User-created asynchronous execution is not supported. Scripts must run fully synchronously. Platform-managed trigger handlers are the only supported callback mechanism.

**Unsupported asynchronous mechanisms include:**

- **Promises** - Including `.then()`, `.catch()` and any async/await‑like patterns.
- **Callbacks** - Deferred or user-managed async callbacks are not supported.
- **Delayed** or **scheduled** execution.
- **Parallel** or **background** tasks.

## Automatic termination conditions

The Sandbox constantly monitors scripts to keep the system stable. A script is stopped automatically if it breaks any of the safety limits:

- **Execution time** - If a script runs longer than 100 ms (for example, due to an endless loop), it is stopped.
- **Memory usage** - If a script uses more memory than allowed, it is terminated.
- **Infinite loops** - Scripts are stopped automatically if they run in an endless loop and exceed the allowed execution time.
- **Recursion limits** - Scripts that recurse too deeply are terminated once they reach the maximum recursion depth.

:::warning
If a script repeatedly fails, exceeds runtime limits, or violates Sandbox restrictions, the platform may automatically disable it until it is manually re-enabled.
:::


