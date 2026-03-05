# Verify

Visual verification, Figma comparison, style capture, and report generation.

**9 modules**

| Module | Description |
|--------|-------------|
| [Anotasi Tangkapan Layar](#anotasi-tangkapan-layar) | Gambar kotak berlabel pada tangkapan layar untuk menandai perbedaan |
| [Tangkap Gaya Elemen](#tangkap-gaya-elemen) | Tangkap gaya yang dihitung dari elemen browser |
| [Bandingkan Gaya](#bandingkan-gaya) | Bandingkan gaya yang ditangkap dengan nilai yang diharapkan |
| [Ambil Gaya Figma](#ambil-gaya-figma) | Ambil token desain dari Figma API (token tetap lokal) |
| [Buat Laporan](#buat-laporan) | Buat laporan verifikasi dalam HTML/JSON/Markdown |
| [Muat Aturan](#muat-aturan) | Muat aturan verifikasi dari file YAML |
| [Jalankan Verifikasi](#jalankan-verifikasi) | Jalankan verifikasi desain lengkap: tangkap → bandingkan → laporan |
| [Jalankan Verifikasi Spesifikasi](#jalankan-verifikasi-spesifikasi) | Verifikasi spesifikasi dinamis - susun modul apa saja melalui YAML |
| [Perbedaan Visual](#perbedaan-visual) | Bandingkan desain referensi dengan situs dev secara visual, anotasi perbedaan |

## Modules

### Anotasi Tangkapan Layar

`verify.annotate`

Gambar kotak berlabel pada tangkapan layar untuk menandai perbedaan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Jalur ke gambar tangkapan layar |
| `annotations` | array | Yes | - | Array anotasi: [{label, x, y, width, height, color?, description?}] |
| `output_path` | string | No | - | Jalur keluaran untuk gambar yang dianotasi (default: menambahkan akhiran _annotated) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Jalur ke gambar yang dianotasi |
| `annotation_count` | integer | Jumlah anotasi yang digambar |

### Tangkap Gaya Elemen

`verify.capture`

Tangkap gaya yang dihitung dari elemen browser

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

### Bandingkan Gaya

`verify.compare`

Bandingkan gaya yang ditangkap dengan nilai yang diharapkan

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

### Ambil Gaya Figma

`verify.figma`

Ambil token desain dari Figma API (token tetap lokal)

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

### Buat Laporan

`verify.report`

Buat laporan verifikasi dalam HTML/JSON/Markdown

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

### Muat Aturan

`verify.ruleset`

Muat aturan verifikasi dari file YAML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to YAML ruleset file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ruleset` | object | Parsed ruleset |
| `rules_count` | integer | Number of rules |

### Jalankan Verifikasi

`verify.run`

Jalankan verifikasi desain lengkap: tangkap → bandingkan → laporan

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

### Jalankan Verifikasi Spesifikasi

`verify.spec`

Verifikasi spesifikasi dinamis - susun modul apa saja melalui YAML

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

### Perbedaan Visual

`verify.visual_diff`

Bandingkan desain referensi dengan situs dev secara visual, anotasi perbedaan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `reference_url` | string | Yes | - | URL atau jalur gambar lokal dari desain referensi |
| `dev_url` | string | Yes | - | URL situs pengembangan untuk dibandingkan |
| `output_dir` | string | No | `./verify-reports/visual-diff` | Direktori keluaran untuk laporan |
| `focus_areas` | array | No | - | Area yang difokuskan (misalnya ["header", "form login"]) |
| `viewport_width` | number | No | `1280` | Lebar jendela tampilan browser |
| `viewport_height` | number | No | `800` | Tinggi jendela tampilan browser |
| `model` | string | No | `gpt-4o` | Model visi yang digunakan |
| `api_key` | string | No | - | Kunci API OpenAI (atau gunakan variabel lingkungan OPENAI_API_KEY) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `similarity_score` | number | Persentase kesamaan (0-100) |
| `annotations` | array | Daftar perbedaan yang dianotasi |
| `annotated_image` | string | Jalur ke tangkapan layar yang dianotasi |
| `report_path` | string | Jalur ke laporan HTML |
| `summary` | string | Ringkasan perbedaan |
