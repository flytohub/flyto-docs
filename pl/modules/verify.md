# Verify

Visual verification, Figma comparison, style capture, and report generation.

**9 modules**

| Module | Description |
|--------|-------------|
| [Oznacz zrzut ekranu](#oznacz-zrzut-ekranu) | Rysuj oznaczone ramki na zrzutach ekranu, aby zaznaczyć różnice |
| [Przechwyć style elementu](#przechwyć-style-elementu) | Przechwyć obliczone style z elementu przeglądarki |
| [Porównaj style](#porównaj-style) | Porównaj przechwycone style z oczekiwanymi wartościami |
| [Pobierz styl z Figma](#pobierz-styl-z-figma) | Pobierz tokeny projektowe z Figma API (token pozostaje lokalnie) |
| [Generuj raport](#generuj-raport) | Generuj raport weryfikacji w HTML/JSON/Markdown |
| [Załaduj zestaw zasad](#załaduj-zestaw-zasad) | Załaduj zasady weryfikacji z pliku YAML |
| [Uruchom weryfikację](#uruchom-weryfikację) | Uruchom pełną weryfikację projektu: przechwyć → porównaj → raportuj |
| [Uruchom weryfikację specyfikacji](#uruchom-weryfikację-specyfikacji) | Dynamiczna weryfikacja specyfikacji - skomponuj dowolne moduły za pomocą YAML |
| [Różnica wizualna](#różnica-wizualna) | Porównaj wizualnie projekt referencyjny z witryną deweloperską, oznacz różnice |

## Modules

### Oznacz zrzut ekranu

`verify.annotate`

Rysuj oznaczone ramki na zrzutach ekranu, aby zaznaczyć różnice

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Ścieżka do obrazu zrzutu ekranu |
| `annotations` | array | Yes | - | Tablica adnotacji: [{label, x, y, szerokość, wysokość, kolor?, opis?}] |
| `output_path` | string | No | - | Ścieżka wyjściowa dla oznaczonego obrazu (domyślnie: dodaje sufiks _annotated) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Ścieżka do oznaczonego obrazu |
| `annotation_count` | integer | Liczba narysowanych adnotacji |

### Przechwyć style elementu

`verify.capture`

Przechwyć obliczone style z elementu przeglądarki

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

### Porównaj style

`verify.compare`

Porównaj przechwycone style z oczekiwanymi wartościami

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

### Pobierz styl z Figma

`verify.figma`

Pobierz tokeny projektowe z Figma API (token pozostaje lokalnie)

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

### Generuj raport

`verify.report`

Generuj raport weryfikacji w HTML/JSON/Markdown

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

### Załaduj zestaw zasad

`verify.ruleset`

Załaduj zasady weryfikacji z pliku YAML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to YAML ruleset file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ruleset` | object | Parsed ruleset |
| `rules_count` | integer | Number of rules |

### Uruchom weryfikację

`verify.run`

Uruchom pełną weryfikację projektu: przechwyć → porównaj → raportuj

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

### Uruchom weryfikację specyfikacji

`verify.spec`

Dynamiczna weryfikacja specyfikacji - skomponuj dowolne moduły za pomocą YAML

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

### Różnica wizualna

`verify.visual_diff`

Porównaj wizualnie projekt referencyjny z witryną deweloperską, oznacz różnice

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `reference_url` | string | Yes | - | URL lub lokalna ścieżka obrazu projektu referencyjnego |
| `dev_url` | string | Yes | - | URL witryny deweloperskiej do porównania |
| `output_dir` | string | No | `./verify-reports/visual-diff` | Katalog wyjściowy dla raportów |
| `focus_areas` | array | No | - | Obszary do skupienia się (np. ["nagłówek", "formularz logowania"]) |
| `viewport_width` | number | No | `1280` | Szerokość widoku przeglądarki |
| `viewport_height` | number | No | `800` | Wysokość widoku przeglądarki |
| `model` | string | No | `gpt-4o` | Model wizji do użycia |
| `api_key` | string | No | - | Klucz API OpenAI (lub użyj zmiennej środowiskowej OPENAI_API_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `similarity_score` | number | Procent podobieństwa (0-100) |
| `annotations` | array | Lista oznaczonych różnic |
| `annotated_image` | string | Ścieżka do oznaczonego zrzutu ekranu |
| `report_path` | string | Ścieżka do raportu HTML |
| `summary` | string | Podsumowanie różnic |
