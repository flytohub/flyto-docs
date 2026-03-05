# Image Processing

Resize, crop, compress, convert, OCR, QR codes, and watermarks.

**9 modules**

| Module | Description |
|--------|-------------|
| [画像圧縮](#画像圧縮) | 品質を維持しながら画像を圧縮してファイルサイズを削減 |
| [画像変換](#画像変換) | 画像を別の形式（PNG、JPEG、WEBPなど）に変換 |
| [画像を切り抜く](#画像を切り抜く) | 指定された座標で画像を切り抜く |
| [画像ダウンロード](#画像ダウンロード) | URLから画像をローカルファイルにダウンロード |
| [OCRテキスト抽出](#ocrテキスト抽出) | OCRを使って画像からテキストを抽出する |
| [QRコード生成](#qrコード生成) | テキスト、URL、またはデータからQRコードを生成 |
| [画像リサイズ](#画像リサイズ) | 様々なアルゴリズムで画像を指定サイズにリサイズ |
| [画像を回転する](#画像を回転する) | 指定された角度で画像を回転する |
| [透かしを追加](#透かしを追加) | 画像にテキストまたは画像の透かしを追加する |

## Modules

### 画像圧縮

`image.compress`

品質を維持しながら画像を圧縮してファイルサイズを削減

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
| `output_path` | string | 圧縮された画像のパス |
| `original_size_bytes` | number | 圧縮された画像のパス |
| `compressed_size_bytes` | number | 元のファイルサイズ（バイト） |
| `compression_ratio` | number | 圧縮後のファイルサイズ（バイト） |

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

### 画像変換

`image.convert`

画像を別の形式（PNG、JPEG、WEBPなど）に変換

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
| `path` | string | 変換された画像のパス |
| `size` | number | 変換された画像のパス |
| `format` | string | 変換された画像のパス |
| `dimensions` | object | ファイルサイズ（バイト） |

**Example:** Convert PNG to JPEG

```yaml
input_path: /tmp/image.png
format: jpeg
quality: 90
```

### 画像を切り抜く

`image.crop`

指定された座標で画像を切り抜く

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | 入力画像のパス |
| `output_path` | string | Yes | - | 出力画像のパス |
| `left` | number | Yes | - | 切り抜き領域の左の座標 |
| `top` | number | Yes | - | 切り抜き領域の上の座標 |
| `right` | number | Yes | - | 切り抜き領域の右の座標 |
| `bottom` | number | Yes | - | 切り抜き領域の下の座標 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | 切り抜かれた画像のパス |
| `width` | integer | 切り抜かれた画像の幅 |
| `height` | integer | 切り抜かれた画像の高さ |
| `original_width` | integer | 元の画像の幅 |
| `original_height` | integer | 元の画像の高さ |

**Example:** Crop center region

```yaml
input_path: /path/to/image.png
output_path: /path/to/cropped.png
left: 100
top: 100
right: 500
bottom: 400
```

### 画像ダウンロード

`image.download`

URLから画像をローカルファイルにダウンロード

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
| `path` | string | ダウンロードされた画像のローカルファイルパス |
| `size` | number | ダウンロードされた画像のローカルファイルパス |
| `content_type` | string | ダウンロードされた画像のローカルファイルパス |
| `filename` | string | ファイルサイズ（バイト） |

**Example:** Download image from URL

```yaml
url: https://example.com/photo.jpg
output_dir: /tmp/images
```

### OCRテキスト抽出

`image.ocr`

OCRを使って画像からテキストを抽出する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | 画像ファイルのパス |
| `language` | string | No | `eng` | OCRの言語コード（例: eng, chi_sim） |
| `psm` | number | No | `3` | Tesseractのページ分割モード |
| `output_type` | select (`text`, `data`, `boxes`) | No | `text` | OCR出力のタイプ（テキストまたはデータ） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | 画像から抽出されたテキスト |
| `confidence` | number | OCRの信頼度スコア |
| `language` | string | OCRで使用する言語 |

**Example:** Extract text from image

```yaml
image_path: /path/to/document.png
language: eng
```

### QRコード生成

`image.qrcode_generate`

テキスト、URL、またはデータからQRコードを生成

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
| `output_path` | string | 生成されたQRコード画像のパス |
| `file_size` | number | 生成されたQRコード画像のパス |
| `dimensions` | object | 出力ファイルのサイズ（バイト） |

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

### 画像リサイズ

`image.resize`

様々なアルゴリズムで画像を指定サイズにリサイズ

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
| `output_path` | string | リサイズされた画像のパス |
| `original_size` | object | リサイズされた画像のパス |
| `new_size` | object | リサイズされた画像のパス |

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

### 画像を回転する

`image.rotate`

指定された角度で画像を回転する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | 入力画像のパス |
| `output_path` | string | Yes | - | 出力画像のパス |
| `angle` | number | Yes | - | 回転角度（度） |
| `expand` | boolean | No | `True` | 回転された画像全体を保持するために出力を拡張する |
| `fill_color` | string | No | `#000000` | 回転後の空白部分を埋める色 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | 回転された画像のパス |
| `width` | integer | 回転された画像の幅 |
| `height` | integer | 回転された画像の高さ |
| `angle` | number | 画像が回転された角度 |

**Example:** Rotate 90 degrees

```yaml
input_path: /path/to/image.png
output_path: /path/to/rotated.png
angle: 90
```

### 透かしを追加

`image.watermark`

画像にテキストまたは画像の透かしを追加する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | 入力画像のパス |
| `output_path` | string | Yes | - | 出力画像のパス |
| `text` | string | No | - | 透かしとして使用するテキスト |
| `watermark_image` | string | No | - | 透かしとして使用する画像ファイルのパス |
| `position` | select (`center`, `top-left`, `top-right`, `bottom-left`, `bottom-right`) | No | `bottom-right` | 画像上の透かしの位置 |
| `opacity` | number | No | `0.5` | 透かしの不透明度（0.0から1.0） |
| `font_size` | number | No | `36` | テキスト透かしのフォントサイズ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | 透かし入り画像のパス |
| `watermark_type` | string | 適用する透かしの種類（テキストまたは画像） |

**Example:** Add text watermark

```yaml
input_path: /path/to/image.png
output_path: /path/to/watermarked.png
text: © 2026 Company
position: bottom-right
opacity: 0.5
```
