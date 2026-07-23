# Self-hosted browser automation

Flyto2 Flow provides **self-hosted browser automation** that records interactions, converts them into editable workflow steps, runs them in the local workspace, and keeps screenshots and execution evidence beside the run.

## Working loop

1. Open the recorder and enter the target URL.
2. Interact with the browser while Flow captures supported actions.
3. Review selectors, values, waits, screenshots, and generated assertions.
4. Add API, file, data, approval, or notification steps in the visual editor.
5. Run the workflow and inspect each step before scheduling or publishing it.

Recorded steps are a starting point, not a guarantee of long-term stability. Prefer selectors tied to accessible names or stable application identifiers, and test navigation, empty-state, timeout, and authentication failures.

## Local browser surface

The Flow UI uses a same-origin browser stream for the local workspace. Browser frames and input events stay within that workspace by default. Treat any remote browser exposure as privileged access and put it behind reviewed authentication and network controls.

## Evidence to keep

- The workflow revision that ran
- Inputs and non-secret environment references
- Step status and timing
- Screenshots around important state changes
- Assertions that explain why the run passed
- The failing selector, URL, and error when it did not

Do not place passwords, session tokens, personal data, or private customer content in workflow examples, screenshots, logs, or issue reports.

## Choose the right layer

Use Flow when you want recording, visual editing, execution history, and operator review. Use the [browser module reference](/modules/browser) or [`flyto-core`](/core/) directly when the workflow is maintained as code or YAML.

See the [Flow browser automation product page](https://flyto2.com/flow/browser-automation/) and [browser automation guides](https://blog.flyto2.com/flow/).
