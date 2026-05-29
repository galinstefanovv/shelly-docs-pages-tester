---
sidebar_position: 3
id: device-scripts
title: Device vs Cloud Scripts
sidebar_label: Device vs Cloud Scripts
---

Device Scripts run directly on a specific Shelly device. Unlike cloud-based Script, they execute locally, providing fast response times and reliable operation even without an internet connection.

Because they operate on the device itself, they can access only that device’s inputs, outputs and sensors. This makes them ideal for precise, device-level logic that must react instantly to local events such as button presses, relay state changes, motion detection or sensor readings.

| **Feature**              | **Device Scripts**          | **Cloud Script**                      |
| ------------------------ | --------------------------- | -------------------------------------- |
| **_Execution location_** | On the device               | In the cloud                           |
| **_Access to devices_**  | Only the local device       | All active devices in the user profile |
| **_Reaction to events_** | Local device events         | Events from any device                 |
| **_Commands_**           | Only to the local device    | To any device or device group          |
| **_Weather data_**       | Not available               | Available                              |
| **_Sunrise/sunset_**     | Not available               | Available                              |
| **_Global variables_**   | Not available               | Available                              |
| **_Offline operation_**  | Works without internet      | Required cloud connectivity            |
| **_Best for_**           | Fast, device-specific logic | Whole home, multi-device logic         |
