# Verify

Visual verification, Figma comparison, style capture, and report generation.

**9 modules**

| Module | Description |
|--------|-------------|
| [Screenshot annotieren](#screenshot-annotieren) | Markieren Sie Unterschiede auf Screenshots mit beschrifteten Begrenzungsrahmen |
| [Elementstile erfassen](#elementstile-erfassen) | Erfassen Sie berechnete Stile von Browserelementen |
| [Stile vergleichen](#stile-vergleichen) | Vergleichen Sie erfasste Stile mit erwarteten Werten |
| [Figma-Stil abrufen](#figma-stil-abrufen) | Design-Tokens von der Figma API abrufen (Token bleibt lokal) |
| [Bericht erstellen](#bericht-erstellen) | Verifizierungsbericht in HTML/JSON/Markdown erstellen |
| [Regelsatz laden](#regelsatz-laden) | Verifizierungsregeln aus YAML-Datei laden |
| [Verifizierung durchführen](#verifizierung-durchführen) | Komplette Design-Verifizierung durchführen: erfassen → vergleichen → Bericht |
| [Spezifikationsverifizierung durchführen](#spezifikationsverifizierung-durchführen) | Dynamische Spezifikationsverifizierung - beliebige Module über YAML zusammensetzen |
| [Visueller Vergleich](#visueller-vergleich) | Vergleichen Sie das Referenzdesign visuell mit der Entwicklungsseite und markieren Sie Unterschiede |

## Modules

### Screenshot annotieren

`verify.annotate`

Markieren Sie Unterschiede auf Screenshots mit beschrifteten Begrenzungsrahmen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Pfad zum Screenshot-Bild |
| `annotations` | array | Yes | - | Array von Anmerkungen: [{label, x, y, width, height, color?, description?}] |
| `output_path` | string | No | - | Ausgabepfad für annotiertes Bild (Standard: fügt _annotated Suffix hinzu) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Pfad zum annotierten Bild |
| `annotation_count` | integer | Anzahl der gezeichneten Anmerkungen |

### Elementstile erfassen

`verify.capture`

Erfassen Sie berechnete Stile von Browserelementen

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

### Stile vergleichen

`verify.compare`

Vergleichen Sie erfasste Stile mit erwarteten Werten

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

### Figma-Stil abrufen

`verify.figma`

Design-Tokens von der Figma API abrufen (Token bleibt lokal)

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

### Bericht erstellen

`verify.report`

Verifizierungsbericht in HTML/JSON/Markdown erstellen

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

### Regelsatz laden

`verify.ruleset`

Verifizierungsregeln aus YAML-Datei laden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to YAML ruleset file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ruleset` | object | Parsed ruleset |
| `rules_count` | integer | Number of rules |

### Verifizierung durchführen

`verify.run`

Komplette Design-Verifizierung durchführen: erfassen → vergleichen → Bericht

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

### Spezifikationsverifizierung durchführen

`verify.spec`

Dynamische Spezifikationsverifizierung - beliebige Module über YAML zusammensetzen

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

### Visueller Vergleich

`verify.visual_diff`

Vergleichen Sie das Referenzdesign visuell mit der Entwicklungsseite und markieren Sie Unterschiede

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `reference_url` | string | Yes | - | URL oder lokaler Bildpfad des Referenzdesigns |
| `dev_url` | string | Yes | - | URL der zu vergleichenden Entwicklungsseite |
| `output_dir` | string | No | `./verify-reports/visual-diff` | Ausgabeverzeichnis für Berichte |
| `focus_areas` | array | No | - | Bereiche, auf die fokussiert werden soll (z.B. ["header", "login form"]) |
| `viewport_width` | number | No | `1280` | Breite des Browser-Viewports |
| `viewport_height` | number | No | `800` | Höhe des Browser-Viewports |
| `model` | string | No | `gpt-4o` | Zu verwendendes Vision-Modell |
| `api_key` | string | No | - | OpenAI API-Schlüssel (oder verwenden Sie die Umgebungsvariable OPENAI_API_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `similarity_score` | number | Ähnlichkeitsprozentsatz (0-100) |
| `annotations` | array | Liste der annotierten Unterschiede |
| `annotated_image` | string | Pfad zum annotierten Screenshot |
| `report_path` | string | Pfad zum HTML-Bericht |
| `summary` | string | Zusammenfassung der Unterschiede |
