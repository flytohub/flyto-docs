# MCP Tools

flyto-indexer provides 30 MCP tools organized into 7 categories.

## Impact & Dependencies

### impact_analysis

Analyze the blast radius of changing a symbol.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `symbol_id` | string | Yes | Symbol ID (format: `project:path:type:name`) |

Returns: call sites, risk level (`safe`, `low`, `moderate`, `high`), affected files.

### find_references

Find all call sites for a symbol.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `symbol_id` | string | Yes | Symbol ID to search for |

Returns: list of references with file, line number, and confidence.

### dependency_graph

Get import and dependent relationships for a file.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | File to analyze |
| `direction` | string | No | `both` | `imports`, `dependents`, or `both` |
| `max_depth` | number | No | `2` | Traversal depth |

### cross_project_impact

Track API usage across multiple repositories.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `symbol_name` | string | Yes | Symbol name to search |
| `source_project` | string | No | Filter by source project |

### edit_impact_preview

Preview the impact of a specific edit before making it.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `symbol_id` | string | Yes | Symbol to change |
| `change_type` | string | No | `modify`, `rename`, `delete`, `signature_change`, `add_param` |

### impact_from_diff

Analyze impact from git changes.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `mode` | string | No | `unstaged` | `unstaged`, `staged`, `committed`, `branch` |
| `base` | string | No | - | Base branch for comparison |
| `project` | string | No | - | Project filter |

## Search & Code Access

### search_by_keyword

BM25 semantic search across all indexed symbols.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `query` | string | Yes | - | Search query |
| `symbol_type` | string | No | - | Filter by type |
| `project` | string | No | - | Filter by project |
| `max_results` | number | No | `20` | Max results |
| `include_content` | boolean | No | `false` | Include source code |

### get_symbol_content

Get the full source code of a function or class.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `symbol_id` | string | Yes | Symbol ID |

### get_file_context

Get complete file context including symbols, dependencies, test file, and related files.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | Yes | File path |
| `include_content` | boolean | No | Include source code |

### get_file_info

Get file metadata (purpose, category, keywords, APIs, dependencies).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | Yes | File path |

### get_file_symbols

List all symbols defined in a file.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | Yes | File path |

### fulltext_search

Search through comments, TODOs, and strings.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `query` | string | Yes | - | Search query |
| `search_type` | string | No | `all` | `all`, `todo`, `comment`, `string` |
| `project` | string | No | - | Project filter |
| `max_results` | number | No | `50` | Max results |

## Project Overview

### list_projects

List all indexed projects with symbol and file counts by type.

### list_categories

List all code categories found during indexing.

### list_apis

List API endpoints with cross-language callers (FastAPI decorators + fetch/axios).

## Code Quality

### find_dead_code

Find unreferenced symbols.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `project` | string | No | - | Project filter |
| `symbol_type` | string | No | - | Filter by type |
| `min_lines` | number | No | `5` | Minimum lines to report |

Automatically filters entry points, lifecycle methods, and exports.

### find_complex_functions

Find functions with high complexity scores.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `project` | string | No | - | Project filter |
| `max_results` | number | No | `20` | Max results |
| `min_score` | number | No | `1` | Minimum complexity score |

### find_duplicates

Detect copy-pasted code blocks.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `project` | string | No | - | Project filter |
| `min_lines` | number | No | `6` | Minimum duplicate block size |
| `max_results` | number | No | `20` | Max results |

### security_scan

Scan for security issues (hardcoded secrets, SQL injection, unsafe functions).

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `project` | string | No | - | Project filter |
| `severity` | string | No | - | Filter by severity |
| `max_results` | number | No | `50` | Max results |

### find_stale_files

Find files untouched for a specified period.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `project` | string | No | - | Project filter |
| `stale_days` | number | No | `180` | Days since last modification |
| `max_results` | number | No | `30` | Max results |

### find_todos

Find TODO, FIXME, HACK, and XXX markers.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `project` | string | No | - | Project filter |
| `priority` | string | No | - | `high`, `medium`, or `low` |
| `max_results` | number | No | `100` | Max results |

## Health & Recommendations

### code_health_score

Get a 0-100 health score with A-F grade.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project` | string | No | Project filter |

Evaluates: complexity, dead code, documentation, modularity.

### suggest_refactoring

Get prioritized refactoring suggestions.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `project` | string | No | - | Project filter |
| `max_results` | number | No | `20` | Max suggestions |

### check_and_reindex

Check index freshness and optionally reindex.

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `dry_run` | boolean | No | `true` | Only check, don't reindex |
| `project` | string | No | - | Project filter |
| `auto_reindex` | boolean | No | `false` | Reindex if stale |

## Symbol ID Format

All tools use the format: `project:path:type:name`

Example: `flyto-cloud:src/pages/TopUp.vue:component:TopUp`

### Symbol Types

`file`, `class`, `function`, `method`, `component`, `composable`, `store`, `route`, `api`, `variable`, `type`, `interface`
