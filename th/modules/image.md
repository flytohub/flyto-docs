# Image Processing

Resize, crop, compress, convert, OCR, QR codes, and watermarks.

**9 modules**

| Module | Description |
|--------|-------------|
| [บีบอัดรูปภาพ](#บีบอัดรูปภาพ) | บีบอัดรูปภาพเพื่อลดขนาดไฟล์โดยรักษาคุณภาพ |
| [แปลงรูปภาพ](#แปลงรูปภาพ) | แปลงรูปภาพเป็นรูปแบบอื่น (PNG, JPEG, WEBP ฯลฯ) |
| [ครอบตัดรูปภาพ](#ครอบตัดรูปภาพ) | ครอบตัดรูปภาพตามพิกัดที่กำหนด |
| [ดาวน์โหลดรูปภาพ](#ดาวน์โหลดรูปภาพ) | ดาวน์โหลดรูปภาพจาก URL ไปยังไฟล์ในเครื่อง |
| [OCR ดึงข้อความ](#ocr-ดึงข้อความ) | ดึงข้อความจากรูปภาพด้วย OCR |
| [สร้าง QR Code](#สร้าง-qr-code) | สร้าง QR code จากข้อความ, URL หรือข้อมูล |
| [ปรับขนาดรูปภาพ](#ปรับขนาดรูปภาพ) | ปรับขนาดรูปภาพตามขนาดที่กำหนดด้วยอัลกอริทึมต่างๆ |
| [หมุนรูปภาพ](#หมุนรูปภาพ) | หมุนรูปภาพตามองศาที่กำหนด |
| [เพิ่มลายน้ำ](#เพิ่มลายน้ำ) | เพิ่มลายน้ำข้อความหรือรูปภาพลงในรูปภาพ |

## Modules

### บีบอัดรูปภาพ

`image.compress`

บีบอัดรูปภาพเพื่อลดขนาดไฟล์โดยรักษาคุณภาพ

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
| `output_path` | string | พาธไปยังรูปภาพที่บีบอัด |
| `original_size_bytes` | number | พาธไปยังรูปภาพที่บีบอัด |
| `compressed_size_bytes` | number | ขนาดไฟล์ต้นฉบับเป็นไบต์ |
| `compression_ratio` | number | ขนาดไฟล์ที่บีบอัดเป็นไบต์ |

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

### แปลงรูปภาพ

`image.convert`

แปลงรูปภาพเป็นรูปแบบอื่น (PNG, JPEG, WEBP ฯลฯ)

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
| `path` | string | พาธไปยังรูปภาพที่แปลง |
| `size` | number | พาธไปยังรูปภาพที่แปลง |
| `format` | string | พาธไปยังรูปภาพที่แปลง |
| `dimensions` | object | ขนาดไฟล์เป็นไบต์ |

**Example:** Convert PNG to JPEG

```yaml
input_path: /tmp/image.png
format: jpeg
quality: 90
```

### ครอบตัดรูปภาพ

`image.crop`

ครอบตัดรูปภาพตามพิกัดที่กำหนด

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | เส้นทางไปยังรูปภาพต้นฉบับ |
| `output_path` | string | Yes | - | เส้นทางสำหรับรูปภาพที่ส่งออก |
| `left` | number | Yes | - | พิกัดด้านซ้ายของพื้นที่ครอบตัด |
| `top` | number | Yes | - | พิกัดด้านบนของพื้นที่ครอบตัด |
| `right` | number | Yes | - | พิกัดด้านขวาของพื้นที่ครอบตัด |
| `bottom` | number | Yes | - | พิกัดด้านล่างของพื้นที่ครอบตัด |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | เส้นทางไปยังรูปภาพที่ถูกครอบตัด |
| `width` | integer | ความกว้างของรูปภาพที่ถูกครอบตัด |
| `height` | integer | ความสูงของรูปภาพที่ถูกครอบตัด |
| `original_width` | integer | ความกว้างของรูปภาพต้นฉบับ |
| `original_height` | integer | ความสูงของรูปภาพต้นฉบับ |

**Example:** Crop center region

```yaml
input_path: /path/to/image.png
output_path: /path/to/cropped.png
left: 100
top: 100
right: 500
bottom: 400
```

### ดาวน์โหลดรูปภาพ

`image.download`

ดาวน์โหลดรูปภาพจาก URL ไปยังไฟล์ในเครื่อง

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
| `path` | string | พาธไฟล์ในเครื่องของรูปภาพที่ดาวน์โหลด |
| `size` | number | พาธไฟล์ในเครื่องของรูปภาพที่ดาวน์โหลด |
| `content_type` | string | พาธไฟล์ในเครื่องของรูปภาพที่ดาวน์โหลด |
| `filename` | string | ขนาดไฟล์เป็นไบต์ |

**Example:** Download image from URL

```yaml
url: https://example.com/photo.jpg
output_dir: /tmp/images
```

### OCR ดึงข้อความ

`image.ocr`

ดึงข้อความจากรูปภาพด้วย OCR

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | เส้นทางไปยังไฟล์รูปภาพ |
| `language` | string | No | `eng` | รหัสภาษาสำหรับ OCR (เช่น eng, chi_sim) |
| `psm` | number | No | `3` | โหมดการแบ่งหน้า Tesseract |
| `output_type` | select (`text`, `data`, `boxes`) | No | `text` | ประเภทของผลลัพธ์ OCR (ข้อความหรือข้อมูล) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | ข้อความที่ดึงจากรูปภาพ |
| `confidence` | number | คะแนนความมั่นใจของ OCR |
| `language` | string | ภาษาที่ใช้สำหรับ OCR |

**Example:** Extract text from image

```yaml
image_path: /path/to/document.png
language: eng
```

### สร้าง QR Code

`image.qrcode_generate`

สร้าง QR code จากข้อความ, URL หรือข้อมูล

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
| `output_path` | string | พาธไปยังรูปภาพ QR code ที่สร้าง |
| `file_size` | number | พาธไปยังรูปภาพ QR code ที่สร้าง |
| `dimensions` | object | ขนาดไฟล์เอาต์พุตเป็นไบต์ |

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

### ปรับขนาดรูปภาพ

`image.resize`

ปรับขนาดรูปภาพตามขนาดที่กำหนดด้วยอัลกอริทึมต่างๆ

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
| `output_path` | string | พาธไปยังรูปภาพที่ปรับขนาด |
| `original_size` | object | พาธไปยังรูปภาพที่ปรับขนาด |
| `new_size` | object | พาธไปยังรูปภาพที่ปรับขนาด |

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

### หมุนรูปภาพ

`image.rotate`

หมุนรูปภาพตามองศาที่กำหนด

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | เส้นทางไปยังรูปภาพต้นฉบับ |
| `output_path` | string | Yes | - | เส้นทางสำหรับรูปภาพที่ส่งออก |
| `angle` | number | Yes | - | มุมการหมุนเป็นองศา |
| `expand` | boolean | No | `True` | ขยายผลลัพธ์เพื่อรองรับรูปภาพที่หมุนทั้งหมด |
| `fill_color` | string | No | `#000000` | สีเติมพื้นที่ว่างหลังจากหมุน |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | เส้นทางไปยังรูปภาพที่ถูกหมุน |
| `width` | integer | ความกว้างของรูปภาพที่ถูกหมุน |
| `height` | integer | ความสูงของรูปภาพที่ถูกหมุน |
| `angle` | number | มุมที่รูปภาพถูกหมุน |

**Example:** Rotate 90 degrees

```yaml
input_path: /path/to/image.png
output_path: /path/to/rotated.png
angle: 90
```

### เพิ่มลายน้ำ

`image.watermark`

เพิ่มลายน้ำข้อความหรือรูปภาพลงในรูปภาพ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | เส้นทางไปยังภาพต้นฉบับ |
| `output_path` | string | Yes | - | เส้นทางสำหรับภาพผลลัพธ์ |
| `text` | string | No | - | ข้อความที่ใช้เป็นลายน้ำ |
| `watermark_image` | string | No | - | เส้นทางไปยังไฟล์ภาพที่ใช้เป็นลายน้ำ |
| `position` | select (`center`, `top-left`, `top-right`, `bottom-left`, `bottom-right`) | No | `bottom-right` | ตำแหน่งของลายน้ำบนภาพ |
| `opacity` | number | No | `0.5` | ความโปร่งใสของลายน้ำ (0.0 ถึง 1.0) |
| `font_size` | number | No | `36` | ขนาดตัวอักษรสำหรับลายน้ำข้อความ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | เส้นทางไปยังภาพที่มีลายน้ำ |
| `watermark_type` | string | ประเภทของลายน้ำที่ใช้ (ข้อความหรือภาพ) |

**Example:** Add text watermark

```yaml
input_path: /path/to/image.png
output_path: /path/to/watermarked.png
text: © 2026 Company
position: bottom-right
opacity: 0.5
```
