# Image Processing

Resize, crop, compress, convert, OCR, QR codes, and watermarks.

**9 modules**

| Module | Description |
|--------|-------------|
| [Görüntü Sıkıştır](#görüntü-sıkıştır) | Kaliteyi koruyarak dosya boyutunu azaltmak için görüntüleri sıkıştır |
| [Görüntü Dönüştür](#görüntü-dönüştür) | Görüntüyü farklı formata dönüştür (PNG, JPEG, WEBP vb.) |
| [Resmi Kırp](#resmi-kırp) | Bir resmi belirtilen koordinatlara göre kırpın |
| [Görüntü İndir](#görüntü-i̇ndir) | URL'den görüntüyü yerel dosyaya indir |
| [OCR Metin Çıkar](#ocr-metin-çıkar) | OCR kullanarak resimlerden metin çıkarın |
| [QR Kodu Oluştur](#qr-kodu-oluştur) | Metin, URL veya veriden QR kodları oluştur |
| [Görüntü Yeniden Boyutlandır](#görüntü-yeniden-boyutlandır) | Görüntüleri çeşitli algoritmalarla belirtilen boyutlara yeniden boyutlandır |
| [Resmi Döndür](#resmi-döndür) | Bir resmi belirtilen derece kadar döndürün |
| [Filigran Ekle](#filigran-ekle) | Bir resme metin veya resim filigranı ekleyin |

## Modules

### Görüntü Sıkıştır

`image.compress`

Kaliteyi koruyarak dosya boyutunu azaltmak için görüntüleri sıkıştır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input image file |
| `output_path` | string | No | - | Path where the processed image will be saved |
| `quality` | number | No | `85` | Quality level (1-100, higher is better) |
| `optimize` | boolean | No | `True` | Apply additional optimization |
| `max_size_kb` | number | No | - | Target maximum file size in KB |
| `format` | select (`png`, `jpeg`, `webp`, `gif`, `bmp`, `tiff`) | No | `png` | Output image format |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Sıkıştırılmış görüntünün yolu |
| `original_size_bytes` | number | Sıkıştırılmış görüntünün yolu |
| `compressed_size_bytes` | number | Orijinal dosya boyutu (bayt) |
| `compression_ratio` | number | Sıkıştırılmış dosya boyutu (bayt) |

**Example:** Compress with quality setting

```yaml
input_path: /path/to/image.jpg
quality: 75
```

**Example:** Compress to target size

```yaml
input_path: /path/to/image.png
max_size_kb: 500
```

### Görüntü Dönüştür

`image.convert`

Görüntüyü farklı formata dönüştür (PNG, JPEG, WEBP vb.)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input image file |
| `output_path` | string | No | - | Path where the processed image will be saved |
| `format` | select (`png`, `jpeg`, `webp`, `gif`, `bmp`, `tiff`) | Yes | `png` | Output image format |
| `quality` | number | No | `85` | Quality level (1-100, higher is better) |
| `resize` | object | No | - | Resize options: {width, height, keep_aspect} |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Dönüştürülen görüntünün yolu |
| `size` | number | Dönüştürülen görüntünün yolu |
| `format` | string | Dönüştürülen görüntünün yolu |
| `dimensions` | object | Dosya boyutu (bayt) |

**Example:** Convert PNG to JPEG

```yaml
input_path: /tmp/image.png
format: jpeg
quality: 90
```

### Resmi Kırp

`image.crop`

Bir resmi belirtilen koordinatlara göre kırpın

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Giriş resminin yolu |
| `output_path` | string | Yes | - | Çıktı resminin yolu |
| `left` | number | Yes | - | Kırpma alanının sol koordinatı |
| `top` | number | Yes | - | Kırpma alanının üst koordinatı |
| `right` | number | Yes | - | Kırpma alanının sağ koordinatı |
| `bottom` | number | Yes | - | Kırpma alanının alt koordinatı |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Kırpılan resmin yolu |
| `width` | integer | Kırpılan resmin genişliği |
| `height` | integer | Kırpılan resmin yüksekliği |
| `original_width` | integer | Orijinal resmin genişliği |
| `original_height` | integer | Orijinal resmin yüksekliği |

**Example:** Crop center region

```yaml
input_path: /path/to/image.png
output_path: /path/to/cropped.png
left: 100
top: 100
right: 500
bottom: 400
```

### Görüntü İndir

`image.download`

URL'den görüntüyü yerel dosyaya indir

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL of the image to download |
| `output_path` | string | No | - | Path where the processed image will be saved |
| `output_dir` | string | No | `/tmp` | Directory where output files will be saved |
| `headers` | object | No | `{}` | HTTP request headers as key-value pairs |
| `timeout` | number | No | `30` | Maximum time to wait in seconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | İndirilen görüntünün yerel dosya yolu |
| `size` | number | İndirilen görüntünün yerel dosya yolu |
| `content_type` | string | İndirilen görüntünün yerel dosya yolu |
| `filename` | string | Dosya boyutu (bayt) |

**Example:** Download image from URL

```yaml
url: https://example.com/photo.jpg
output_dir: /tmp/images
```

### OCR Metin Çıkar

`image.ocr`

OCR kullanarak resimlerden metin çıkarın

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Resim dosyasının yolu |
| `language` | string | No | `eng` | OCR için dil kodu (örn. eng, chi_sim) |
| `psm` | number | No | `3` | Tesseract sayfa segmentasyon modu |
| `output_type` | select (`text`, `data`, `boxes`) | No | `text` | OCR çıktısı türü (metin veya veri) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | Resimden çıkarılan metin |
| `confidence` | number | OCR güven puanı |
| `language` | string | OCR için kullanılan dil |

**Example:** Extract text from image

```yaml
image_path: /path/to/document.png
language: eng
```

### QR Kodu Oluştur

`image.qrcode_generate`

Metin, URL veya veriden QR kodları oluştur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | string | Yes | - | Text, URL, or data to encode |
| `output_path` | string | No | - | Path where the processed image will be saved |
| `format` | select (`png`, `svg`) | No | `png` | Output image format |
| `size` | number | No | `300` | Size in pixels |
| `color` | string | No | `#000000` | Color of the QR code (hex or name) |
| `background` | string | No | `#FFFFFF` | Background color (hex or name) |
| `error_correction` | select (`L`, `M`, `Q`, `H`) | No | `M` | Error correction level |
| `border` | number | No | `4` | Border width in modules (quiet zone) |
| `version` | number | No | - | QR code version 1-40 (leave empty for auto-detect) |
| `logo_path` | string | No | - | Path to logo image to embed in center |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Oluşturulan QR kodu görüntüsünün yolu |
| `file_size` | number | Oluşturulan QR kodu görüntüsünün yolu |
| `dimensions` | object | Çıktı dosyasının boyutu (bayt) |

**Example:** Generate URL QR code

```yaml
data: https://flyto.dev
output_path: /tmp/flyto_qr.png
```

**Example:** Custom styled QR code

```yaml
data: Hello World
color: #6366F1
size: 500
error_correction: H
```

**Example:** SVG QR code

```yaml
data: https://flyto.dev
format: svg
border: 2
```

### Görüntü Yeniden Boyutlandır

`image.resize`

Görüntüleri çeşitli algoritmalarla belirtilen boyutlara yeniden boyutlandır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input image file |
| `output_path` | string | No | - | Path where the processed image will be saved |
| `width` | number | No | - | Target width in pixels |
| `height` | number | No | - | Target height in pixels |
| `scale` | number | No | - | Scale factor (e.g., 0.5 for half, 2.0 for double) |
| `algorithm` | select (`lanczos`, `bicubic`, `bilinear`, `nearest`) | No | `lanczos` | Resampling algorithm for resize |
| `maintain_aspect` | boolean | No | `True` | Maintain original aspect ratio |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Yeniden boyutlandırılan görüntünün yolu |
| `original_size` | object | Yeniden boyutlandırılan görüntünün yolu |
| `new_size` | object | Yeniden boyutlandırılan görüntünün yolu |

**Example:** Resize to specific dimensions

```yaml
input_path: /path/to/image.png
width: 800
height: 600
```

**Example:** Scale by factor

```yaml
input_path: /path/to/image.png
scale: 0.5
```

### Resmi Döndür

`image.rotate`

Bir resmi belirtilen derece kadar döndürün

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Giriş resminin yolu |
| `output_path` | string | Yes | - | Çıktı resminin yolu |
| `angle` | number | Yes | - | Dönüş açısı (derece cinsinden) |
| `expand` | boolean | No | `True` | Döndürülen tüm resmi tutmak için çıktıyı genişletin |
| `fill_color` | string | No | `#000000` | Dönüşten sonra boş alanları doldurmak için renk |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Döndürülen resmin yolu |
| `width` | integer | Döndürülen resmin genişliği |
| `height` | integer | Döndürülen resmin yüksekliği |
| `angle` | number | Resmin döndürüldüğü açı |

**Example:** Rotate 90 degrees

```yaml
input_path: /path/to/image.png
output_path: /path/to/rotated.png
angle: 90
```

### Filigran Ekle

`image.watermark`

Bir resme metin veya resim filigranı ekleyin

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Giriş resminin yolu |
| `output_path` | string | Yes | - | Çıktı resminin yolu |
| `text` | string | No | - | Filigran olarak kullanılacak metin |
| `watermark_image` | string | No | - | Filigran olarak kullanılacak resim dosyasının yolu |
| `position` | select (`center`, `top-left`, `top-right`, `bottom-left`, `bottom-right`) | No | `bottom-right` | Resim üzerindeki filigranın konumu |
| `opacity` | number | No | `0.5` | Filigran opaklığı (0.0 ile 1.0 arası) |
| `font_size` | number | No | `36` | Metin filigranı için yazı tipi boyutu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Filigranlı resmin yolu |
| `watermark_type` | string | Uygulanan filigran türü (metin veya resim) |

**Example:** Add text watermark

```yaml
input_path: /path/to/image.png
output_path: /path/to/watermarked.png
text: © 2026 Company
position: bottom-right
opacity: 0.5
```
