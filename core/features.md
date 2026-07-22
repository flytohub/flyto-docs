<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Feature Guide

## Capability Map

| Capability | What Core provides | Primary implementation/docs |
|---|---|---|
| Module execution | Schema, policy, timeout, retry, result envelope | [Module Specification](https://github.com/flytohub/flyto-core/blob/main/docs/MODULE_SPECIFICATION.md), [Tool Catalog](/modules/) |
| YAML workflows | Parameters, expressions, step graph, validation | [Workflow Specification](/guide/first-workflow), [DSL](https://github.com/flytohub/flyto-core/blob/main/docs/DSL.md) |
| Trace and evidence | Per-step status, timing, context, artifacts | [Architecture](https://github.com/flytohub/flyto-core/blob/main/docs/architecture-map.md), [API](/core/api) |
| Replay | Resume a saved execution from a selected step | [CLI](/core/cli), [API](/core/api) |
| Browser automation | Navigation, interaction, extraction, screenshots, performance | `browser.*` in [Tool Catalog](/modules/) |
| Data and files | JSON/YAML/CSV/XML, transforms, archives, images, documents | Category tables in [Tool Catalog](/modules/) |
| AI operations | Provider calls, embeddings, vision, tools, agent loops | `ai.*`, `llm.*`, and `api.*` catalog entries |
| Verification | Assertions, visual checks, site graph, evidence packs | [Warroom verification](https://github.com/flytohub/flyto-core/blob/main/docs/warroom-deterministic-verification.md) |
| MCP | stdio and authenticated Streamable HTTP module access | [API](/core/api), [MCP recipe docs](https://github.com/flytohub/flyto-core/blob/main/docs/flyto2-smoke-recipes.md) |
| Plugins | Python entry points and external process protocol | [Plugin SDK](https://github.com/flytohub/flyto-core/blob/main/docs/PLUGIN_SDK.md), [Publishing](https://github.com/flytohub/flyto-core/blob/main/docs/MODULE_PUBLISHING_GUIDE.md) |
| Recipes | 41 packaged workflows with dynamic CLI parameters | [Recipes](/core/reference/recipes) |
| Templates | Remote import/export/push/pull/diff/history | [CLI](/core/cli) |

## Execution Lifecycle

1. A caller chooses a recipe, workflow, or module.
2. The relevant transport parses input and applies authentication.
3. Workflow and module validation resolve schemas, connections, and policy.
4. The engine executes the selected callable with bounded context.
5. Hooks record trace, evidence, checkpoints, metering, or lineage.
6. The transport returns a structured success or error result.
7. Persisted runs can be inspected or replayed from a selected step.

## Module Availability

The public catalog is runtime-discovered, so four related counts have different
meanings:

- 451 modules are active in the checked catalog generation environment.
- 84 categories group that active catalog.
- 466 literal decorator registrations exist in maintained source.
- Additional modules can appear from installed plugins or optional dependencies.

Use `flyto modules --format json` to inspect the active runtime where the
workflow will execute.

## Browser Features

Browser modules cover lifecycle, navigation, tabs, frames, dialogs, cookies,
downloads, selectors, role/text interactions, forms, screenshots, PDF,
performance, accessibility-related inspection, visual snapshots, and challenge
detection. Network destinations still pass outbound policy; browser capability
does not bypass SSRF or private-network rules.

## Verification Features

Deterministic verification can discover observable controls and routes, compile
replay scenarios, execute assertions, capture desktop/mobile evidence, and emit
machine-readable plus Markdown reports. Optional LLM review can summarize the
evidence but does not decide the gate.

## Reference Closure

- [All 451 active module schemas](/modules/)
- [All 466 literal module implementations](/core/reference/registered-modules)
- [All 5,351 maintained Python declarations](/core/reference/python-api)
- [All CLI parsers](/core/reference/cli)
- [All HTTP decorators](/core/reference/http-api)
- [All environment readers and packaged workflow assets](/core/reference/configuration)
