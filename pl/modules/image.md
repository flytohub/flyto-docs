# Image Processing

Resize, crop, compress, convert, OCR, QR codes, and watermarks.

**9 modules**

| Module | Description |
|--------|-------------|
| [Kompresuj obraz](#kompresuj-obraz) | Kompresuj obrazy, aby zmniejszyc rozmiar pliku, zachowujac jakosc |
| [Konwertuj obraz](#konwertuj-obraz) | Konwertuj obraz na inny format (PNG, JPEG, WEBP, itp.) |
| [Przytnij obraz](#przytnij-obraz) | Przytnij obraz do określonych współrzędnych |
| [Pobierz obraz](#pobierz-obraz) | Pobierz obraz z URL do pliku lokalnego |
| [OCR Wyodrębnij tekst](#ocr-wyodrębnij-tekst) | Wyodrębnij tekst z obrazów za pomocą OCR |
| [Generuj kod QR](#generuj-kod-qr) | Generuj kody QR z tekstu, URL lub danych |
| [Zmien rozmiar obrazu](#zmien-rozmiar-obrazu) | Zmien rozmiar obrazow do okreslonych wymiarow roznymi algorytmami |
| [Obróć obraz](#obróć-obraz) | Obróć obraz o określoną liczbę stopni |
| [Dodaj znak wodny](#dodaj-znak-wodny) | Dodaj znak wodny tekstowy lub obrazkowy do obrazu |

## Modules

### Kompresuj obraz

`image.compress`

Kompresuj obrazy, aby zmniejszyc rozmiar pliku, zachowujac jakosc

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
| `output_path` | string | Sciezka do skompresowanego obrazu |
| `original_size_bytes` | number | Sciezka do skompresowanego obrazu |
| `compressed_size_bytes` | number | Oryginalny rozmiar pliku w bajtach |
| `compression_ratio` | number | Skompresowany rozmiar pliku w bajtach |

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

### Konwertuj obraz

`image.convert`

Konwertuj obraz na inny format (PNG, JPEG, WEBP, itp.)

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
| `path` | string | Sciezka do przekonwertowanego obrazu |
| `size` | number | Sciezka do przekonwertowanego obrazu |
| `format` | string | Sciezka do przekonwertowanego obrazu |
| `dimensions` | object | Rozmiar pliku w bajtach |

**Example:** Convert PNG to JPEG

```yaml
input_path: /tmp/image.png
format: jpeg
quality: 90
```

### Przytnij obraz

`image.crop`

Przytnij obraz do określonych współrzędnych

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Ścieżka do obrazu wejściowego |
| `output_path` | string | Yes | - | Ścieżka dla obrazu wyjściowego |
| `left` | number | Yes | - | Lewa współrzędna obszaru przycięcia |
| `top` | number | Yes | - | Górna współrzędna obszaru przycięcia |
| `right` | number | Yes | - | Prawa współrzędna obszaru przycięcia |
| `bottom` | number | Yes | - | Dolna współrzędna obszaru przycięcia |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Ścieżka do przyciętego obrazu |
| `width` | integer | Szerokość przyciętego obrazu |
| `height` | integer | Wysokość przyciętego obrazu |
| `original_width` | integer | Oryginalna szerokość obrazu |
| `original_height` | integer | Oryginalna wysokość obrazu |

**Example:** Crop center region

```yaml
input_path: /path/to/image.png
output_path: /path/to/cropped.png
left: 100
top: 100
right: 500
bottom: 400
```

### Pobierz obraz

`image.download`

Pobierz obraz z URL do pliku lokalnego

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
| `path` | string | Lokalna sciezka pobranego obrazu |
| `size` | number | Lokalna sciezka pobranego obrazu |
| `content_type` | string | Lokalna sciezka pobranego obrazu |
| `filename` | string | Rozmiar pliku w bajtach |

**Example:** Download image from URL

```yaml
url: https://example.com/photo.jpg
output_dir: /tmp/images
```

### OCR Wyodrębnij tekst

`image.ocr`

Wyodrębnij tekst z obrazów za pomocą OCR

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Ścieżka do pliku obrazu |
| `language` | string | No | `eng` | Kod języka dla OCR (np. eng, chi_sim) |
| `psm` | number | No | `3` | Tryb segmentacji strony Tesseract |
| `output_type` | select (`text`, `data`, `boxes`) | No | `text` | Typ wyjścia OCR (tekst lub dane) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | Wyodrębniony tekst z obrazu |
| `confidence` | number | Wynik pewności OCR |
| `language` | string | Język użyty do OCR |

**Example:** Extract text from image

```yaml
image_path: /path/to/document.png
language: eng
```

### Generuj kod QR

`image.qrcode_generate`

Generuj kody QR z tekstu, URL lub danych

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
| `output_path` | string | Sciezka do wygenerowanego obrazu kodu QR |
| `file_size` | number | Sciezka do wygenerowanego obrazu kodu QR |
| `dimensions` | object | Rozmiar pliku wyjsciowego w bajtach |

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

### Zmien rozmiar obrazu

`image.resize`

Zmien rozmiar obrazow do okreslonych wymiarow roznymi algorytmami

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
| `output_path` | string | Sciezka do zmienionego obrazu |
| `original_size` | object | Sciezka do zmienionego obrazu |
| `new_size` | object | Sciezka do zmienionego obrazu |

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

### Obróć obraz

`image.rotate`

Obróć obraz o określoną liczbę stopni

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Ścieżka do obrazu wejściowego |
| `output_path` | string | Yes | - | Ścieżka dla obrazu wyjściowego |
| `angle` | number | Yes | - | Kąt obrotu w stopniach |
| `expand` | boolean | No | `True` | Rozszerz wyjście, aby pomieścić cały obrócony obraz |
| `fill_color` | string | No | `#000000` | Kolor wypełnienia pustych obszarów po obrocie |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Ścieżka do obróconego obrazu |
| `width` | integer | Szerokość obróconego obrazu |
| `height` | integer | Wysokość obróconego obrazu |
| `angle` | number | Kąt, o jaki obrócono obraz |

**Example:** Rotate 90 degrees

```yaml
input_path: /path/to/image.png
output_path: /path/to/rotated.png
angle: 90
```

### Dodaj znak wodny

`image.watermark`

Dodaj znak wodny tekstowy lub obrazkowy do obrazu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Ścieżka do obrazu wejściowego |
| `output_path` | string | Yes | - | Ścieżka do obrazu wyjściowego |
| `text` | string | No | - | Tekst do użycia jako znak wodny |
| `watermark_image` | string | No | - | Ścieżka do pliku obrazu do użycia jako znak wodny |
| `position` | select (`center`, `top-left`, `top-right`, `bottom-left`, `bottom-right`) | No | `bottom-right` | Pozycja znaku wodnego na obrazie |
| `opacity` | number | No | `0.5` | Przezroczystość znaku wodnego (0.0 do 1.0) |
| `font_size` | number | No | `36` | Rozmiar czcionki dla znaku wodnego tekstowego |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Ścieżka do obrazu z znakiem wodnym |
| `watermark_type` | string | Rodzaj zastosowanego znaku wodnego (tekst lub obraz) |

**Example:** Add text watermark

```yaml
input_path: /path/to/image.png
output_path: /path/to/watermarked.png
text: © 2026 Company
position: bottom-right
opacity: 0.5
```
