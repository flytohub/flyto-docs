# Workflow evidence and replay

Flyto2 **workflow evidence and replay** stores local execution history and step evidence so an operator can inspect what happened, reproduce a run, and compare the result with the original.

## Evidence and replay are different

**Evidence** records the inputs, state transitions, outputs, screenshots, and errors associated with an execution. **Replay** uses recorded execution state to run the workflow or a selected step again.

A successful replay shows that the workflow can reproduce an outcome under the current environment. It does not prove who authored the original workflow, guarantee that an external website is unchanged, or turn a schema fingerprint into a signature.

## Investigation sequence

1. Select the execution from local history.
2. Find the first failing or divergent step.
3. Review its inputs, output, error, screenshot, and upstream state.
4. Confirm that required secrets and external services are available.
5. Replay the smallest useful scope.
6. Compare the new evidence with the original before accepting the result.

## Reliability practices

- Version breaking workflow and MCP contract changes.
- Keep assertions close to the state they validate.
- Avoid relying on timing alone when a visible or API state can be checked.
- Preserve the original evidence before debugging changes.
- Record environmental limitations and external dependencies.
- Require an operator checkpoint before replaying irreversible actions.

For the underlying runtime model, read [`flyto-core` evidence and replay](/core/evidence-replay). To publish a reviewed workflow to an agent, continue with the [Visual MCP Builder](/flow/mcp-builder).
