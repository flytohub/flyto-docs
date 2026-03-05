# Image Processing

Resize, crop, compress, convert, OCR, QR codes, and watermarks.

**9 modules**

| Module | Description |
|--------|-------------|
| [이미지 압축](#이미지-압축) | 품질 유지하면서 파일 크기를 줄이기 위해 이미지 압축 |
| [이미지 변환](#이미지-변환) | 이미지를 다른 형식으로 변환 (PNG, JPEG, WEBP 등) |
| [이미지 자르기](#이미지-자르기) | 이미지를 지정된 좌표로 자르기 |
| [이미지 다운로드](#이미지-다운로드) | URL에서 로컬 파일로 이미지 다운로드 |
| [OCR 텍스트 추출](#ocr-텍스트-추출) | OCR을 사용하여 이미지에서 텍스트 추출 |
| [QR 코드 생성](#qr-코드-생성) | 텍스트, URL 또는 데이터에서 QR 코드 생성 |
| [이미지 크기 조정](#이미지-크기-조정) | 다양한 알고리즘으로 이미지를 지정된 크기로 조정 |
| [이미지 회전](#이미지-회전) | 지정된 각도로 이미지 회전 |
| [워터마크 추가](#워터마크-추가) | 이미지에 텍스트 또는 이미지 워터마크 추가 |

## Modules

### 이미지 압축

`image.compress`

품질 유지하면서 파일 크기를 줄이기 위해 이미지 압축

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
| `output_path` | string | 압축된 이미지 경로 |
| `original_size_bytes` | number | 압축된 이미지 경로 |
| `compressed_size_bytes` | number | 원본 파일 크기 (바이트) |
| `compression_ratio` | number | 압축된 파일 크기 (바이트) |

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

### 이미지 변환

`image.convert`

이미지를 다른 형식으로 변환 (PNG, JPEG, WEBP 등)

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
| `path` | string | 변환된 이미지 경로 |
| `size` | number | 변환된 이미지 경로 |
| `format` | string | 변환된 이미지 경로 |
| `dimensions` | object | 파일 크기 (바이트) |

**Example:** Convert PNG to JPEG

```yaml
input_path: /tmp/image.png
format: jpeg
quality: 90
```

### 이미지 자르기

`image.crop`

이미지를 지정된 좌표로 자르기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | 입력 이미지의 경로 |
| `output_path` | string | Yes | - | 출력 이미지의 경로 |
| `left` | number | Yes | - | 자르기 영역의 왼쪽 좌표 |
| `top` | number | Yes | - | 자르기 영역의 위쪽 좌표 |
| `right` | number | Yes | - | 자르기 영역의 오른쪽 좌표 |
| `bottom` | number | Yes | - | 자르기 영역의 아래쪽 좌표 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | 잘린 이미지의 경로 |
| `width` | integer | 잘린 이미지의 너비 |
| `height` | integer | 잘린 이미지의 높이 |
| `original_width` | integer | 원본 이미지 너비 |
| `original_height` | integer | 원본 이미지 높이 |

**Example:** Crop center region

```yaml
input_path: /path/to/image.png
output_path: /path/to/cropped.png
left: 100
top: 100
right: 500
bottom: 400
```

### 이미지 다운로드

`image.download`

URL에서 로컬 파일로 이미지 다운로드

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
| `path` | string | 다운로드된 이미지의 로컬 파일 경로 |
| `size` | number | 다운로드된 이미지의 로컬 파일 경로 |
| `content_type` | string | 다운로드된 이미지의 로컬 파일 경로 |
| `filename` | string | 파일 크기 (바이트) |

**Example:** Download image from URL

```yaml
url: https://example.com/photo.jpg
output_dir: /tmp/images
```

### OCR 텍스트 추출

`image.ocr`

OCR을 사용하여 이미지에서 텍스트 추출

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | 이미지 파일의 경로 |
| `language` | string | No | `eng` | OCR 언어 코드 (예: eng, chi_sim) |
| `psm` | number | No | `3` | Tesseract 페이지 분할 모드 |
| `output_type` | select (`text`, `data`, `boxes`) | No | `text` | OCR 출력 유형 (텍스트 또는 데이터) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | 이미지에서 추출된 텍스트 |
| `confidence` | number | OCR 신뢰도 점수 |
| `language` | string | OCR에 사용된 언어 |

**Example:** Extract text from image

```yaml
image_path: /path/to/document.png
language: eng
```

### QR 코드 생성

`image.qrcode_generate`

텍스트, URL 또는 데이터에서 QR 코드 생성

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
| `output_path` | string | 생성된 QR 코드 이미지 경로 |
| `file_size` | number | 생성된 QR 코드 이미지 경로 |
| `dimensions` | object | 출력 파일 크기 (바이트) |

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

### 이미지 크기 조정

`image.resize`

다양한 알고리즘으로 이미지를 지정된 크기로 조정

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
| `output_path` | string | 크기 조정된 이미지 경로 |
| `original_size` | object | 크기 조정된 이미지 경로 |
| `new_size` | object | 크기 조정된 이미지 경로 |

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

### 이미지 회전

`image.rotate`

지정된 각도로 이미지 회전

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | 입력 이미지의 경로 |
| `output_path` | string | Yes | - | 출력 이미지의 경로 |
| `angle` | number | Yes | - | 회전 각도 (도 단위) |
| `expand` | boolean | No | `True` | 전체 회전된 이미지를 포함하도록 출력 확장 |
| `fill_color` | string | No | `#000000` | 회전 후 빈 영역을 채울 색상 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | 회전된 이미지의 경로 |
| `width` | integer | 회전된 이미지의 너비 |
| `height` | integer | 회전된 이미지의 높이 |
| `angle` | number | 이미지가 회전된 각도 |

**Example:** Rotate 90 degrees

```yaml
input_path: /path/to/image.png
output_path: /path/to/rotated.png
angle: 90
```

### 워터마크 추가

`image.watermark`

이미지에 텍스트 또는 이미지 워터마크 추가

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | 입력 이미지 경로 |
| `output_path` | string | Yes | - | 출력 이미지 경로 |
| `text` | string | No | - | 워터마크로 사용할 텍스트 |
| `watermark_image` | string | No | - | 워터마크로 사용할 이미지 파일 경로 |
| `position` | select (`center`, `top-left`, `top-right`, `bottom-left`, `bottom-right`) | No | `bottom-right` | 이미지에서 워터마크 위치 |
| `opacity` | number | No | `0.5` | 워터마크 불투명도 (0.0에서 1.0) |
| `font_size` | number | No | `36` | 텍스트 워터마크의 글꼴 크기 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | 워터마크가 적용된 이미지 경로 |
| `watermark_type` | string | 적용된 워터마크 유형 (텍스트 또는 이미지) |

**Example:** Add text watermark

```yaml
input_path: /path/to/image.png
output_path: /path/to/watermarked.png
text: © 2026 Company
position: bottom-right
opacity: 0.5
```
