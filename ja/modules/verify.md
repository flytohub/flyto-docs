# Verify

Visual verification, Figma comparison, style capture, and report generation.

**9 modules**

| Module | Description |
|--------|-------------|
| [スクリーンショットに注釈](#スクリーンショットに注釈) | スクリーンショットにラベル付きのバウンディングボックスを描いて違いを示す |
| [要素スタイル取得](#要素スタイル取得) | ブラウザ要素から計算されたスタイルを取得 |
| [スタイル比較](#スタイル比較) | 取得したスタイルと期待値を比較 |
| [Figmaスタイル取得](#figmaスタイル取得) | Figma APIからデザイントークンを取得（トークンはローカルに保持） |
| [レポート生成](#レポート生成) | HTML/JSON/Markdownで検証レポートを生成 |
| [ルールセット読み込み](#ルールセット読み込み) | YAMLファイルから検証ルールを読み込む |
| [検証実行](#検証実行) | デザイン検証をフル実行：取得 → 比較 → レポート |
| [スペック検証実行](#スペック検証実行) | 動的スペック検証 - YAMLでモジュールを組み合わせる |
| [ビジュアル差分](#ビジュアル差分) | 参照デザインと開発サイトを視覚的に比較し、違いに注釈を付ける |

## Modules

### スクリーンショットに注釈

`verify.annotate`

スクリーンショットにラベル付きのバウンディングボックスを描いて違いを示す

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | スクリーンショット画像のパス |
| `annotations` | array | Yes | - | 注釈の配列: [{label, x, y, width, height, color?, description?}] |
| `output_path` | string | No | - | 注釈付き画像の出力パス（デフォルト: _annotatedサフィックスを追加） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | 注釈付き画像のパス |
| `annotation_count` | integer | 描かれた注釈の数 |

### 要素スタイル取得

`verify.capture`

ブラウザ要素から計算されたスタイルを取得

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

### スタイル比較

`verify.compare`

取得したスタイルと期待値を比較

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

### Figmaスタイル取得

`verify.figma`

Figma APIからデザイントークンを取得（トークンはローカルに保持）

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

### レポート生成

`verify.report`

HTML/JSON/Markdownで検証レポートを生成

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

### ルールセット読み込み

`verify.ruleset`

YAMLファイルから検証ルールを読み込む

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to YAML ruleset file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ruleset` | object | Parsed ruleset |
| `rules_count` | integer | Number of rules |

### 検証実行

`verify.run`

デザイン検証をフル実行：取得 → 比較 → レポート

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

### スペック検証実行

`verify.spec`

動的スペック検証 - YAMLでモジュールを組み合わせる

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

### ビジュアル差分

`verify.visual_diff`

参照デザインと開発サイトを視覚的に比較し、違いに注釈を付ける

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `reference_url` | string | Yes | - | 参照デザインのURLまたはローカル画像パス |
| `dev_url` | string | Yes | - | 比較する開発サイトのURL |
| `output_dir` | string | No | `./verify-reports/visual-diff` | レポートの出力ディレクトリ |
| `focus_areas` | array | No | - | 注目するエリア（例: ["ヘッダー", "ログインフォーム"]） |
| `viewport_width` | number | No | `1280` | ブラウザのビューポートの幅 |
| `viewport_height` | number | No | `800` | ブラウザのビューポートの高さ |
| `model` | string | No | `gpt-4o` | 使用するビジョンモデル |
| `api_key` | string | No | - | OpenAI APIキー（またはOPENAI_API_KEY環境変数を使用） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `similarity_score` | number | 類似度のパーセンテージ (0-100) |
| `annotations` | array | 注釈付きの違いのリスト |
| `annotated_image` | string | 注釈付きスクリーンショットのパス |
| `report_path` | string | HTMLレポートのパス |
| `summary` | string | 違いの概要 |
