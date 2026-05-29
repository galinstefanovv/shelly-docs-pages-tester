---
sidebar_position: 4
id: errors
title: Common errors
sidebar_label: Common errors
---

## Error categories

Script errors fall into 2 main groups: **preprocessing errors** (caught before the script starts) and **runtime errors** (caught while the script is running).

When a script is saved, it is processed and validated. The system performs multiple checks to ensure the script is correct and safe to run. If any errors are detected during this validation phase, the script is not activated until all issues are resolved. All errors are shown when the script is saved.

## Preprocessing errors

These errors appear **before** the script runs. They happen during validation, parsing or logic checks.

### Syntax / parse errors

Missing brackets, commas or quotes prevent the script from starting.

- **Invalid script** - The script you provided is invalid.
- **Unsupported syntax** - This feature is not allowed in scripts.
- **Failed to convert scene**.

### Device / ID errors

Incorrect device IDs or invalid device operations.

- **Missing device** - A required device is missing.
- **Invalid device command** - Device command is invalid.
- **Invalid device check** - Device check is invalid.
- **Read only field command** - Field is read‑only and cannot be used in a command.
- **Write only field check** - Field is write‑only and cannot be used in a check.
- **Too many commands** - Scene device commands exceed the max limit.

### Logic structure errors

Issues in the script structure that prevent execution.

- **Script has no triggers or actions**.
- **Script has no triggers**.
- **Script has no actions**.
- **Trigger mismatch**.
- **Invalid trigger declaration**.
- **Invalid trigger check**.
- **Solar trigger premium feature**.

## Runtime errors

These errors occur **while the script is running**. The script starts, but something goes wrong during execution. During execution, the system continuously monitors the script to ensure it does not violate sandbox limits. If the script exceeds these limits it is automatically stopped and a runtime error is shown.

### Execution errors

- **Js run failed** - Error during JavaScript run.
- **Uninitialized global** - A global variable is used before being initialized.
- **Command type mismatch** - Type mismatch for assignment `deviceName.field`.

### Timer / event issues

Problems caused by duplicated handlers, infinite loops or overly frequent triggers.

- **Invalid trigger check**.
- **Infinite loops**.
- **Recursion limits**.

When a runtime error occurs, the script is automatically marked as inactive and stops running until it is manually fixed and re‑enabled.

## How to prevent script errors

- **Validate device IDs**.
- **Guard against undefined**.
- **Keep logic simple**.
- **Avoid duplicated listeners**.
- **Test incrementally**.
