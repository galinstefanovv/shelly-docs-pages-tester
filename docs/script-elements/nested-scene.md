---
sidebar_position: 7
id: nested-scene
title: What are Nested Scenes?
sidebar_label: Nested Scenes
---

A Nested Scene is a Scene that is called/controlled from a Script, instead of being triggered only by its own triggers. It lets you build automations in layers:

- **parent** - one automation that decides when something should happen.
- **child** - automation that runs and provides reusable actions.

This allows you to use scenes in the code. A variable for the scene is created.

```js
var bedtimeLightsOff = Shelly.getScene("x");
```

:::info
See the full list of available scene actions [here](https://docs.sp.infn.dev/actions/scene-action/)
:::

## More examples

- **[Automation for cooking](https://docs.sp.infn.dev/appendix/examples-list/active-time/automation-for-cooking)**

For creation through the UI, see this **[page](https://docs.sp.infn.dev/ui-and-snippets/script-editor/snippets/#nested-scenes)**.

<!-- <img src="/img/script-editor/script-page-add-nested-scene.png" alt="Script page add nested scene" width="600" /> -->
