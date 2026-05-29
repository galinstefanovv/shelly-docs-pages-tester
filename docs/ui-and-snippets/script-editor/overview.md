---
sidebar_position: 1
id: overview
title: Write your Script
sidebar_label: Script editor
---

The **Script editor** is the workspace where Script Scenes are written, modified and executed. It provides a clean JavaScript environment that allows you to build fully customized automation logic, extending far beyond what predefined templates or UI‑based Scenes can achieve.

The editor gives you direct control over how your automation behaves, reacts to events and interacts with devices across your Shelly ecosystem.

### Snippets

Snippets are not static templates - each snippet dynamically generates code based on your actual device configuration. The system reads information about your devices, their settings and capabilities and produces ready‑to‑use code.

From the Snippets panel, you can access all base script elements and insert a new object into the current Script, allowing you to reference the selected device as a variable within your Script logic. It does not create a new Script entry on the device itself.

Read more about all snippets **[here](https://docs.sp.infn.dev/category/script-elements)**.

<img src="/img/script-editor/editor-page.png" alt="Script editor and snippets" width="700"/>

> When you are ready, press the **Save** button and your Script will be automatically validated for both syntax and logic **[errors](https://docs.sp.infn.dev/appendix/errors)**.
>
> If no issues are detected, the updated version will be saved successfully.
>
> <img src="/img/script-editor/script-page-save-button.png" alt="Script page save button" width="600"/>
>
> :::note
> You can also change the script name. Save to apply the change.
> :::
>
> <img src="/img/script-editor/script-page-name-field.png" alt="Script page name text field" width="600"/>
