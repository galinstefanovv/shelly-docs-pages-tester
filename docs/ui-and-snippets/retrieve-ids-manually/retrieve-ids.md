---
sidebar_position: 12
---

# Retrieving the IDs manually

Sometimes you need IDs for Scripts or advanced integrations. You can get them directly from the app/device screens without any tools.

What IDs you may need:

- **Device ID** - string

```javascript
Shelly.getDevice("x");
```

- **Group ID** - integer

```javascript
Shelly.getGroup(xxx);
```

- **Scene ID** - string

```javascript
Shelly.getScene("x");
```

## Device ID

To interact with a specific device, you must first obtain its unique identifier, known as the **Device ID**. This ID is required for all device-specific operations.

### Access via web interface

- Navigate to the **All Devices** tab in the Shelly Control dashboard.
- Select the desired device from the list.
- In the device detail panel (on the right side), locate the field labeled Device ID.
- Copy the value displayed. This is the unique identifier.

<img src="/img/script-editor/get-device-id.png" alt="Retrieve Device ID" width="600" />

### Usage notes

- The Device ID is globally unique within your account.
- It remains constant unless the device is removed and re-added.
- Device IDs are case-sensitive and must be used exactly as returned.

## Device ID from a Group

In Shelly Control, devices can be organized into logical groups to simplify management and access. To retrieve the unique identifier (Device ID) of a specific device within a group, follow the structured navigation flow described below.

### Step-by-step access flow

**1. Select a Group** -
Navigate to the All Groups section in the Shelly Control interface. From the list of available groups, select the group that contains the target device. Each group represents a collection of devices logically grouped by location, function or user-defined criteria.

**2. View Devices in the Group** -
Once a group is selected, the interface displays all devices assigned to that group. Each device is represented by a card showing its name, status and basic controls.

**3. Select a Device** -
Click on the desired device within the group to open its detailed view. This action brings up the device-specific configuration panel, displayed on the right side of the interface.

**4. Access Device settings** -
Within the device detail panel, locate and open the Settings section. This area provides access to advanced configuration options, firmware details, network parameters and system metadata.

**5. Locate the Device ID** -
In the settings panel, locate the field labeled Device ID. This field contains the globally unique identifier for the selected device. The Device ID is required for all operations targeting this device.

<img src="/img/script-editor/get-device-id-group.png" alt="Retrieve Device ID from a Group" width="600" />

<img src="/img/script-editor/get-device-id-group-2.png" alt="Retrieve Device ID from a Group" width="600" />

### Usage notes

- Device IDs are case-sensitive and must be used exactly as displayed.
- The Device ID remains constant unless the device is removed and re-added to the system.
- Devices may also display additional identifiers such as MAC address, IP address and model number, which can be useful for diagnostics.

## Scene ID

To perform operations on a specific Scene you must first obtain its unique identifier, referred to as the **Scene ID**. This identifier is required for all scene-related interactions.

### Access via UI

- Navigate to the **All Scenes** tab in the Shelly Control dashboard.
- Locate and select the desired scene from the list of available Scenes.
- In the Scene detail panel (displayed on the right side), locate the field labeled Scene ID.
- Copy the value shown. This is the unique identifier.

<img src="/img/script-editor/get-scene-id.png" alt="Retrieve Scene ID" width="600" />

### Usage notes

- The Scene ID is unique within your account and remains constant unless the scene is deleted and recreated.
- Scene IDs are case-sensitive and must be used exactly as returned.
