# Image Processing

Resize, crop, compress, convert, OCR, QR codes, and watermarks.

**9 modules**

| Module | Description |
|--------|-------------|
| [Kompres Gambar](#kompres-gambar) | Kompres gambar untuk mengurangi ukuran file sambil menjaga kualitas |
| [Konversi Gambar](#konversi-gambar) | Konversi gambar ke format berbeda (PNG, JPEG, WEBP, dll.) |
| [Potong Gambar](#potong-gambar) | Potong gambar ke koordinat yang ditentukan |
| [Unduh Gambar](#unduh-gambar) | Unduh gambar dari URL ke file lokal |
| [Ekstrak Teks OCR](#ekstrak-teks-ocr) | Ekstrak teks dari gambar menggunakan OCR |
| [Hasilkan Kode QR](#hasilkan-kode-qr) | Hasilkan kode QR dari teks, URL, atau data |
| [Ubah Ukuran Gambar](#ubah-ukuran-gambar) | Ubah ukuran gambar ke dimensi tertentu dengan berbagai algoritma |
| [Putar Gambar](#putar-gambar) | Putar gambar dengan derajat yang ditentukan |
| [Tambahkan Watermark](#tambahkan-watermark) | Tambahkan watermark teks atau gambar ke gambar |

## Modules

### Kompres Gambar

`image.compress`

Kompres gambar untuk mengurangi ukuran file sambil menjaga kualitas

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
| `output_path` | string | Path ke gambar terkompres |
| `original_size_bytes` | number | Path ke gambar terkompres |
| `compressed_size_bytes` | number | Ukuran file asli dalam bytes |
| `compression_ratio` | number | Ukuran file terkompres dalam bytes |

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

### Konversi Gambar

`image.convert`

Konversi gambar ke format berbeda (PNG, JPEG, WEBP, dll.)

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
| `path` | string | Path ke gambar terkonversi |
| `size` | number | Path ke gambar terkonversi |
| `format` | string | Path ke gambar terkonversi |
| `dimensions` | object | Ukuran file dalam bytes |

**Example:** Convert PNG to JPEG

```yaml
input_path: /tmp/image.png
format: jpeg
quality: 90
```

### Potong Gambar

`image.crop`

Potong gambar ke koordinat yang ditentukan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Jalur ke gambar input |
| `output_path` | string | Yes | - | Jalur untuk gambar output |
| `left` | number | Yes | - | Koordinat kiri area pemotongan |
| `top` | number | Yes | - | Koordinat atas area pemotongan |
| `right` | number | Yes | - | Koordinat kanan area pemotongan |
| `bottom` | number | Yes | - | Koordinat bawah area pemotongan |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Jalur ke gambar yang dipotong |
| `width` | integer | Lebar gambar yang dipotong |
| `height` | integer | Tinggi gambar yang dipotong |
| `original_width` | integer | Lebar gambar asli |
| `original_height` | integer | Tinggi gambar asli |

**Example:** Crop center region

```yaml
input_path: /path/to/image.png
output_path: /path/to/cropped.png
left: 100
top: 100
right: 500
bottom: 400
```

### Unduh Gambar

`image.download`

Unduh gambar dari URL ke file lokal

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
| `path` | string | Path file lokal gambar yang diunduh |
| `size` | number | Path file lokal gambar yang diunduh |
| `content_type` | string | Path file lokal gambar yang diunduh |
| `filename` | string | Ukuran file dalam bytes |

**Example:** Download image from URL

```yaml
url: https://example.com/photo.jpg
output_dir: /tmp/images
```

### Ekstrak Teks OCR

`image.ocr`

Ekstrak teks dari gambar menggunakan OCR

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Jalur ke file gambar |
| `language` | string | No | `eng` | Kode bahasa untuk OCR (mis. eng, chi_sim) |
| `psm` | number | No | `3` | Mode segmentasi halaman Tesseract |
| `output_type` | select (`text`, `data`, `boxes`) | No | `text` | Jenis output OCR (teks atau data) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | Teks yang diekstrak dari gambar |
| `confidence` | number | Skor kepercayaan OCR |
| `language` | string | Bahasa yang digunakan untuk OCR |

**Example:** Extract text from image

```yaml
image_path: /path/to/document.png
language: eng
```

### Hasilkan Kode QR

`image.qrcode_generate`

Hasilkan kode QR dari teks, URL, atau data

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
| `output_path` | string | Path ke gambar kode QR yang dihasilkan |
| `file_size` | number | Path ke gambar kode QR yang dihasilkan |
| `dimensions` | object | Ukuran file output dalam bytes |

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

### Ubah Ukuran Gambar

`image.resize`

Ubah ukuran gambar ke dimensi tertentu dengan berbagai algoritma

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
| `output_path` | string | Path ke gambar yang diubah ukurannya |
| `original_size` | object | Path ke gambar yang diubah ukurannya |
| `new_size` | object | Path ke gambar yang diubah ukurannya |

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

### Putar Gambar

`image.rotate`

Putar gambar dengan derajat yang ditentukan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Jalur ke gambar input |
| `output_path` | string | Yes | - | Jalur untuk gambar output |
| `angle` | number | Yes | - | Sudut rotasi dalam derajat |
| `expand` | boolean | No | `True` | Perluas output untuk menampung seluruh gambar yang diputar |
| `fill_color` | string | No | `#000000` | Warna untuk mengisi area kosong setelah rotasi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Jalur ke gambar yang diputar |
| `width` | integer | Lebar gambar yang diputar |
| `height` | integer | Tinggi gambar yang diputar |
| `angle` | number | Sudut gambar diputar |

**Example:** Rotate 90 degrees

```yaml
input_path: /path/to/image.png
output_path: /path/to/rotated.png
angle: 90
```

### Tambahkan Watermark

`image.watermark`

Tambahkan watermark teks atau gambar ke gambar

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Jalur ke gambar input |
| `output_path` | string | Yes | - | Jalur untuk gambar output |
| `text` | string | No | - | Teks yang digunakan sebagai watermark |
| `watermark_image` | string | No | - | Jalur ke file gambar yang digunakan sebagai watermark |
| `position` | select (`center`, `top-left`, `top-right`, `bottom-left`, `bottom-right`) | No | `bottom-right` | Posisi watermark pada gambar |
| `opacity` | number | No | `0.5` | Opasitas watermark (0.0 hingga 1.0) |
| `font_size` | number | No | `36` | Ukuran font untuk watermark teks |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Jalur ke gambar dengan watermark |
| `watermark_type` | string | Jenis watermark yang diterapkan (teks atau gambar) |

**Example:** Add text watermark

```yaml
input_path: /path/to/image.png
output_path: /path/to/watermarked.png
text: © 2026 Company
position: bottom-right
opacity: 0.5
```
