# Verify

Visual verification, Figma comparison, style capture, and report generation.

**9 modules**

| Module | Description |
|--------|-------------|
| [標註截圖](#標註截圖) | 在截圖上畫出標記框以標示差異 |
| [擷取元素樣式](#擷取元素樣式) | 從瀏覽器元素擷取計算樣式 |
| [比較樣式](#比較樣式) | 將擷取的樣式與預期值進行比較 |
| [獲取 Figma 樣式](#獲取-figma-樣式) | 從 Figma API 獲取設計標記（標記保留在本地） |
| [生成報告](#生成報告) | 生成 HTML/JSON/Markdown 格式的驗證報告 |
| [載入規則集](#載入規則集) | 從 YAML 檔案載入驗證規則 |
| [執行驗證](#執行驗證) | 執行完整設計驗證：擷取 → 比較 → 報告 |
| [執行規格驗證](#執行規格驗證) | 動態規格驗證 - 通過 YAML 組合任何模組 |
| [視覺差異](#視覺差異) | 視覺上比較參考設計與開發網站，標註差異 |

## Modules

### 標註截圖

`verify.annotate`

在截圖上畫出標記框以標示差異

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | 截圖圖片的路徑 |
| `annotations` | array | Yes | - | 標註陣列: [{label, x, y, width, height, color?, description?}] |
| `output_path` | string | No | - | 標註後圖片的輸出路徑（預設：加上 _annotated 後綴） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | 標註後圖片的路徑 |
| `annotation_count` | integer | 已畫出的標註數量 |

### 擷取元素樣式

`verify.capture`

從瀏覽器元素擷取計算樣式

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

### 比較樣式

`verify.compare`

將擷取的樣式與預期值進行比較

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

### 獲取 Figma 樣式

`verify.figma`

從 Figma API 獲取設計標記（標記保留在本地）

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

### 生成報告

`verify.report`

生成 HTML/JSON/Markdown 格式的驗證報告

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

### 載入規則集

`verify.ruleset`

從 YAML 檔案載入驗證規則

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to YAML ruleset file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ruleset` | object | Parsed ruleset |
| `rules_count` | integer | Number of rules |

### 執行驗證

`verify.run`

執行完整設計驗證：擷取 → 比較 → 報告

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

### 執行規格驗證

`verify.spec`

動態規格驗證 - 通過 YAML 組合任何模組

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

### 視覺差異

`verify.visual_diff`

視覺上比較參考設計與開發網站，標註差異

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `reference_url` | string | Yes | - | 參考設計的 URL 或本地圖片路徑 |
| `dev_url` | string | Yes | - | 要比較的開發網站 URL |
| `output_dir` | string | No | `./verify-reports/visual-diff` | 報告的輸出目錄 |
| `focus_areas` | array | No | - | 需要關注的區域（例如：["header", "login form"]） |
| `viewport_width` | number | No | `1280` | 瀏覽器視窗寬度 |
| `viewport_height` | number | No | `800` | 瀏覽器視窗高度 |
| `model` | string | No | `gpt-4o` | 使用的視覺模型 |
| `api_key` | string | No | - | OpenAI API 金鑰（或使用 OPENAI_API_KEY 環境變數） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `similarity_score` | number | 相似度百分比 (0-100) |
| `annotations` | array | 標註差異的列表 |
| `annotated_image` | string | 標註後截圖的路徑 |
| `report_path` | string | HTML 報告的路徑 |
| `summary` | string | 差異摘要 |
