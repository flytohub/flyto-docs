# Verify

Visual verification, Figma comparison, style capture, and report generation.

**9 modules**

| Module | Description |
|--------|-------------|
| [स्क्रीनशॉट पर टिप्पणी करें](#स्क्रीनशॉट-पर-टिप्पणी-करें) | स्क्रीनशॉट पर लेबल वाले बॉक्स बनाएं और अंतर चिह्नित करें |
| [तत्व शैलियों को कैप्चर करें](#तत्व-शैलियों-को-कैप्चर-करें) | ब्राउज़र तत्व से गणना की गई शैलियों को कैप्चर करें |
| [शैलियों की तुलना करें](#शैलियों-की-तुलना-करें) | कैप्चर की गई शैलियों की अपेक्षित मानों से तुलना करें |
| [Figma शैली प्राप्त करें](#figma-शैली-प्राप्त-करें) | Figma API से डिज़ाइन टोकन प्राप्त करें (टोकन स्थानीय रहता है) |
| [रिपोर्ट उत्पन्न करें](#रिपोर्ट-उत्पन्न-करें) | HTML/JSON/Markdown में सत्यापन रिपोर्ट उत्पन्न करें |
| [नियम सेट लोड करें](#नियम-सेट-लोड-करें) | YAML फ़ाइल से सत्यापन नियम लोड करें |
| [सत्यापन चलाएं](#सत्यापन-चलाएं) | पूर्ण डिज़ाइन सत्यापन चलाएं: कैप्चर → तुलना → रिपोर्ट |
| [स्पेक सत्यापन चलाएं](#स्पेक-सत्यापन-चलाएं) | डायनामिक स्पेक सत्यापन - YAML के माध्यम से किसी भी मॉड्यूल को संयोजित करें |
| [विज़ुअल अंतर](#विज़ुअल-अंतर) | संदर्भ डिज़ाइन की विकास साइट से दृश्य तुलना करें, अंतर चिह्नित करें |

## Modules

### स्क्रीनशॉट पर टिप्पणी करें

`verify.annotate`

स्क्रीनशॉट पर लेबल वाले बॉक्स बनाएं और अंतर चिह्नित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | स्क्रीनशॉट छवि का पथ |
| `annotations` | array | Yes | - | टिप्पणियों की सूची: [{label, x, y, width, height, color?, description?}] |
| `output_path` | string | No | - | टिप्पणी की गई छवि के लिए आउटपुट पथ (डिफ़ॉल्ट: _annotated उपसर्ग जोड़ता है) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | टिप्पणी की गई छवि का पथ |
| `annotation_count` | integer | बनाई गई टिप्पणियों की संख्या |

### तत्व शैलियों को कैप्चर करें

`verify.capture`

ब्राउज़र तत्व से गणना की गई शैलियों को कैप्चर करें

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

### शैलियों की तुलना करें

`verify.compare`

कैप्चर की गई शैलियों की अपेक्षित मानों से तुलना करें

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

### Figma शैली प्राप्त करें

`verify.figma`

Figma API से डिज़ाइन टोकन प्राप्त करें (टोकन स्थानीय रहता है)

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

### रिपोर्ट उत्पन्न करें

`verify.report`

HTML/JSON/Markdown में सत्यापन रिपोर्ट उत्पन्न करें

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

### नियम सेट लोड करें

`verify.ruleset`

YAML फ़ाइल से सत्यापन नियम लोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to YAML ruleset file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ruleset` | object | Parsed ruleset |
| `rules_count` | integer | Number of rules |

### सत्यापन चलाएं

`verify.run`

पूर्ण डिज़ाइन सत्यापन चलाएं: कैप्चर → तुलना → रिपोर्ट

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

### स्पेक सत्यापन चलाएं

`verify.spec`

डायनामिक स्पेक सत्यापन - YAML के माध्यम से किसी भी मॉड्यूल को संयोजित करें

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

### विज़ुअल अंतर

`verify.visual_diff`

संदर्भ डिज़ाइन की विकास साइट से दृश्य तुलना करें, अंतर चिह्नित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `reference_url` | string | Yes | - | संदर्भ डिज़ाइन का URL या स्थानीय छवि पथ |
| `dev_url` | string | Yes | - | तुलना के लिए विकास साइट का URL |
| `output_dir` | string | No | `./verify-reports/visual-diff` | रिपोर्ट्स के लिए आउटपुट डायरेक्टरी |
| `focus_areas` | array | No | - | ध्यान केंद्रित करने के क्षेत्र (जैसे ["हेडर", "लॉगिन फॉर्म"]) |
| `viewport_width` | number | No | `1280` | ब्राउज़र व्यूपोर्ट चौड़ाई |
| `viewport_height` | number | No | `800` | ब्राउज़र व्यूपोर्ट ऊँचाई |
| `model` | string | No | `gpt-4o` | उपयोग करने के लिए विज़न मॉडल |
| `api_key` | string | No | - | OpenAI API कुंजी (या OPENAI_API_KEY पर्यावरण वेरिएबल का उपयोग करें) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `similarity_score` | number | समानता प्रतिशत (0-100) |
| `annotations` | array | टिप्पणी किए गए अंतरों की सूची |
| `annotated_image` | string | टिप्पणी की गई स्क्रीनशॉट का पथ |
| `report_path` | string | HTML रिपोर्ट का पथ |
| `summary` | string | अंतर का सारांश |
