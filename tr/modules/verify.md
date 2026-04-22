# Verify

Visual verification, Figma comparison, style capture, and report generation.

**9 modules**

| Module | Description |
|--------|-------------|
| [Annotate Screenshot](#annotate-screenshot) | Draw labeled bounding boxes on screenshots to mark differences |
| [Capture Element Styles](#capture-element-styles) | Capture computed styles from browser element |
| [Compare Styles](#compare-styles) | Compare captured styles with expected values |
| [Fetch Figma Style](#fetch-figma-style) | Fetch design tokens from Figma API (token stays local) |
| [Generate Report](#generate-report) | Generate verification report in HTML/JSON/Markdown |
| [Load Ruleset](#load-ruleset) | Load verification rules from YAML file |
| [Run Verification](#run-verification) | Run full design verification: capture → compare → report |
| [Run Spec Verification](#run-spec-verification) | Dynamic spec verification - compose any modules via YAML |
| [Visual Diff](#visual-diff) | Compare reference design with dev site visually, annotate differences |

## Modules

### Annotate Screenshot

`verify.annotate`

Draw labeled bounding boxes on screenshots to mark differences

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Path to the screenshot image |
| `annotations` | array | Yes | - | Array of annotations: [{label, x, y, width, height, color?, description?}] |
| `output_path` | string | No | - | Output path for annotated image (default: adds _annotated suffix) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Path to annotated image |
| `annotation_count` | integer | Number of annotations drawn |

### Capture Element Styles

`verify.capture`

Capture computed styles from browser element

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to capture from |
| `selector` | string | Yes | - | CSS selector |
| `wait_for` | string | No | - | Wait for selector before capture |
| `viewport_width` | number | No | `1280` | Viewport width |
| `viewport_height` | number | No | `800` | Viewport height |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `element` | object | Captured element with styles |
| `found` | boolean | Whether element was found |

### Compare Styles

`verify.compare`

Compare captured styles with expected values

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | object | Yes | - | Captured element styles (from verify.capture) |
| `expected` | object | Yes | - | Expected styles to compare against |
| `selector` | string | No | - | Selector for reporting |
| `size_tolerance` | number | No | `2.0` | Tolerance for size (px) |
| `spacing_tolerance` | number | No | `2.0` | Tolerance for spacing (px) |
| `font_size_tolerance` | number | No | `1.0` | Tolerance for font size (px) |
| `color_tolerance` | number | No | `5` | Tolerance for color (0-255) |
| `check_typography` | boolean | No | `True` | Check typography |
| `check_colors` | boolean | No | `True` | Check colors |
| `check_spacing` | boolean | No | `True` | Check spacing |
| `check_sizing` | boolean | No | `False` | Check sizing |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Whether comparison passed |
| `violations` | array | List of violations found |
| `error_count` | number | Number of errors |
| `warning_count` | number | Number of warnings |

### Fetch Figma Style

`verify.figma`

Fetch design tokens from Figma API (token stays local)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_id` | string | Yes | - | Figma file key (from URL) |
| `node_id` | string | No | - | Specific node ID to fetch |
| `node_name` | string | No | - | Find node by name |
| `token` | string | No | - | Figma token (or use FIGMA_TOKEN env var) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `node` | object | Figma node data |
| `style` | object | Extracted style |

### Generate Report

`verify.report`

Generate verification report in HTML/JSON/Markdown

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `results` | array | Yes | - | Comparison results from verify.compare |
| `name` | string | No | `verify-report` | Report name |
| `url` | string | No | - | URL that was verified |
| `format` | string | No | `html` | Output format (html, json, markdown, all) |
| `output_dir` | string | No | `./verify-reports` | Output directory |
| `screenshots` | array | No | - | Screenshot paths to include |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `report_path` | string | Path to generated report |
| `summary` | object | Summary statistics |

### Load Ruleset

`verify.ruleset`

Load verification rules from YAML file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to YAML ruleset file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ruleset` | object | Parsed ruleset |
| `rules_count` | integer | Number of rules |

### Run Verification

`verify.run`

Run full design verification: capture → compare → report

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to verify |
| `selectors` | array | No | - | CSS selectors to verify |
| `ruleset_path` | string | No | - | Path to YAML ruleset file |
| `expected_styles` | object | No | - | Expected styles per selector |
| `figma_file_id` | string | No | - | Figma file ID for comparison |
| `figma_token` | string | No | - | Figma token (or FIGMA_TOKEN env) |
| `figma_mapping` | object | No | - | Selector to Figma node mapping |
| `output_dir` | string | No | `./verify-reports` | Output directory |
| `report_format` | string | No | `html` | Report format |
| `take_screenshot` | boolean | No | `True` | Capture screenshot |
| `viewport_width` | number | No | `1280` | Viewport width |
| `viewport_height` | number | No | `800` | Viewport height |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Overall verification passed |
| `summary` | object | Summary statistics |
| `report_path` | string | Path to generated report |

**Example:** Example

```yaml
url: http://localhost:3000
selectors: ["button[type=\"submit\"]", "input[type=\"email\"]"]
```

**Example:** Example

```yaml
url: http://localhost:3000
selectors: ["button.primary"]
figma_file_id: abc123xyz
figma_mapping: {"button.primary": "Primary Button"}
```

**Example:** Example

```yaml
url: http://localhost:3000
ruleset_path: ./design-rules.yaml
```

### Run Spec Verification

`verify.spec`

Dynamic spec verification - compose any modules via YAML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ruleset_path` | string | No | - | Path to YAML ruleset file |
| `ruleset` | object | No | - | Inline ruleset object |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean |  |
| `summary` | object |  |
| `results` | array |  |

### Visual Diff

`verify.visual_diff`

Compare reference design with dev site visually, annotate differences

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `reference_url` | string | Yes | - | URL or local image path of reference design |
| `dev_url` | string | Yes | - | URL of development site to compare |
| `output_dir` | string | No | `./verify-reports/visual-diff` | Output directory for reports |
| `focus_areas` | array | No | - | Areas to focus on (e.g. ["header", "login form"]) |
| `viewport_width` | number | No | `1280` | Browser viewport width |
| `viewport_height` | number | No | `800` | Browser viewport height |
| `model` | string | No | `gpt-4o` | Vision model to use |
| `api_key` | string | No | - | OpenAI API key (or use OPENAI_API_KEY env var) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `similarity_score` | number | Similarity percentage (0-100) |
| `annotations` | array | List of annotated differences |
| `annotated_image` | string | Path to annotated screenshot |
| `report_path` | string | Path to HTML report |
| `summary` | string | Summary of differences |
