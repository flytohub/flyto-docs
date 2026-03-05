# Verify

Visual verification, Figma comparison, style capture, and report generation.

**9 modules**

| Module | Description |
|--------|-------------|
| [Chú thích Ảnh chụp màn hình](#chú-thích-ảnh-chụp-màn-hình) | Vẽ các hộp có nhãn trên ảnh chụp màn hình để đánh dấu sự khác biệt |
| [Chụp Kiểu Phần Tử](#chụp-kiểu-phần-tử) | Chụp các kiểu đã tính toán từ phần tử trình duyệt |
| [So Sánh Kiểu](#so-sánh-kiểu) | So sánh các kiểu đã chụp với giá trị mong đợi |
| [Lấy Kiểu Figma](#lấy-kiểu-figma) | Lấy token thiết kế từ Figma API (token giữ cục bộ) |
| [Tạo Báo Cáo](#tạo-báo-cáo) | Tạo báo cáo xác minh dưới dạng HTML/JSON/Markdown |
| [Tải Bộ Quy Tắc](#tải-bộ-quy-tắc) | Tải quy tắc xác minh từ tệp YAML |
| [Chạy Xác Minh](#chạy-xác-minh) | Chạy xác minh thiết kế đầy đủ: chụp → so sánh → báo cáo |
| [Chạy Xác Minh Đặc Tả](#chạy-xác-minh-đặc-tả) | Xác minh đặc tả động - kết hợp bất kỳ mô-đun nào qua YAML |
| [So sánh Hình ảnh](#so-sánh-hình-ảnh) | So sánh thiết kế tham chiếu với trang phát triển trực quan, chú thích sự khác biệt |

## Modules

### Chú thích Ảnh chụp màn hình

`verify.annotate`

Vẽ các hộp có nhãn trên ảnh chụp màn hình để đánh dấu sự khác biệt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Đường dẫn đến hình ảnh chụp màn hình |
| `annotations` | array | Yes | - | Mảng chú thích: [{label, x, y, width, height, color?, description?}] |
| `output_path` | string | No | - | Đường dẫn đầu ra cho hình ảnh đã chú thích (mặc định: thêm hậu tố _annotated) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Đường dẫn đến hình ảnh đã chú thích |
| `annotation_count` | integer | Số lượng chú thích đã vẽ |

### Chụp Kiểu Phần Tử

`verify.capture`

Chụp các kiểu đã tính toán từ phần tử trình duyệt

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

### So Sánh Kiểu

`verify.compare`

So sánh các kiểu đã chụp với giá trị mong đợi

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

### Lấy Kiểu Figma

`verify.figma`

Lấy token thiết kế từ Figma API (token giữ cục bộ)

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

### Tạo Báo Cáo

`verify.report`

Tạo báo cáo xác minh dưới dạng HTML/JSON/Markdown

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

### Tải Bộ Quy Tắc

`verify.ruleset`

Tải quy tắc xác minh từ tệp YAML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to YAML ruleset file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ruleset` | object | Parsed ruleset |
| `rules_count` | integer | Number of rules |

### Chạy Xác Minh

`verify.run`

Chạy xác minh thiết kế đầy đủ: chụp → so sánh → báo cáo

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

### Chạy Xác Minh Đặc Tả

`verify.spec`

Xác minh đặc tả động - kết hợp bất kỳ mô-đun nào qua YAML

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

### So sánh Hình ảnh

`verify.visual_diff`

So sánh thiết kế tham chiếu với trang phát triển trực quan, chú thích sự khác biệt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `reference_url` | string | Yes | - | URL hoặc đường dẫn hình ảnh cục bộ của thiết kế tham chiếu |
| `dev_url` | string | Yes | - | URL của trang phát triển để so sánh |
| `output_dir` | string | No | `./verify-reports/visual-diff` | Thư mục đầu ra cho các báo cáo |
| `focus_areas` | array | No | - | Khu vực cần tập trung (ví dụ: ["header", "login form"]) |
| `viewport_width` | number | No | `1280` | Chiều rộng khung nhìn trình duyệt |
| `viewport_height` | number | No | `800` | Chiều cao khung nhìn trình duyệt |
| `model` | string | No | `gpt-4o` | Mô hình thị giác để sử dụng |
| `api_key` | string | No | - | Khóa API OpenAI (hoặc sử dụng biến môi trường OPENAI_API_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `similarity_score` | number | Tỷ lệ tương đồng (0-100) |
| `annotations` | array | Danh sách các sự khác biệt đã chú thích |
| `annotated_image` | string | Đường dẫn đến ảnh chụp màn hình đã chú thích |
| `report_path` | string | Đường dẫn đến báo cáo HTML |
| `summary` | string | Tóm tắt các sự khác biệt |
