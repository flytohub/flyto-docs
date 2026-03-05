# Image Processing

Resize, crop, compress, convert, OCR, QR codes, and watermarks.

**9 modules**

| Module | Description |
|--------|-------------|
| [Bild komprimieren](#bild-komprimieren) | Bilder komprimieren, um Dateigröße zu reduzieren und Qualität zu erhalten |
| [Bild konvertieren](#bild-konvertieren) | Bild in anderes Format konvertieren (PNG, JPEG, WEBP usw.) |
| [Bild zuschneiden](#bild-zuschneiden) | Bild auf angegebene Koordinaten zuschneiden |
| [Bild herunterladen](#bild-herunterladen) | Bild von URL in lokale Datei herunterladen |
| [OCR-Text extrahieren](#ocr-text-extrahieren) | Text aus Bildern mit OCR extrahieren |
| [QR-Code generieren](#qr-code-generieren) | QR-Codes aus Text, URLs oder Daten generieren |
| [Bildgröße ändern](#bildgröße-ändern) | Bilder auf angegebene Abmessungen mit verschiedenen Algorithmen skalieren |
| [Bild drehen](#bild-drehen) | Bild um angegebene Gradzahl drehen |
| [Wasserzeichen hinzufügen](#wasserzeichen-hinzufügen) | Text- oder Bildwasserzeichen zu einem Bild hinzufügen |

## Modules

### Bild komprimieren

`image.compress`

Bilder komprimieren, um Dateigröße zu reduzieren und Qualität zu erhalten

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
| `output_path` | string | Pfad zum komprimierten Bild |
| `original_size_bytes` | number | Pfad zum komprimierten Bild |
| `compressed_size_bytes` | number | Originaldateigröße in Bytes |
| `compression_ratio` | number | Komprimierte Dateigröße in Bytes |

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

### Bild konvertieren

`image.convert`

Bild in anderes Format konvertieren (PNG, JPEG, WEBP usw.)

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
| `path` | string | Pfad zum konvertierten Bild |
| `size` | number | Pfad zum konvertierten Bild |
| `format` | string | Pfad zum konvertierten Bild |
| `dimensions` | object | Dateigröße in Bytes |

**Example:** Convert PNG to JPEG

```yaml
input_path: /tmp/image.png
format: jpeg
quality: 90
```

### Bild zuschneiden

`image.crop`

Bild auf angegebene Koordinaten zuschneiden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Pfad zum Eingabebild |
| `output_path` | string | Yes | - | Pfad für das Ausgabebild |
| `left` | number | Yes | - | Linke Koordinate des Zuschneidebereichs |
| `top` | number | Yes | - | Obere Koordinate des Zuschneidebereichs |
| `right` | number | Yes | - | Rechte Koordinate des Zuschneidebereichs |
| `bottom` | number | Yes | - | Untere Koordinate des Zuschneidebereichs |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Pfad zum zugeschnittenen Bild |
| `width` | integer | Breite des zugeschnittenen Bildes |
| `height` | integer | Höhe des zugeschnittenen Bildes |
| `original_width` | integer | Originalbildbreite |
| `original_height` | integer | Originalbildhöhe |

**Example:** Crop center region

```yaml
input_path: /path/to/image.png
output_path: /path/to/cropped.png
left: 100
top: 100
right: 500
bottom: 400
```

### Bild herunterladen

`image.download`

Bild von URL in lokale Datei herunterladen

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
| `path` | string | Lokaler Dateipfad des heruntergeladenen Bildes |
| `size` | number | Lokaler Dateipfad des heruntergeladenen Bildes |
| `content_type` | string | Lokaler Dateipfad des heruntergeladenen Bildes |
| `filename` | string | Dateigröße in Bytes |

**Example:** Download image from URL

```yaml
url: https://example.com/photo.jpg
output_dir: /tmp/images
```

### OCR-Text extrahieren

`image.ocr`

Text aus Bildern mit OCR extrahieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Pfad zur Bilddatei |
| `language` | string | No | `eng` | Sprachcode für OCR (z.B. eng, chi_sim) |
| `psm` | number | No | `3` | Tesseract-Seitensegmentierungsmodus |
| `output_type` | select (`text`, `data`, `boxes`) | No | `text` | Art der OCR-Ausgabe (Text oder Daten) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | Aus dem Bild extrahierter Text |
| `confidence` | number | OCR-Vertrauensbewertung |
| `language` | string | Für OCR verwendete Sprache |

**Example:** Extract text from image

```yaml
image_path: /path/to/document.png
language: eng
```

### QR-Code generieren

`image.qrcode_generate`

QR-Codes aus Text, URLs oder Daten generieren

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
| `output_path` | string | Pfad zum generierten QR-Code-Bild |
| `file_size` | number | Pfad zum generierten QR-Code-Bild |
| `dimensions` | object | Größe der Ausgabedatei in Bytes |

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

### Bildgröße ändern

`image.resize`

Bilder auf angegebene Abmessungen mit verschiedenen Algorithmen skalieren

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
| `output_path` | string | Pfad zum skalierten Bild |
| `original_size` | object | Pfad zum skalierten Bild |
| `new_size` | object | Pfad zum skalierten Bild |

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

### Bild drehen

`image.rotate`

Bild um angegebene Gradzahl drehen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Pfad zum Eingabebild |
| `output_path` | string | Yes | - | Pfad für das Ausgabebild |
| `angle` | number | Yes | - | Drehwinkel in Grad |
| `expand` | boolean | No | `True` | Ausgabe erweitern, um das gesamte gedrehte Bild aufzunehmen |
| `fill_color` | string | No | `#000000` | Farbe zum Füllen leerer Bereiche nach der Drehung |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Pfad zum gedrehten Bild |
| `width` | integer | Breite des gedrehten Bildes |
| `height` | integer | Höhe des gedrehten Bildes |
| `angle` | number | Winkel, um den das Bild gedreht wurde |

**Example:** Rotate 90 degrees

```yaml
input_path: /path/to/image.png
output_path: /path/to/rotated.png
angle: 90
```

### Wasserzeichen hinzufügen

`image.watermark`

Text- oder Bildwasserzeichen zu einem Bild hinzufügen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Pfad zum Eingabebild |
| `output_path` | string | Yes | - | Pfad für das Ausgabebild |
| `text` | string | No | - | Text, der als Wasserzeichen verwendet wird |
| `watermark_image` | string | No | - | Pfad zur Bilddatei, die als Wasserzeichen verwendet wird |
| `position` | select (`center`, `top-left`, `top-right`, `bottom-left`, `bottom-right`) | No | `bottom-right` | Position des Wasserzeichens auf dem Bild |
| `opacity` | number | No | `0.5` | Deckkraft des Wasserzeichens (0,0 bis 1,0) |
| `font_size` | number | No | `36` | Schriftgröße für Text-Wasserzeichen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Pfad zum Bild mit Wasserzeichen |
| `watermark_type` | string | Art des angewendeten Wasserzeichens (Text oder Bild) |

**Example:** Add text watermark

```yaml
input_path: /path/to/image.png
output_path: /path/to/watermarked.png
text: © 2026 Company
position: bottom-right
opacity: 0.5
```
