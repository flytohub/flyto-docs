# Verify

Visual verification, Figma comparison, style capture, and report generation.

**9 modules**

| Module | Description |
|--------|-------------|
| [Ekran Görüntüsünü Açıklayın](#ekran-görüntüsünü-açıklayın) | Ekran görüntülerinde farklılıkları işaretlemek için etiketli sınırlayıcı kutular çizin |
| [Eleman Stillerini Yakala](#eleman-stillerini-yakala) | Tarayıcı elemanından hesaplanan stilleri yakala |
| [Stilleri Karşılaştır](#stilleri-karşılaştır) | Yakalanan stilleri beklenen değerlerle karşılaştır |
| [Figma Stili Al](#figma-stili-al) | Figma API'den tasarım tokenlarını al (token yerel kalır) |
| [Rapor Oluştur](#rapor-oluştur) | HTML/JSON/Markdown formatında doğrulama raporu oluştur |
| [Kural Setini Yükle](#kural-setini-yükle) | YAML dosyasından doğrulama kurallarını yükle |
| [Doğrulamayı Çalıştır](#doğrulamayı-çalıştır) | Tam tasarım doğrulaması çalıştır: yakala → karşılaştır → raporla |
| [Spesifikasyon Doğrulamasını Çalıştır](#spesifikasyon-doğrulamasını-çalıştır) | Dinamik spesifikasyon doğrulaması - herhangi bir modülü YAML ile birleştir |
| [Görsel Fark](#görsel-fark) | Referans tasarımı ile geliştirici sitesini görsel olarak karşılaştırın, farklılıkları açıklayın |

## Modules

### Ekran Görüntüsünü Açıklayın

`verify.annotate`

Ekran görüntülerinde farklılıkları işaretlemek için etiketli sınırlayıcı kutular çizin

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Ekran görüntüsü resminin yolu |
| `annotations` | array | Yes | - | Açıklama dizisi: [{label, x, y, genişlik, yükseklik, renk?, açıklama?}] |
| `output_path` | string | No | - | Açıklamalı görüntü için çıkış yolu (varsayılan: _annotated eki ekler) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Açıklamalı görüntünün yolu |
| `annotation_count` | integer | Çizilen açıklama sayısı |

### Eleman Stillerini Yakala

`verify.capture`

Tarayıcı elemanından hesaplanan stilleri yakala

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

### Stilleri Karşılaştır

`verify.compare`

Yakalanan stilleri beklenen değerlerle karşılaştır

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

### Figma Stili Al

`verify.figma`

Figma API'den tasarım tokenlarını al (token yerel kalır)

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

### Rapor Oluştur

`verify.report`

HTML/JSON/Markdown formatında doğrulama raporu oluştur

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

### Kural Setini Yükle

`verify.ruleset`

YAML dosyasından doğrulama kurallarını yükle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to YAML ruleset file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ruleset` | object | Parsed ruleset |
| `rules_count` | integer | Number of rules |

### Doğrulamayı Çalıştır

`verify.run`

Tam tasarım doğrulaması çalıştır: yakala → karşılaştır → raporla

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

### Spesifikasyon Doğrulamasını Çalıştır

`verify.spec`

Dinamik spesifikasyon doğrulaması - herhangi bir modülü YAML ile birleştir

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

### Görsel Fark

`verify.visual_diff`

Referans tasarımı ile geliştirici sitesini görsel olarak karşılaştırın, farklılıkları açıklayın

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `reference_url` | string | Yes | - | Referans tasarımının URL'si veya yerel resim yolu |
| `dev_url` | string | Yes | - | Karşılaştırılacak geliştirme sitesinin URL'si |
| `output_dir` | string | No | `./verify-reports/visual-diff` | Raporlar için çıkış dizini |
| `focus_areas` | array | No | - | Odaklanılacak alanlar (örneğin ["başlık", "giriş formu"]) |
| `viewport_width` | number | No | `1280` | Tarayıcı görünüm alanı genişliği |
| `viewport_height` | number | No | `800` | Tarayıcı görünüm alanı yüksekliği |
| `model` | string | No | `gpt-4o` | Kullanılacak görsel model |
| `api_key` | string | No | - | OpenAI API anahtarı (veya OPENAI_API_KEY ortam değişkenini kullanın) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `similarity_score` | number | Benzerlik yüzdesi (0-100) |
| `annotations` | array | Açıklamalı farklılıkların listesi |
| `annotated_image` | string | Açıklamalı ekran görüntüsünün yolu |
| `report_path` | string | HTML raporunun yolu |
| `summary` | string | Farklılıkların özeti |
