# Warroom

Compatibility modules for Warroom deterministic verification workflows.

**6 modules**

| Module | Description |
|--------|-------------|
| [Warroom Discover](#warroom-discover) | Build a deterministic site graph from browser state or supplied page snapshots |
| [Warroom Generate Scenarios](#warroom-generate-scenarios) | Generate replayable Flyto2 YAML scenarios from a Warroom site graph |
| [Warroom LLM Review](#warroom-llm-review) | Prepare redacted evidence for manual LLM review; never gates by itself |
| [Warroom Public Site Verify](#warroom-public-site-verify) | Evaluate DNS, TLS, route, browser, and SEO/GEO evidence for a public site |
| [Warroom Report](#warroom-report) | Create a deterministic Warroom evidence pack and optional report file |
| [Warroom Run](#warroom-run) | Replay generated Warroom scenarios and return deterministic evidence |

## Modules

### Warroom Discover

`warroom.discover`

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

### Warroom Generate Scenarios

`warroom.generate_scenarios`

Generate replayable Flyto2 YAML scenarios from a Warroom site graph

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `site_graph` | object | Yes | - | Warroom site graph |
| `name` | string | No | - | Scenario bundle name |
| `output_format` | string | No | `yaml` | yaml or object |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean |  |
| `scenarios` | object |  |
| `workflow` | string |  |

### Warroom LLM Review

`warroom.llm_review`

Prepare redacted evidence for manual LLM review; never gates by itself

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `enabled` | boolean | No | `False` |  |
| `evidence_pack` | object | Yes | - |  |
| `question` | string | No | - |  |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean |  |
| `status` | string |  |
| `advisory_only` | boolean |  |
| `redacted_evidence` | object |  |

### Warroom Public Site Verify

`warroom.public_site_verify`

Evaluate DNS, TLS, route, browser, and SEO/GEO evidence for a public site

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `base_url` | string | Yes | - | Public site base URL |
| `observations` | object | Yes | - | Collected DNS/TLS/route/browser/SEO evidence |
| `required_routes` | array | No | - | Expected public routes; defaults to Flyto2 public SEO/GEO routes |
| `generated_at` | string | No | - | Evidence timestamp override |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean |  |
| `contract` | string |  |
| `p0_findings` | number |  |
| `p1_findings` | number |  |
| `route_matrix` | array |  |
| `browser_matrix` | array |  |

### Warroom Report

`warroom.report`

Create a deterministic Warroom evidence pack and optional report file

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

### Warroom Run

`warroom.run`

Replay generated Warroom scenarios and return deterministic evidence

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
