# Image Processing

Resize, crop, compress, convert, OCR, QR codes, and watermarks.

**9 modules**

| Module | Description |
|--------|-------------|
| [Comprimir imagen](#comprimir-imagen) | Comprimir imagenes para reducir tamano de archivo manteniendo calidad |
| [Convertir imagen](#convertir-imagen) | Convertir imagen a diferente formato (PNG, JPEG, WEBP, etc.) |
| [Recortar Imagen](#recortar-imagen) | Recorta una imagen a las coordenadas especificadas |
| [Descargar imagen](#descargar-imagen) | Descargar imagen de URL a archivo local |
| [Extraer Texto OCR](#extraer-texto-ocr) | Extrae texto de imágenes usando OCR |
| [Generar codigo QR](#generar-codigo-qr) | Generar codigos QR desde texto, URLs o datos |
| [Redimensionar imagen](#redimensionar-imagen) | Redimensionar imagenes a dimensiones especificadas con varios algoritmos |
| [Rotar Imagen](#rotar-imagen) | Rota una imagen por grados especificados |
| [Añadir Marca de Agua](#añadir-marca-de-agua) | Añadir marca de agua de texto o imagen a una imagen |

## Modules

### Comprimir imagen

`image.compress`

Comprimir imagenes para reducir tamano de archivo manteniendo calidad

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
| `output_path` | string | Ruta a la imagen comprimida |
| `original_size_bytes` | number | Ruta a la imagen comprimida |
| `compressed_size_bytes` | number | Tamano original del archivo en bytes |
| `compression_ratio` | number | Tamano comprimido del archivo en bytes |

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

### Convertir imagen

`image.convert`

Convertir imagen a diferente formato (PNG, JPEG, WEBP, etc.)

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
| `path` | string | Ruta a la imagen convertida |
| `size` | number | Ruta a la imagen convertida |
| `format` | string | Ruta a la imagen convertida |
| `dimensions` | object | Tamano del archivo en bytes |

**Example:** Convert PNG to JPEG

```yaml
input_path: /tmp/image.png
format: jpeg
quality: 90
```

### Recortar Imagen

`image.crop`

Recorta una imagen a las coordenadas especificadas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Ruta de la imagen de entrada |
| `output_path` | string | Yes | - | Ruta para la imagen de salida |
| `left` | number | Yes | - | Coordenada izquierda del área de recorte |
| `top` | number | Yes | - | Coordenada superior del área de recorte |
| `right` | number | Yes | - | Coordenada derecha del área de recorte |
| `bottom` | number | Yes | - | Coordenada inferior del área de recorte |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Ruta de la imagen recortada |
| `width` | integer | Ancho de la imagen recortada |
| `height` | integer | Altura de la imagen recortada |
| `original_width` | integer | Ancho original de la imagen |
| `original_height` | integer | Altura original de la imagen |

**Example:** Crop center region

```yaml
input_path: /path/to/image.png
output_path: /path/to/cropped.png
left: 100
top: 100
right: 500
bottom: 400
```

### Descargar imagen

`image.download`

Descargar imagen de URL a archivo local

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
| `path` | string | Ruta local del archivo de imagen descargado |
| `size` | number | Ruta local del archivo de imagen descargado |
| `content_type` | string | Ruta local del archivo de imagen descargado |
| `filename` | string | Tamano del archivo en bytes |

**Example:** Download image from URL

```yaml
url: https://example.com/photo.jpg
output_dir: /tmp/images
```

### Extraer Texto OCR

`image.ocr`

Extrae texto de imágenes usando OCR

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Ruta al archivo de imagen |
| `language` | string | No | `eng` | Código de idioma para OCR (ej. eng, chi_sim) |
| `psm` | number | No | `3` | Modo de segmentación de página de Tesseract |
| `output_type` | select (`text`, `data`, `boxes`) | No | `text` | Tipo de salida OCR (texto o datos) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | Texto extraído de la imagen |
| `confidence` | number | Puntuación de confianza del OCR |
| `language` | string | Idioma usado para OCR |

**Example:** Extract text from image

```yaml
image_path: /path/to/document.png
language: eng
```

### Generar codigo QR

`image.qrcode_generate`

Generar codigos QR desde texto, URLs o datos

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
| `output_path` | string | Ruta a la imagen de codigo QR generada |
| `file_size` | number | Ruta a la imagen de codigo QR generada |
| `dimensions` | object | Tamano del archivo de salida en bytes |

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

### Redimensionar imagen

`image.resize`

Redimensionar imagenes a dimensiones especificadas con varios algoritmos

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
| `output_path` | string | Ruta a la imagen redimensionada |
| `original_size` | object | Ruta a la imagen redimensionada |
| `new_size` | object | Ruta a la imagen redimensionada |

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

### Rotar Imagen

`image.rotate`

Rota una imagen por grados especificados

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Ruta de la imagen de entrada |
| `output_path` | string | Yes | - | Ruta para la imagen de salida |
| `angle` | number | Yes | - | Ángulo de rotación en grados |
| `expand` | boolean | No | `True` | Expandir salida para contener toda la imagen rotada |
| `fill_color` | string | No | `#000000` | Color para llenar áreas vacías después de la rotación |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Ruta de la imagen rotada |
| `width` | integer | Ancho de la imagen rotada |
| `height` | integer | Altura de la imagen rotada |
| `angle` | number | Ángulo al que se rotó la imagen |

**Example:** Rotate 90 degrees

```yaml
input_path: /path/to/image.png
output_path: /path/to/rotated.png
angle: 90
```

### Añadir Marca de Agua

`image.watermark`

Añadir marca de agua de texto o imagen a una imagen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Ruta de la imagen de entrada |
| `output_path` | string | Yes | - | Ruta para la imagen de salida |
| `text` | string | No | - | Texto a usar como marca de agua |
| `watermark_image` | string | No | - | Ruta al archivo de imagen para usar como marca de agua |
| `position` | select (`center`, `top-left`, `top-right`, `bottom-left`, `bottom-right`) | No | `bottom-right` | Posición de la marca de agua en la imagen |
| `opacity` | number | No | `0.5` | Opacidad de la marca de agua (0.0 a 1.0) |
| `font_size` | number | No | `36` | Tamaño de fuente para la marca de agua de texto |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Ruta de la imagen con marca de agua |
| `watermark_type` | string | Tipo de marca de agua aplicada (texto o imagen) |

**Example:** Add text watermark

```yaml
input_path: /path/to/image.png
output_path: /path/to/watermarked.png
text: © 2026 Company
position: bottom-right
opacity: 0.5
```
