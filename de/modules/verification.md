# Verification

Deterministic verification primitives for discovery, scenario generation, run evidence, and reports.

**4 modules**

| Module | Description |
|--------|-------------|
| [Verification Discover](#verification-discover) | Build a deterministic site graph from browser state or supplied page snapshots |
| [Verification Generate Scenarios](#verification-generate-scenarios) | Generate replayable Flyto2 YAML scenarios from a deterministic site graph |
| [Verification Report](#verification-report) | Create a deterministic verification evidence pack and optional report file |
| [Verification Run](#verification-run) | Replay generated verification scenarios and return deterministic evidence |

## Modules

### Verification Discover

`verification.discover`

Build a deterministic site graph from browser state or supplied page snapshots

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `target` | string | Yes | - | Target base URL or page URL |
| `pages` | array | No | - | Optional pre-collected page observations |
| `use_browser` | boolean | No | `True` | Read current browser page when available |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean |  |
| `site_graph` | object |  |
| `scores` | object |  |

### Verification Generate Scenarios

`verification.generate_scenarios`

Generate replayable Flyto2 YAML scenarios from a deterministic site graph

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `site_graph` | object | Yes | - | Deterministic site graph |
| `name` | string | No | - | Scenario bundle name |
| `output_format` | string | No | `yaml` | yaml or object |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean |  |
| `scenarios` | object |  |
| `workflow` | string |  |

### Verification Report

`verification.report`

Create a deterministic verification evidence pack and optional report file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `site_graph` | object | No | - |  |
| `scenarios` | object | No | - |  |
| `run_result` | object | No | - |  |
| `artifacts` | object | No | - |  |
| `format` | string | No | `json` | json or markdown |
| `output_path` | string | No | - |  |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean |  |
| `evidence_pack` | object |  |
| `report` | string |  |
| `path` | string |  |

### Verification Run

`verification.run`

Replay generated verification scenarios and return deterministic evidence

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `scenarios` | object | Yes | - | Scenario object with steps |
| `stop_on_failure` | boolean | No | `True` |  |
| `timeout_per_step` | number | No | `30000` |  |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean |  |
| `passed` | number |  |
| `failed` | number |  |
| `results` | array |  |
| `evaluation` | object |  |
