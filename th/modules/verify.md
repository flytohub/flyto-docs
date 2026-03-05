# Verify

Visual verification, Figma comparison, style capture, and report generation.

**9 modules**

| Module | Description |
|--------|-------------|
| [ใส่คำอธิบายภาพหน้าจอ](#ใส่คำอธิบายภาพหน้าจอ) | วาดกล่องที่มีป้ายกำกับบนภาพหน้าจอเพื่อระบุความแตกต่าง |
| [จับภาพสไตล์องค์ประกอบ](#จับภาพสไตล์องค์ประกอบ) | จับภาพสไตล์ที่คำนวณจากองค์ประกอบในเบราว์เซอร์ |
| [เปรียบเทียบสไตล์](#เปรียบเทียบสไตล์) | เปรียบเทียบสไตล์ที่จับภาพกับค่าที่คาดหวัง |
| [ดึงสไตล์จาก Figma](#ดึงสไตล์จาก-figma) | ดึงโทเค็นการออกแบบจาก Figma API (โทเค็นจะอยู่ในเครื่อง) |
| [สร้างรายงาน](#สร้างรายงาน) | สร้างรายงานการตรวจสอบในรูปแบบ HTML/JSON/Markdown |
| [โหลดชุดกฎ](#โหลดชุดกฎ) | โหลดกฎการตรวจสอบจากไฟล์ YAML |
| [รันการตรวจสอบ](#รันการตรวจสอบ) | รันการตรวจสอบการออกแบบทั้งหมด: จับภาพ → เปรียบเทียบ → รายงาน |
| [รันการตรวจสอบสเปค](#รันการตรวจสอบสเปค) | การตรวจสอบสเปคแบบไดนามิก - ประกอบโมดูลใดๆ ผ่าน YAML |
| [เปรียบเทียบด้วยภาพ](#เปรียบเทียบด้วยภาพ) | เปรียบเทียบการออกแบบอ้างอิงกับไซต์ที่พัฒนาโดยการมองเห็น ใส่คำอธิบายความแตกต่าง |

## Modules

### ใส่คำอธิบายภาพหน้าจอ

`verify.annotate`

วาดกล่องที่มีป้ายกำกับบนภาพหน้าจอเพื่อระบุความแตกต่าง

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | เส้นทางไปยังภาพหน้าจอ |
| `annotations` | array | Yes | - | อาร์เรย์ของคำอธิบาย: [{label, x, y, width, height, color?, description?}] |
| `output_path` | string | No | - | เส้นทางเอาต์พุตสำหรับภาพที่ใส่คำอธิบาย (ค่าเริ่มต้น: เพิ่มคำต่อท้าย _annotated) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | เส้นทางไปยังภาพที่ใส่คำอธิบาย |
| `annotation_count` | integer | จำนวนคำอธิบายที่วาด |

### จับภาพสไตล์องค์ประกอบ

`verify.capture`

จับภาพสไตล์ที่คำนวณจากองค์ประกอบในเบราว์เซอร์

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

### เปรียบเทียบสไตล์

`verify.compare`

เปรียบเทียบสไตล์ที่จับภาพกับค่าที่คาดหวัง

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

### ดึงสไตล์จาก Figma

`verify.figma`

ดึงโทเค็นการออกแบบจาก Figma API (โทเค็นจะอยู่ในเครื่อง)

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

### สร้างรายงาน

`verify.report`

สร้างรายงานการตรวจสอบในรูปแบบ HTML/JSON/Markdown

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

### โหลดชุดกฎ

`verify.ruleset`

โหลดกฎการตรวจสอบจากไฟล์ YAML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to YAML ruleset file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ruleset` | object | Parsed ruleset |
| `rules_count` | integer | Number of rules |

### รันการตรวจสอบ

`verify.run`

รันการตรวจสอบการออกแบบทั้งหมด: จับภาพ → เปรียบเทียบ → รายงาน

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

### รันการตรวจสอบสเปค

`verify.spec`

การตรวจสอบสเปคแบบไดนามิก - ประกอบโมดูลใดๆ ผ่าน YAML

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

### เปรียบเทียบด้วยภาพ

`verify.visual_diff`

เปรียบเทียบการออกแบบอ้างอิงกับไซต์ที่พัฒนาโดยการมองเห็น ใส่คำอธิบายความแตกต่าง

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `reference_url` | string | Yes | - | URL หรือเส้นทางภาพในเครื่องของการออกแบบอ้างอิง |
| `dev_url` | string | Yes | - | URL ของไซต์ที่พัฒนาเพื่อเปรียบเทียบ |
| `output_dir` | string | No | `./verify-reports/visual-diff` | ไดเรกทอรีเอาต์พุตสำหรับรายงาน |
| `focus_areas` | array | No | - | พื้นที่ที่ต้องการเน้น (เช่น ["header", "login form"]) |
| `viewport_width` | number | No | `1280` | ความกว้างของวิวพอร์ตเบราว์เซอร์ |
| `viewport_height` | number | No | `800` | ความสูงของวิวพอร์ตเบราว์เซอร์ |
| `model` | string | No | `gpt-4o` | โมเดลการมองเห็นที่ใช้ |
| `api_key` | string | No | - | คีย์ API ของ OpenAI (หรือใช้ตัวแปรแวดล้อม OPENAI_API_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `similarity_score` | number | เปอร์เซ็นต์ความคล้ายคลึง (0-100) |
| `annotations` | array | รายการความแตกต่างที่ใส่คำอธิบาย |
| `annotated_image` | string | เส้นทางไปยังภาพหน้าจอที่ใส่คำอธิบาย |
| `report_path` | string | เส้นทางไปยังรายงาน HTML |
| `summary` | string | สรุปความแตกต่าง |
