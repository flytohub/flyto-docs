# Verify

Visual verification, Figma comparison, style capture, and report generation.

**9 modules**

| Module | Description |
|--------|-------------|
| [Annoter la Capture d'écran](#annoter-la-capture-d'écran) | Dessinez des boîtes de délimitation étiquetées sur les captures d'écran pour marquer les différences |
| [Capturer les styles de l'élément](#capturer-les-styles-de-l'élément) | Capturer les styles calculés à partir d'un élément du navigateur |
| [Comparer les styles](#comparer-les-styles) | Comparer les styles capturés avec les valeurs attendues |
| [Récupérer le style Figma](#récupérer-le-style-figma) | Récupérer les tokens de design depuis l'API Figma (le token reste local) |
| [Générer le rapport](#générer-le-rapport) | Générer un rapport de vérification en HTML/JSON/Markdown |
| [Charger le jeu de règles](#charger-le-jeu-de-règles) | Charger les règles de vérification depuis un fichier YAML |
| [Exécuter la vérification](#exécuter-la-vérification) | Exécuter la vérification complète du design : capture → comparaison → rapport |
| [Exécuter la vérification des spécifications](#exécuter-la-vérification-des-spécifications) | Vérification dynamique des spécifications - composer n'importe quel module via YAML |
| [Différence Visuelle](#différence-visuelle) | Comparez visuellement le design de référence avec le site de développement, annotez les différences |

## Modules

### Annoter la Capture d'écran

`verify.annotate`

Dessinez des boîtes de délimitation étiquetées sur les captures d'écran pour marquer les différences

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Chemin vers l'image de la capture d'écran |
| `annotations` | array | Yes | - | Tableau d'annotations : [{label, x, y, largeur, hauteur, couleur?, description?}] |
| `output_path` | string | No | - | Chemin de sortie pour l'image annotée (par défaut : ajoute le suffixe _annotated) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Chemin vers l'image annotée |
| `annotation_count` | integer | Nombre d'annotations dessinées |

### Capturer les styles de l'élément

`verify.capture`

Capturer les styles calculés à partir d'un élément du navigateur

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

### Comparer les styles

`verify.compare`

Comparer les styles capturés avec les valeurs attendues

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

### Récupérer le style Figma

`verify.figma`

Récupérer les tokens de design depuis l'API Figma (le token reste local)

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

### Générer le rapport

`verify.report`

Générer un rapport de vérification en HTML/JSON/Markdown

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

### Charger le jeu de règles

`verify.ruleset`

Charger les règles de vérification depuis un fichier YAML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to YAML ruleset file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ruleset` | object | Parsed ruleset |
| `rules_count` | integer | Number of rules |

### Exécuter la vérification

`verify.run`

Exécuter la vérification complète du design : capture → comparaison → rapport

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

### Exécuter la vérification des spécifications

`verify.spec`

Vérification dynamique des spécifications - composer n'importe quel module via YAML

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

### Différence Visuelle

`verify.visual_diff`

Comparez visuellement le design de référence avec le site de développement, annotez les différences

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `reference_url` | string | Yes | - | URL ou chemin local de l'image de référence |
| `dev_url` | string | Yes | - | URL du site de développement à comparer |
| `output_dir` | string | No | `./verify-reports/visual-diff` | Répertoire de sortie pour les rapports |
| `focus_areas` | array | No | - | Zones à focaliser (par ex. ["en-tête", "formulaire de connexion"]) |
| `viewport_width` | number | No | `1280` | Largeur de la fenêtre du navigateur |
| `viewport_height` | number | No | `800` | Hauteur de la fenêtre du navigateur |
| `model` | string | No | `gpt-4o` | Modèle de vision à utiliser |
| `api_key` | string | No | - | Clé API OpenAI (ou utilisez la variable d'environnement OPENAI_API_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `similarity_score` | number | Pourcentage de similarité (0-100) |
| `annotations` | array | Liste des différences annotées |
| `annotated_image` | string | Chemin vers la capture d'écran annotée |
| `report_path` | string | Chemin vers le rapport HTML |
| `summary` | string | Résumé des différences |
