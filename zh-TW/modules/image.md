# Image Processing

Resize, crop, compress, convert, OCR, QR codes, and watermarks.

**9 modules**

| Module | Description |
|--------|-------------|
| [壓縮圖片](#壓縮圖片) | 壓縮圖片以減少檔案大小同時保持品質 |
| [轉換圖片](#轉換圖片) | 將圖片轉換為不同格式（PNG、JPEG、WEBP 等） |
| [裁剪圖片](#裁剪圖片) | 裁剪圖片到指定座標 |
| [下載圖片](#下載圖片) | 從網址下載圖片到本機檔案 |
| [OCR 提取文字](#ocr-提取文字) | 使用 OCR 從圖片中提取文字 |
| [產生 QR Code](#產生-qr-code) | 從文字、網址或資料產生 QR Code |
| [調整圖片大小](#調整圖片大小) | 使用各種演算法將圖片調整為指定尺寸 |
| [旋轉圖片](#旋轉圖片) | 將圖片旋轉指定角度 |
| [新增浮水印](#新增浮水印) | 為圖片新增文字或圖片浮水印 |

## Modules

### 壓縮圖片

`image.compress`

壓縮圖片以減少檔案大小同時保持品質

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
| `output_path` | string | 壓縮後圖片的路徑 |
| `original_size_bytes` | number | 原始檔案大小（位元組） |
| `compressed_size_bytes` | number | 壓縮後的檔案大小（位元組） |
| `compression_ratio` | number | 壓縮比例 |

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

### 轉換圖片

`image.convert`

將圖片轉換為不同格式（PNG、JPEG、WEBP 等）

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
| `path` | string | 轉換後圖片的路徑 |
| `size` | number | 檔案大小（位元組） |
| `format` | string | 輸出格式 |
| `dimensions` | object | 圖片尺寸 |

**Example:** Convert PNG to JPEG

```yaml
input_path: /tmp/image.png
format: jpeg
quality: 90
```

### 裁剪圖片

`image.crop`

裁剪圖片到指定座標

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | 輸入圖片的路徑 |
| `output_path` | string | Yes | - | 輸出圖片的路徑 |
| `left` | number | Yes | - | 裁剪區域的左邊座標 |
| `top` | number | Yes | - | 裁剪區域的上邊座標 |
| `right` | number | Yes | - | 裁剪區域的右邊座標 |
| `bottom` | number | Yes | - | 裁剪區域的下邊座標 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | 裁剪後圖片的路徑 |
| `width` | integer | 裁剪後圖片的寬度 |
| `height` | integer | 裁剪後圖片的高度 |
| `original_width` | integer | 原始圖片寬度 |
| `original_height` | integer | 原始圖片高度 |

**Example:** Crop center region

```yaml
input_path: /path/to/image.png
output_path: /path/to/cropped.png
left: 100
top: 100
right: 500
bottom: 400
```

### 下載圖片

`image.download`

從網址下載圖片到本機檔案

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
| `path` | string | 下載圖片的本機路徑 |
| `size` | number | 檔案大小（位元組） |
| `content_type` | string | 內容類型 |
| `filename` | string | 檔案名稱 |

**Example:** Download image from URL

```yaml
url: https://example.com/photo.jpg
output_dir: /tmp/images
```

### OCR 提取文字

`image.ocr`

使用 OCR 從圖片中提取文字

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | 圖片檔案的路徑 |
| `language` | string | No | `eng` | OCR 的語言代碼（例如：eng, chi_sim） |
| `psm` | number | No | `3` | Tesseract 頁面分割模式 |
| `output_type` | select (`text`, `data`, `boxes`) | No | `text` | OCR 輸出的類型（文字或資料） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | 從圖片中提取的文字 |
| `confidence` | number | OCR 信心指數 |
| `language` | string | OCR 使用的語言 |

**Example:** Extract text from image

```yaml
image_path: /path/to/document.png
language: eng
```

### 產生 QR Code

`image.qrcode_generate`

從文字、網址或資料產生 QR Code

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
| `output_path` | string | 產生的 QR Code 圖片路徑 |
| `file_size` | number | 輸出檔案大小（位元組） |
| `dimensions` | object | QR Code 尺寸 |

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

### 調整圖片大小

`image.resize`

使用各種演算法將圖片調整為指定尺寸

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
| `output_path` | string | 調整後圖片的路徑 |
| `original_size` | object | 原始尺寸 |
| `new_size` | object | 新尺寸 |

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

### 旋轉圖片

`image.rotate`

將圖片旋轉指定角度

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | 輸入圖片的路徑 |
| `output_path` | string | Yes | - | 輸出圖片的路徑 |
| `angle` | number | Yes | - | 旋轉角度（度） |
| `expand` | boolean | No | `True` | 展開輸出以容納整個旋轉後的圖片 |
| `fill_color` | string | No | `#000000` | 旋轉後填補空白區域的顏色 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | 旋轉後圖片的路徑 |
| `width` | integer | 旋轉後圖片的寬度 |
| `height` | integer | 旋轉後圖片的高度 |
| `angle` | number | 圖片旋轉的角度 |

**Example:** Rotate 90 degrees

```yaml
input_path: /path/to/image.png
output_path: /path/to/rotated.png
angle: 90
```

### 新增浮水印

`image.watermark`

為圖片新增文字或圖片浮水印

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | 輸入圖片的路徑 |
| `output_path` | string | Yes | - | 輸出圖片的路徑 |
| `text` | string | No | - | 用作浮水印的文字 |
| `watermark_image` | string | No | - | 用作浮水印的圖片檔案路徑 |
| `position` | select (`center`, `top-left`, `top-right`, `bottom-left`, `bottom-right`) | No | `bottom-right` | 浮水印在圖片上的位置 |
| `opacity` | number | No | `0.5` | 浮水印透明度（0.0 到 1.0） |
| `font_size` | number | No | `36` | 文字浮水印的字型大小 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | 浮水印圖片的路徑 |
| `watermark_type` | string | 套用的浮水印類型（文字或圖片） |

**Example:** Add text watermark

```yaml
input_path: /path/to/image.png
output_path: /path/to/watermarked.png
text: © 2026 Company
position: bottom-right
opacity: 0.5
```
