# Verify

Visual verification, Figma comparison, style capture, and report generation.

**9 modules**

| Module | Description |
|--------|-------------|
| [Anotar Captura](#anotar-captura) | Dibuja cuadros delimitadores etiquetados en capturas de pantalla para marcar diferencias |
| [Capturar Estilos del Elemento](#capturar-estilos-del-elemento) | Captura estilos calculados del elemento del navegador |
| [Comparar Estilos](#comparar-estilos) | Compara los estilos capturados con los valores esperados |
| [Obtener Estilo de Figma](#obtener-estilo-de-figma) | Obtén tokens de diseño desde la API de Figma (el token permanece local) |
| [Generar Informe](#generar-informe) | Genera un informe de verificación en HTML/JSON/Markdown |
| [Cargar Conjunto de Reglas](#cargar-conjunto-de-reglas) | Carga reglas de verificación desde un archivo YAML |
| [Ejecutar Verificación](#ejecutar-verificación) | Ejecuta verificación de diseño completa: capturar → comparar → informar |
| [Ejecutar Verificación de Especificaciones](#ejecutar-verificación-de-especificaciones) | Verificación de especificaciones dinámicas - compón cualquier módulo a través de YAML |
| [Diferencia Visual](#diferencia-visual) | Compara visualmente el diseño de referencia con el sitio de desarrollo, anota diferencias |

## Modules

### Anotar Captura

`verify.annotate`

Dibuja cuadros delimitadores etiquetados en capturas de pantalla para marcar diferencias

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Ruta a la imagen de la captura de pantalla |
| `annotations` | array | Yes | - | Arreglo de anotaciones: [{label, x, y, width, height, color?, description?}] |
| `output_path` | string | No | - | Ruta de salida para la imagen anotada (por defecto: añade sufijo _annotated) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Ruta a la imagen anotada |
| `annotation_count` | integer | Número de anotaciones dibujadas |

### Capturar Estilos del Elemento

`verify.capture`

Captura estilos calculados del elemento del navegador

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

### Comparar Estilos

`verify.compare`

Compara los estilos capturados con los valores esperados

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

### Obtener Estilo de Figma

`verify.figma`

Obtén tokens de diseño desde la API de Figma (el token permanece local)

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

### Generar Informe

`verify.report`

Genera un informe de verificación en HTML/JSON/Markdown

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

### Cargar Conjunto de Reglas

`verify.ruleset`

Carga reglas de verificación desde un archivo YAML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to YAML ruleset file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ruleset` | object | Parsed ruleset |
| `rules_count` | integer | Number of rules |

### Ejecutar Verificación

`verify.run`

Ejecuta verificación de diseño completa: capturar → comparar → informar

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

### Ejecutar Verificación de Especificaciones

`verify.spec`

Verificación de especificaciones dinámicas - compón cualquier módulo a través de YAML

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

### Diferencia Visual

`verify.visual_diff`

Compara visualmente el diseño de referencia con el sitio de desarrollo, anota diferencias

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `reference_url` | string | Yes | - | URL o ruta local de la imagen de diseño de referencia |
| `dev_url` | string | Yes | - | URL del sitio de desarrollo para comparar |
| `output_dir` | string | No | `./verify-reports/visual-diff` | Directorio de salida para informes |
| `focus_areas` | array | No | - | Áreas a enfocar (ej. ["encabezado", "formulario de inicio de sesión"]) |
| `viewport_width` | number | No | `1280` | Ancho del viewport del navegador |
| `viewport_height` | number | No | `800` | Altura del viewport del navegador |
| `model` | string | No | `gpt-4o` | Modelo de visión a usar |
| `api_key` | string | No | - | Clave API de OpenAI (o usa la variable de entorno OPENAI_API_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `similarity_score` | number | Porcentaje de similitud (0-100) |
| `annotations` | array | Lista de diferencias anotadas |
| `annotated_image` | string | Ruta a la captura de pantalla anotada |
| `report_path` | string | Ruta al informe HTML |
| `summary` | string | Resumen de diferencias |
