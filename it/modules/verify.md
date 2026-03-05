# Verify

Visual verification, Figma comparison, style capture, and report generation.

**9 modules**

| Module | Description |
|--------|-------------|
| [Annota Screenshot](#annota-screenshot) | Disegna riquadri etichettati sugli screenshot per segnare le differenze |
| [Acquisisci Stili Elemento](#acquisisci-stili-elemento) | Acquisisci stili calcolati dall'elemento del browser |
| [Confronta Stili](#confronta-stili) | Confronta gli stili acquisiti con i valori attesi |
| [Recupera Stile Figma](#recupera-stile-figma) | Recupera i token di design dall'API di Figma (il token rimane locale) |
| [Genera Rapporto](#genera-rapporto) | Genera un rapporto di verifica in HTML/JSON/Markdown |
| [Carica Set di Regole](#carica-set-di-regole) | Carica regole di verifica da un file YAML |
| [Esegui Verifica](#esegui-verifica) | Esegui la verifica completa del design: acquisizione → confronto → rapporto |
| [Esegui Verifica Specifiche](#esegui-verifica-specifiche) | Verifica dinamica delle specifiche - componi qualsiasi modulo tramite YAML |
| [Diff Visivo](#diff-visivo) | Confronta visivamente il design di riferimento con il sito di sviluppo, annota le differenze |

## Modules

### Annota Screenshot

`verify.annotate`

Disegna riquadri etichettati sugli screenshot per segnare le differenze

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Percorso dell'immagine dello screenshot |
| `annotations` | array | Yes | - | Array di annotazioni: [{label, x, y, larghezza, altezza, colore?, descrizione?}] |
| `output_path` | string | No | - | Percorso di output per l'immagine annotata (predefinito: aggiunge suffisso _annotated) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Percorso dell'immagine annotata |
| `annotation_count` | integer | Numero di annotazioni disegnate |

### Acquisisci Stili Elemento

`verify.capture`

Acquisisci stili calcolati dall'elemento del browser

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

### Confronta Stili

`verify.compare`

Confronta gli stili acquisiti con i valori attesi

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

### Recupera Stile Figma

`verify.figma`

Recupera i token di design dall'API di Figma (il token rimane locale)

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

### Genera Rapporto

`verify.report`

Genera un rapporto di verifica in HTML/JSON/Markdown

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

### Carica Set di Regole

`verify.ruleset`

Carica regole di verifica da un file YAML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to YAML ruleset file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ruleset` | object | Parsed ruleset |
| `rules_count` | integer | Number of rules |

### Esegui Verifica

`verify.run`

Esegui la verifica completa del design: acquisizione → confronto → rapporto

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

### Esegui Verifica Specifiche

`verify.spec`

Verifica dinamica delle specifiche - componi qualsiasi modulo tramite YAML

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

### Diff Visivo

`verify.visual_diff`

Confronta visivamente il design di riferimento con il sito di sviluppo, annota le differenze

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `reference_url` | string | Yes | - | URL o percorso locale dell'immagine di riferimento |
| `dev_url` | string | Yes | - | URL del sito di sviluppo da confrontare |
| `output_dir` | string | No | `./verify-reports/visual-diff` | Directory di output per i report |
| `focus_areas` | array | No | - | Aree su cui concentrarsi (es. ["header", "modulo di login"]) |
| `viewport_width` | number | No | `1280` | Larghezza del viewport del browser |
| `viewport_height` | number | No | `800` | Altezza del viewport del browser |
| `model` | string | No | `gpt-4o` | Modello di visione da utilizzare |
| `api_key` | string | No | - | Chiave API OpenAI (o usa la variabile d'ambiente OPENAI_API_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `similarity_score` | number | Percentuale di somiglianza (0-100) |
| `annotations` | array | Elenco delle differenze annotate |
| `annotated_image` | string | Percorso dello screenshot annotato |
| `report_path` | string | Percorso del report HTML |
| `summary` | string | Riepilogo delle differenze |
