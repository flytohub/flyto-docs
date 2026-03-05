# Image Processing

Resize, crop, compress, convert, OCR, QR codes, and watermarks.

**9 modules**

| Module | Description |
|--------|-------------|
| [Comprimir Imagem](#comprimir-imagem) | Comprimir imagens para reduzir tamanho do arquivo mantendo qualidade |
| [Converter Imagem](#converter-imagem) | Converter imagem para formato diferente (PNG, JPEG, WEBP, etc.) |
| [Cortar Imagem](#cortar-imagem) | Cortar uma imagem para coordenadas especificadas |
| [Baixar Imagem](#baixar-imagem) | Baixar imagem de URL para arquivo local |
| [Extrair Texto OCR](#extrair-texto-ocr) | Extrair texto de imagens usando OCR |
| [Gerar Codigo QR](#gerar-codigo-qr) | Gerar codigos QR a partir de texto, URLs ou dados |
| [Redimensionar Imagem](#redimensionar-imagem) | Redimensionar imagens para dimensoes especificadas com varios algoritmos |
| [Girar Imagem](#girar-imagem) | Girar uma imagem por graus especificados |
| [Adicionar Marca d'Água](#adicionar-marca-d'água) | Adicionar marca d'água de texto ou imagem a uma imagem |

## Modules

### Comprimir Imagem

`image.compress`

Comprimir imagens para reduzir tamanho do arquivo mantendo qualidade

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
| `output_path` | string | Caminho para a imagem comprimida |
| `original_size_bytes` | number | Caminho para a imagem comprimida |
| `compressed_size_bytes` | number | Tamanho original do arquivo em bytes |
| `compression_ratio` | number | Tamanho do arquivo comprimido em bytes |

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

### Converter Imagem

`image.convert`

Converter imagem para formato diferente (PNG, JPEG, WEBP, etc.)

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
| `path` | string | Caminho para a imagem convertida |
| `size` | number | Caminho para a imagem convertida |
| `format` | string | Caminho para a imagem convertida |
| `dimensions` | object | Tamanho do arquivo em bytes |

**Example:** Convert PNG to JPEG

```yaml
input_path: /tmp/image.png
format: jpeg
quality: 90
```

### Cortar Imagem

`image.crop`

Cortar uma imagem para coordenadas especificadas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Caminho para a imagem de entrada |
| `output_path` | string | Yes | - | Caminho para a imagem de saída |
| `left` | number | Yes | - | Coordenada esquerda da área de corte |
| `top` | number | Yes | - | Coordenada superior da área de corte |
| `right` | number | Yes | - | Coordenada direita da área de corte |
| `bottom` | number | Yes | - | Coordenada inferior da área de corte |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Caminho para a imagem cortada |
| `width` | integer | Largura da imagem cortada |
| `height` | integer | Altura da imagem cortada |
| `original_width` | integer | Largura original da imagem |
| `original_height` | integer | Altura original da imagem |

**Example:** Crop center region

```yaml
input_path: /path/to/image.png
output_path: /path/to/cropped.png
left: 100
top: 100
right: 500
bottom: 400
```

### Baixar Imagem

`image.download`

Baixar imagem de URL para arquivo local

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
| `path` | string | Caminho local do arquivo da imagem baixada |
| `size` | number | Caminho local do arquivo da imagem baixada |
| `content_type` | string | Caminho local do arquivo da imagem baixada |
| `filename` | string | Tamanho do arquivo em bytes |

**Example:** Download image from URL

```yaml
url: https://example.com/photo.jpg
output_dir: /tmp/images
```

### Extrair Texto OCR

`image.ocr`

Extrair texto de imagens usando OCR

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Caminho para o arquivo de imagem |
| `language` | string | No | `eng` | Código do idioma para OCR (ex: eng, chi_sim) |
| `psm` | number | No | `3` | Modo de segmentação de página do Tesseract |
| `output_type` | select (`text`, `data`, `boxes`) | No | `text` | Tipo de saída do OCR (texto ou dados) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | Texto extraído da imagem |
| `confidence` | number | Pontuação de confiança do OCR |
| `language` | string | Idioma usado para OCR |

**Example:** Extract text from image

```yaml
image_path: /path/to/document.png
language: eng
```

### Gerar Codigo QR

`image.qrcode_generate`

Gerar codigos QR a partir de texto, URLs ou dados

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
| `output_path` | string | Caminho para a imagem do codigo QR gerado |
| `file_size` | number | Caminho para a imagem do codigo QR gerado |
| `dimensions` | object | Tamanho do arquivo de saida em bytes |

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

### Redimensionar Imagem

`image.resize`

Redimensionar imagens para dimensoes especificadas com varios algoritmos

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
| `output_path` | string | Caminho para a imagem redimensionada |
| `original_size` | object | Caminho para a imagem redimensionada |
| `new_size` | object | Caminho para a imagem redimensionada |

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

### Girar Imagem

`image.rotate`

Girar uma imagem por graus especificados

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Caminho para a imagem de entrada |
| `output_path` | string | Yes | - | Caminho para a imagem de saída |
| `angle` | number | Yes | - | Ângulo de rotação em graus |
| `expand` | boolean | No | `True` | Expandir saída para conter toda a imagem girada |
| `fill_color` | string | No | `#000000` | Cor para preencher áreas vazias após rotação |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Caminho para a imagem girada |
| `width` | integer | Largura da imagem girada |
| `height` | integer | Altura da imagem girada |
| `angle` | number | Ângulo que a imagem foi girada |

**Example:** Rotate 90 degrees

```yaml
input_path: /path/to/image.png
output_path: /path/to/rotated.png
angle: 90
```

### Adicionar Marca d'Água

`image.watermark`

Adicionar marca d'água de texto ou imagem a uma imagem

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Caminho para a imagem de entrada |
| `output_path` | string | Yes | - | Caminho para a imagem de saída |
| `text` | string | No | - | Texto a ser usado como marca d'água |
| `watermark_image` | string | No | - | Caminho para o arquivo de imagem a ser usado como marca d'água |
| `position` | select (`center`, `top-left`, `top-right`, `bottom-left`, `bottom-right`) | No | `bottom-right` | Posição da marca d'água na imagem |
| `opacity` | number | No | `0.5` | Opacidade da marca d'água (0,0 a 1,0) |
| `font_size` | number | No | `36` | Tamanho da fonte para marca d'água de texto |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Caminho para a imagem com marca d'água |
| `watermark_type` | string | Tipo de marca d'água aplicada (texto ou imagem) |

**Example:** Add text watermark

```yaml
input_path: /path/to/image.png
output_path: /path/to/watermarked.png
text: © 2026 Company
position: bottom-right
opacity: 0.5
```
