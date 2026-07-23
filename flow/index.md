# Flyto2 Flow

Flyto2 Flow is a local-first visual workflow application for building repeatable automation, publishing selected workflows as MCP tools, and inspecting the evidence produced by each run.

Use this section when you want the product workflow. Use the [`flyto-core` documentation](/core/) when you need the underlying Python runtime, YAML contract, module registry, or direct MCP transports.

## Choose an implementation path

| Goal | Documentation |
| --- | --- |
| Turn a visual workflow into an MCP tool | [Visual MCP Builder](/flow/mcp-builder) |
| Record and run browser work locally | [Browser Automation](/flow/browser-automation) |
| Inspect a run or reproduce a failed step | [Evidence and Replay](/flow/evidence-replay) |
| Use the runtime without the Flow UI | [flyto-core](/core/) |

## Product boundary

Flyto2 Flow is source-available under [PolyForm Shield 1.0.0](https://github.com/flytohub/flyto-flow/blob/main/LICENSE). The product uses the open-source [`flyto-core`](https://github.com/flytohub/flyto-core) runtime, which is licensed under Apache 2.0.

The default local workspace does not require a Flyto2 account. That does not make an internet-exposed installation safe by itself. Keep local endpoints on loopback unless you have added reviewed authentication, TLS, network policy, rate limits, and operational monitoring.

## Related resources

- [Flyto2 Flow product overview](https://flyto2.com/flow/)
- [Flow engineering guides](https://blog.flyto2.com/flow/)
- [Source repository](https://github.com/flytohub/flyto-flow)
- [Getting started with the runtime](/guide/getting-started)
