# Image Processing

Resize, crop, compress, convert, OCR, QR codes, and watermarks.

**9 modules**

| Module | Description |
|--------|-------------|
| [Comprimi Immagine](#comprimi-immagine) | Comprimi immagini per ridurre dimensione file mantenendo qualita |
| [Converti Immagine](#converti-immagine) | Converti immagine in formato diverso (PNG, JPEG, WEBP, ecc.) |
| [Ritaglia Immagine](#ritaglia-immagine) | Ritaglia un'immagine alle coordinate specificate |
| [Scarica Immagine](#scarica-immagine) | Scarica immagine da URL a file locale |
| [OCR Estrai Testo](#ocr-estrai-testo) | Estrai testo dalle immagini usando OCR |
| [Genera Codice QR](#genera-codice-qr) | Genera codici QR da testo, URL o dati |
| [Ridimensiona Immagine](#ridimensiona-immagine) | Ridimensiona immagini alle dimensioni specificate con vari algoritmi |
| [Ruota Immagine](#ruota-immagine) | Ruota un'immagine di gradi specificati |
| [Aggiungi Watermark](#aggiungi-watermark) | Aggiungi testo o immagine come watermark a un'immagine |

## Modules

### Comprimi Immagine

`image.compress`

Comprimi immagini per ridurre dimensione file mantenendo qualita

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
| `output_path` | string | Percorso dell'immagine compressa |
| `original_size_bytes` | number | Percorso dell'immagine compressa |
| `compressed_size_bytes` | number | Dimensione file originale in byte |
| `compression_ratio` | number | Dimensione file compresso in byte |

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

### Converti Immagine

`image.convert`

Converti immagine in formato diverso (PNG, JPEG, WEBP, ecc.)

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
| `path` | string | Percorso dell'immagine convertita |
| `size` | number | Percorso dell'immagine convertita |
| `format` | string | Percorso dell'immagine convertita |
| `dimensions` | object | Dimensione file in byte |

**Example:** Convert PNG to JPEG

```yaml
input_path: /tmp/image.png
format: jpeg
quality: 90
```

### Ritaglia Immagine

`image.crop`

Ritaglia un'immagine alle coordinate specificate

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Percorso dell'immagine di input |
| `output_path` | string | Yes | - | Percorso per l'immagine di output |
| `left` | number | Yes | - | Coordinata sinistra dell'area di ritaglio |
| `top` | number | Yes | - | Coordinata superiore dell'area di ritaglio |
| `right` | number | Yes | - | Coordinata destra dell'area di ritaglio |
| `bottom` | number | Yes | - | Coordinata inferiore dell'area di ritaglio |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Percorso dell'immagine ritagliata |
| `width` | integer | Larghezza dell'immagine ritagliata |
| `height` | integer | Altezza dell'immagine ritagliata |
| `original_width` | integer | Larghezza originale dell'immagine |
| `original_height` | integer | Altezza originale dell'immagine |

**Example:** Crop center region

```yaml
input_path: /path/to/image.png
output_path: /path/to/cropped.png
left: 100
top: 100
right: 500
bottom: 400
```

### Scarica Immagine

`image.download`

Scarica immagine da URL a file locale

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
| `path` | string | Percorso file locale dell'immagine scaricata |
| `size` | number | Percorso file locale dell'immagine scaricata |
| `content_type` | string | Percorso file locale dell'immagine scaricata |
| `filename` | string | Dimensione file in byte |

**Example:** Download image from URL

```yaml
url: https://example.com/photo.jpg
output_dir: /tmp/images
```

### OCR Estrai Testo

`image.ocr`

Estrai testo dalle immagini usando OCR

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Percorso del file immagine |
| `language` | string | No | `eng` | Codice lingua per OCR (es. eng, chi_sim) |
| `psm` | number | No | `3` | Modalità di segmentazione pagina Tesseract |
| `output_type` | select (`text`, `data`, `boxes`) | No | `text` | Tipo di output OCR (testo o dati) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | Testo estratto dall'immagine |
| `confidence` | number | Punteggio di confidenza OCR |
| `language` | string | Lingua utilizzata per OCR |

**Example:** Extract text from image

```yaml
image_path: /path/to/document.png
language: eng
```

### Genera Codice QR

`image.qrcode_generate`

Genera codici QR da testo, URL o dati

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
| `output_path` | string | Percorso dell'immagine codice QR generata |
| `file_size` | number | Percorso dell'immagine codice QR generata |
| `dimensions` | object | Dimensione del file di output in byte |

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

### Ridimensiona Immagine

`image.resize`

Ridimensiona immagini alle dimensioni specificate con vari algoritmi

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
| `output_path` | string | Percorso dell'immagine ridimensionata |
| `original_size` | object | Percorso dell'immagine ridimensionata |
| `new_size` | object | Percorso dell'immagine ridimensionata |

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

### Ruota Immagine

`image.rotate`

Ruota un'immagine di gradi specificati

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Percorso dell'immagine di input |
| `output_path` | string | Yes | - | Percorso per l'immagine di output |
| `angle` | number | Yes | - | Angolo di rotazione in gradi |
| `expand` | boolean | No | `True` | Espandi l'output per contenere l'intera immagine ruotata |
| `fill_color` | string | No | `#000000` | Colore per riempire le aree vuote dopo la rotazione |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Percorso dell'immagine ruotata |
| `width` | integer | Larghezza dell'immagine ruotata |
| `height` | integer | Altezza dell'immagine ruotata |
| `angle` | number | Angolo di rotazione dell'immagine |

**Example:** Rotate 90 degrees

```yaml
input_path: /path/to/image.png
output_path: /path/to/rotated.png
angle: 90
```

### Aggiungi Watermark

`image.watermark`

Aggiungi testo o immagine come watermark a un'immagine

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Percorso dell'immagine di input |
| `output_path` | string | Yes | - | Percorso per l'immagine di output |
| `text` | string | No | - | Testo da usare come filigrana |
| `watermark_image` | string | No | - | Percorso del file immagine da usare come filigrana |
| `position` | select (`center`, `top-left`, `top-right`, `bottom-left`, `bottom-right`) | No | `bottom-right` | Posizione della filigrana sull'immagine |
| `opacity` | number | No | `0.5` | Opacità della filigrana (da 0,0 a 1,0) |
| `font_size` | number | No | `36` | Dimensione del carattere per la filigrana di testo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Percorso dell'immagine con filigrana |
| `watermark_type` | string | Tipo di filigrana applicata (testo o immagine) |

**Example:** Add text watermark

```yaml
input_path: /path/to/image.png
output_path: /path/to/watermarked.png
text: © 2026 Company
position: bottom-right
opacity: 0.5
```
