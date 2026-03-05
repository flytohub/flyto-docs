# Image Processing

Resize, crop, compress, convert, OCR, QR codes, and watermarks.

**9 modules**

| Module | Description |
|--------|-------------|
| [Nén hình ảnh](#nén-hình-ảnh) | Nén hình ảnh để giảm kích thước tệp trong khi duy trì chất lượng |
| [Chuyển đổi hình ảnh](#chuyển-đổi-hình-ảnh) | Chuyển đổi hình ảnh sang định dạng khác (PNG, JPEG, WEBP, v.v.) |
| [Cắt Ảnh](#cắt-ảnh) | Cắt hình ảnh theo tọa độ chỉ định |
| [Tải hình ảnh](#tải-hình-ảnh) | Tải hình ảnh từ URL về tệp cục bộ |
| [Trích Xuất Văn Bản OCR](#trích-xuất-văn-bản-ocr) | Trích xuất văn bản từ hình ảnh bằng OCR |
| [Tạo mã QR](#tạo-mã-qr) | Tạo mã QR từ văn bản, URL hoặc dữ liệu |
| [Thay đổi kích thước hình ảnh](#thay-đổi-kích-thước-hình-ảnh) | Thay đổi kích thước hình ảnh theo kích thước chỉ định với các thuật toán khác nhau |
| [Xoay Ảnh](#xoay-ảnh) | Xoay hình ảnh theo độ chỉ định |
| [Thêm Watermark](#thêm-watermark) | Thêm watermark văn bản hoặc hình ảnh vào ảnh |

## Modules

### Nén hình ảnh

`image.compress`

Nén hình ảnh để giảm kích thước tệp trong khi duy trì chất lượng

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
| `output_path` | string | Đường dẫn đến hình ảnh đã nén |
| `original_size_bytes` | number | Đường dẫn đến hình ảnh đã nén |
| `compressed_size_bytes` | number | Kích thước tệp gốc tính bằng byte |
| `compression_ratio` | number | Kích thước tệp đã nén tính bằng byte |

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

### Chuyển đổi hình ảnh

`image.convert`

Chuyển đổi hình ảnh sang định dạng khác (PNG, JPEG, WEBP, v.v.)

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
| `path` | string | Đường dẫn đến hình ảnh đã chuyển đổi |
| `size` | number | Đường dẫn đến hình ảnh đã chuyển đổi |
| `format` | string | Đường dẫn đến hình ảnh đã chuyển đổi |
| `dimensions` | object | Kích thước tệp tính bằng byte |

**Example:** Convert PNG to JPEG

```yaml
input_path: /tmp/image.png
format: jpeg
quality: 90
```

### Cắt Ảnh

`image.crop`

Cắt hình ảnh theo tọa độ chỉ định

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Đường dẫn đến ảnh đầu vào |
| `output_path` | string | Yes | - | Đường dẫn cho ảnh đầu ra |
| `left` | number | Yes | - | Tọa độ trái của vùng cắt |
| `top` | number | Yes | - | Tọa độ trên của vùng cắt |
| `right` | number | Yes | - | Tọa độ phải của vùng cắt |
| `bottom` | number | Yes | - | Tọa độ dưới của vùng cắt |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Đường dẫn đến ảnh đã cắt |
| `width` | integer | Chiều rộng của ảnh đã cắt |
| `height` | integer | Chiều cao của ảnh đã cắt |
| `original_width` | integer | Chiều rộng ảnh gốc |
| `original_height` | integer | Chiều cao ảnh gốc |

**Example:** Crop center region

```yaml
input_path: /path/to/image.png
output_path: /path/to/cropped.png
left: 100
top: 100
right: 500
bottom: 400
```

### Tải hình ảnh

`image.download`

Tải hình ảnh từ URL về tệp cục bộ

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
| `path` | string | Đường dẫn tệp cục bộ của hình ảnh đã tải |
| `size` | number | Đường dẫn tệp cục bộ của hình ảnh đã tải |
| `content_type` | string | Đường dẫn tệp cục bộ của hình ảnh đã tải |
| `filename` | string | Kích thước tệp tính bằng byte |

**Example:** Download image from URL

```yaml
url: https://example.com/photo.jpg
output_dir: /tmp/images
```

### Trích Xuất Văn Bản OCR

`image.ocr`

Trích xuất văn bản từ hình ảnh bằng OCR

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Đường dẫn đến tệp hình ảnh |
| `language` | string | No | `eng` | Mã ngôn ngữ cho OCR (vd: eng, chi_sim) |
| `psm` | number | No | `3` | Chế độ phân đoạn trang của Tesseract |
| `output_type` | select (`text`, `data`, `boxes`) | No | `text` | Loại đầu ra OCR (văn bản hoặc dữ liệu) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | Văn bản trích xuất từ hình ảnh |
| `confidence` | number | Điểm tin cậy của OCR |
| `language` | string | Ngôn ngữ sử dụng cho OCR |

**Example:** Extract text from image

```yaml
image_path: /path/to/document.png
language: eng
```

### Tạo mã QR

`image.qrcode_generate`

Tạo mã QR từ văn bản, URL hoặc dữ liệu

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
| `output_path` | string | Đường dẫn đến hình ảnh mã QR đã tạo |
| `file_size` | number | Đường dẫn đến hình ảnh mã QR đã tạo |
| `dimensions` | object | Kích thước tệp đầu ra tính bằng byte |

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

### Thay đổi kích thước hình ảnh

`image.resize`

Thay đổi kích thước hình ảnh theo kích thước chỉ định với các thuật toán khác nhau

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
| `output_path` | string | Đường dẫn đến hình ảnh đã thay đổi kích thước |
| `original_size` | object | Đường dẫn đến hình ảnh đã thay đổi kích thước |
| `new_size` | object | Đường dẫn đến hình ảnh đã thay đổi kích thước |

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

### Xoay Ảnh

`image.rotate`

Xoay hình ảnh theo độ chỉ định

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Đường dẫn đến ảnh đầu vào |
| `output_path` | string | Yes | - | Đường dẫn cho ảnh đầu ra |
| `angle` | number | Yes | - | Góc xoay tính bằng độ |
| `expand` | boolean | No | `True` | Mở rộng đầu ra để chứa toàn bộ ảnh đã xoay |
| `fill_color` | string | No | `#000000` | Màu để lấp đầy vùng trống sau khi xoay |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Đường dẫn đến ảnh đã xoay |
| `width` | integer | Chiều rộng của ảnh đã xoay |
| `height` | integer | Chiều cao của ảnh đã xoay |
| `angle` | number | Góc xoay của ảnh |

**Example:** Rotate 90 degrees

```yaml
input_path: /path/to/image.png
output_path: /path/to/rotated.png
angle: 90
```

### Thêm Watermark

`image.watermark`

Thêm watermark văn bản hoặc hình ảnh vào ảnh

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Đường dẫn đến hình ảnh đầu vào |
| `output_path` | string | Yes | - | Đường dẫn cho hình ảnh đầu ra |
| `text` | string | No | - | Văn bản dùng làm watermark |
| `watermark_image` | string | No | - | Đường dẫn đến tệp hình ảnh dùng làm watermark |
| `position` | select (`center`, `top-left`, `top-right`, `bottom-left`, `bottom-right`) | No | `bottom-right` | Vị trí của watermark trên hình ảnh |
| `opacity` | number | No | `0.5` | Độ mờ của watermark (0.0 đến 1.0) |
| `font_size` | number | No | `36` | Kích thước chữ cho watermark văn bản |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Đường dẫn đến hình ảnh đã thêm watermark |
| `watermark_type` | string | Loại watermark áp dụng (chữ hoặc hình ảnh) |

**Example:** Add text watermark

```yaml
input_path: /path/to/image.png
output_path: /path/to/watermarked.png
text: © 2026 Company
position: bottom-right
opacity: 0.5
```
