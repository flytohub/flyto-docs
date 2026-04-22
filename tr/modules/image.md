# Image Processing

Resize, crop, compress, convert, OCR, QR codes, and watermarks.

**9 modules**

| Module | Description |
|--------|-------------|
| [Compress Image](#compress-image) | Compress images to reduce file size while maintaining quality |
| [Convert Image](#convert-image) | Convert image to different format (PNG, JPEG, WEBP, etc.) |
| [Crop Image](#crop-image) | Crop image to specified region |
| [Download Image](#download-image) | Download image from URL to local file |
| [OCR - Extract Text](#ocr---extract-text) | Extract text from images using Tesseract OCR |
| [Generate QR Code](#generate-qr-code) | Generate QR codes from text, URLs, or data |
| [Resize Image](#resize-image) | Resize images to specified dimensions with various algorithms |
| [Rotate Image](#rotate-image) | Rotate image by specified angle |
| [Add Watermark](#add-watermark) | Add text or image watermark to images |

## Modules

### Compress Image

`image.compress`

Compress images to reduce file size while maintaining quality

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
| `output_path` | string | Path to the compressed image |
| `original_size_bytes` | number | Original file size in bytes |
| `compressed_size_bytes` | number | Compressed file size in bytes |
| `compression_ratio` | number | Compression ratio (original/compressed) |

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

### Convert Image

`image.convert`

Convert image to different format (PNG, JPEG, WEBP, etc.)

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
| `path` | string | Path to the converted image |
| `size` | number | File size in bytes |
| `format` | string | Output format |
| `dimensions` | object | Image dimensions {width, height} |

**Example:** Convert PNG to JPEG

```yaml
input_path: /tmp/image.png
format: jpeg
quality: 90
```

### Crop Image

`image.crop`

Crop image to specified region

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the source image |
| `output_path` | string | Yes | - | Path to save the cropped image |
| `left` | number | Yes | - | Left coordinate of crop region (pixels) |
| `top` | number | Yes | - | Top coordinate of crop region (pixels) |
| `right` | number | Yes | - | Right coordinate of crop region (pixels) |
| `bottom` | number | Yes | - | Bottom coordinate of crop region (pixels) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Path to the cropped image |
| `width` | integer | Width of the cropped image |
| `height` | integer | Height of the cropped image |
| `original_width` | integer | Original image width |
| `original_height` | integer | Original image height |

**Example:** Crop center region

```yaml
input_path: /path/to/image.png
output_path: /path/to/cropped.png
left: 100
top: 100
right: 500
bottom: 400
```

### Download Image

`image.download`

Download image from URL to local file

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
| `path` | string | Local file path of downloaded image |
| `size` | number | File size in bytes |
| `content_type` | string | Content type of the image |
| `filename` | string | Filename of the downloaded image |

**Example:** Download image from URL

```yaml
url: https://example.com/photo.jpg
output_dir: /tmp/images
```

### OCR - Extract Text

`image.ocr`

Extract text from images using Tesseract OCR

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Path to the image file |
| `language` | string | No | `eng` | OCR language code (e.g. eng, chi_tra, jpn) |
| `psm` | number | No | `3` | Tesseract page segmentation mode (0-13) |
| `output_type` | select (`text`, `data`, `boxes`) | No | `text` | Type of OCR output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | Extracted text from the image |
| `confidence` | number | Average OCR confidence score (0-100) |
| `language` | string | Language used for OCR |

**Example:** Extract text from image

```yaml
image_path: /path/to/document.png
language: eng
```

### Generate QR Code

`image.qrcode_generate`

Generate QR codes from text, URLs, or data

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
| `output_path` | string | Path to the generated QR code image |
| `file_size` | number | Size of the output file in bytes |
| `dimensions` | object | Image dimensions {width, height} |

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

### Resize Image

`image.resize`

Resize images to specified dimensions with various algorithms

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
| `output_path` | string | Path to the resized image |
| `original_size` | object | Original image dimensions |
| `new_size` | object | New image dimensions |

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

### Rotate Image

`image.rotate`

Rotate image by specified angle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the source image |
| `output_path` | string | Yes | - | Path to save the rotated image |
| `angle` | number | Yes | - | Rotation angle in degrees (counter-clockwise) |
| `expand` | boolean | No | `True` | Expand output canvas to fit the entire rotated image |
| `fill_color` | string | No | `#000000` | Background fill color for empty areas (hex) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Path to the rotated image |
| `width` | integer | Width of the rotated image |
| `height` | integer | Height of the rotated image |
| `angle` | number | Rotation angle applied |

**Example:** Rotate 90 degrees

```yaml
input_path: /path/to/image.png
output_path: /path/to/rotated.png
angle: 90
```

### Add Watermark

`image.watermark`

Add text or image watermark to images

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the source image |
| `output_path` | string | Yes | - | Path to save the watermarked image |
| `text` | string | No | - | Text to use as watermark (optional if watermark_image is set) |
| `watermark_image` | string | No | - | Path to watermark image (optional if text is set) |
| `position` | select (`center`, `top-left`, `top-right`, `bottom-left`, `bottom-right`) | No | `bottom-right` | Watermark position on the image |
| `opacity` | number | No | `0.5` | Watermark opacity (0.0 = transparent, 1.0 = opaque) |
| `font_size` | number | No | `36` | Font size for text watermark |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Path to the watermarked image |
| `watermark_type` | string | Type of watermark applied (text or image) |

**Example:** Add text watermark

```yaml
input_path: /path/to/image.png
output_path: /path/to/watermarked.png
text: © 2026 Company
position: bottom-right
opacity: 0.5
```
