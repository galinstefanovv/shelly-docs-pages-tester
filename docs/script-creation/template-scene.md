---
sidebar_position: 3
id: creating-a-script
title: Creating a Script
sidebar_label: Creating a Script
---
Scripts can be created in three ways: from a template, from scratch or by converting an existing Manual Scene.

## Create from Template

Script templates are fully working, pre‑built automations designed to help you create reliable scripts with almost no effort. They are not simple examples or code samples - each template contains a complete, tested implementation that follows best practices and handles the scenario in an optimal way.

When creating a script from a template, you only need to select your devices and set the required parameters through the UI. The system automatically applies the correct logic, conditions and timing, so the script is ready to run immediately without any manual editing. Advanced users can still open the script, extend it or adapt it to more complex needs, but this is optional.

Templates are also a great starting point for building more advanced automations. They show how common scenarios are implemented correctly and provide a solid foundation that you can expand on.

If you want to see how a template is represented in a script, take a look at this **[example](https://docs.sp.infn.dev/appendix/examples-list/parameters/bedroom-temp-ac-control)**.

For creation through the UI, see this **[page](https://docs.sp.infn.dev/ui-and-snippets/scene-script-creation/script-templates)**.

## Create from Scratch

A **Custom Script Scene** is the most advanced and flexible way to create automation. It provides a blank script in the editor, allowing you to build fully custom logic. Unlike predefined templates or the UI Scene builder, it starts as pure JavaScript, allowing you to implement behavior that is fully customized, conditional or dynamic.

When creating a Custom Script Scene, an empty script is generated. This structure gives you full control over how and when your automation runs, making it ideal for scenarios where built-in scenes or templates are not sufficient.

For more details about the scripting environment used to write and manage scene logic, see the **[Script Editor](https://docs.sp.infn.dev/ui-and-snippets/script-editor/overview)** section. It provides an overview of the editor interface, the structure of script-based scenes and the functions.

For creation through the UI, see this **[page](https://docs.sp.infn.dev/ui-and-snippets/scene-script-creation/script-custom)**.

## Converting a Scene

Scenes created through the UI can be converted into Scripts when more advanced logic is needed - such as variables, loops or additional conditional structures.

To convert a Scene into a Script, you must start with a Manual Scene. Scenes created from templates or empty Scripts are already script-based and do not require conversion. Manual Scenes are the UI‑based, no‑code automations created through the visual editor.

:::info
Only Manual Scenes can be converted.
:::