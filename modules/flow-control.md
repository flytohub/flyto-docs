# Flow Control

Modules for controlling workflow execution. Branch, loop, parallelize, and orchestrate complex multi-step workflows.

## Entry & Exit

| Module | Description |
|--------|-------------|
| `flow.start` | Workflow entry point |
| `flow.end` | Workflow exit point |
| `flow.trigger` | External trigger to start workflow |

## Branching

| Module | Description |
|--------|-------------|
| `flow.branch` | Conditional branch (if/else) |
| `flow.switch` | Multi-way switch statement |
| `flow.goto` | Jump to a labeled step |

## Loops & Iteration

| Module | Description |
|--------|-------------|
| `flow.loop` | Loop with condition |
| `flow.foreach` | Iterate over array elements |
| `flow.batch` | Process items in batches |

## Parallelism

| Module | Description |
|--------|-------------|
| `flow.parallel` | Execute steps in parallel |
| `flow.fork` | Fork execution into branches |
| `flow.join` | Join parallel branches |
| `flow.merge` | Merge results from branches |

## Subflows & Composition

| Module | Description |
|--------|-------------|
| `flow.subflow` | Invoke a sub-workflow |
| `flow.invoke` | Invoke another workflow by name |
| `flow.container` | Group steps into a container |

## Rate Limiting & Resilience

| Module | Description |
|--------|-------------|
| `flow.rate_limit` | Rate limit step execution |
| `flow.throttle` | Throttle execution frequency |
| `flow.debounce` | Debounce rapid triggers |
| `flow.circuit_breaker` | Circuit breaker for flow steps |
| `flow.retry` | Retry failed steps |

## Error Handling

| Module | Description |
|--------|-------------|
| `flow.error_handle` | Handle errors in workflow |
| `flow.error_workflow_trigger` | Trigger error recovery workflow |
