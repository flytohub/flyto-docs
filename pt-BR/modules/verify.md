# Verify

Visual verification, Figma comparison, style capture, and report generation.

**9 modules**

| Module | Description |
|--------|-------------|
| [Anotar Captura de Tela](#anotar-captura-de-tela) | Desenhe caixas delimitadoras rotuladas nas capturas de tela para marcar diferenças |
| [Capturar Estilos do Elemento](#capturar-estilos-do-elemento) | Capture estilos calculados de um elemento do navegador |
| [Comparar Estilos](#comparar-estilos) | Comparar estilos capturados com valores esperados |
| [Buscar Estilo do Figma](#buscar-estilo-do-figma) | Buscar tokens de design da API do Figma (token permanece local) |
| [Gerar Relatório](#gerar-relatório) | Gerar relatório de verificação em HTML/JSON/Markdown |
| [Carregar Conjunto de Regras](#carregar-conjunto-de-regras) | Carregar regras de verificação de arquivo YAML |
| [Executar Verificação](#executar-verificação) | Executar verificação completa de design: capturar → comparar → relatar |
| [Executar Verificação de Especificação](#executar-verificação-de-especificação) | Verificação dinâmica de especificação - compor qualquer módulo via YAML |
| [Diferença Visual](#diferença-visual) | Compare visualmente o design de referência com o site de desenvolvimento, anotando diferenças |

## Modules

### Anotar Captura de Tela

`verify.annotate`

Desenhe caixas delimitadoras rotuladas nas capturas de tela para marcar diferenças

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Caminho para a imagem da captura de tela |
| `annotations` | array | Yes | - | Array de anotações: [{label, x, y, width, height, color?, description?}] |
| `output_path` | string | No | - | Caminho de saída para a imagem anotada (padrão: adiciona sufixo _annotated) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Caminho para a imagem anotada |
| `annotation_count` | integer | Número de anotações desenhadas |

### Capturar Estilos do Elemento

`verify.capture`

Capture estilos calculados de um elemento do navegador

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

Comparar estilos capturados com valores esperados

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

### Buscar Estilo do Figma

`verify.figma`

Buscar tokens de design da API do Figma (token permanece local)

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

### Gerar Relatório

`verify.report`

Gerar relatório de verificação em HTML/JSON/Markdown

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

### Carregar Conjunto de Regras

`verify.ruleset`

Carregar regras de verificação de arquivo YAML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to YAML ruleset file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ruleset` | object | Parsed ruleset |
| `rules_count` | integer | Number of rules |

### Executar Verificação

`verify.run`

Executar verificação completa de design: capturar → comparar → relatar

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

### Executar Verificação de Especificação

`verify.spec`

Verificação dinâmica de especificação - compor qualquer módulo via YAML

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

### Diferença Visual

`verify.visual_diff`

Compare visualmente o design de referência com o site de desenvolvimento, anotando diferenças

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `reference_url` | string | Yes | - | URL ou caminho local da imagem de design de referência |
| `dev_url` | string | Yes | - | URL do site de desenvolvimento para comparar |
| `output_dir` | string | No | `./verify-reports/visual-diff` | Diretório de saída para relatórios |
| `focus_areas` | array | No | - | Áreas para focar (ex.: ["cabeçalho", "formulário de login"]) |
| `viewport_width` | number | No | `1280` | Largura do viewport do navegador |
| `viewport_height` | number | No | `800` | Altura do viewport do navegador |
| `model` | string | No | `gpt-4o` | Modelo de visão a ser usado |
| `api_key` | string | No | - | Chave da API OpenAI (ou use a variável de ambiente OPENAI_API_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `similarity_score` | number | Porcentagem de similaridade (0-100) |
| `annotations` | array | Lista de diferenças anotadas |
| `annotated_image` | string | Caminho para a captura de tela anotada |
| `report_path` | string | Caminho para o relatório HTML |
| `summary` | string | Resumo das diferenças |
