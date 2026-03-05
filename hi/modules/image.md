# Image Processing

Resize, crop, compress, convert, OCR, QR codes, and watermarks.

**9 modules**

| Module | Description |
|--------|-------------|
| [इमेज संपीड़ित करें](#इमेज-संपीड़ित-करें) | गुणवत्ता बनाए रखते हुए फ़ाइल आकार कम करने के लिए इमेज संपीड़ित करें |
| [इमेज कन्वर्ट करें](#इमेज-कन्वर्ट-करें) | इमेज को अलग फ़ॉर्मेट में बदलें (PNG, JPEG, WEBP, आदि) |
| [छवि क्रॉप करें](#छवि-क्रॉप-करें) | छवि को निर्दिष्ट निर्देशांक पर क्रॉप करें |
| [इमेज डाउनलोड करें](#इमेज-डाउनलोड-करें) | URL से इमेज स्थानीय फ़ाइल में डाउनलोड करें |
| [OCR पाठ निकालें](#ocr-पाठ-निकालें) | OCR का उपयोग करके छवियों से पाठ निकालें |
| [QR कोड जनरेट करें](#qr-कोड-जनरेट-करें) | टेक्स्ट, URLs, या डेटा से QR कोड जनरेट करें |
| [इमेज आकार बदलें](#इमेज-आकार-बदलें) | विभिन्न एल्गोरिदम के साथ इमेज को निर्दिष्ट आयामों में आकार बदलें |
| [छवि घुमाएँ](#छवि-घुमाएँ) | छवि को निर्दिष्ट डिग्री पर घुमाएँ |
| [वॉटरमार्क जोड़ें](#वॉटरमार्क-जोड़ें) | छवि में पाठ या छवि वॉटरमार्क जोड़ें |

## Modules

### इमेज संपीड़ित करें

`image.compress`

गुणवत्ता बनाए रखते हुए फ़ाइल आकार कम करने के लिए इमेज संपीड़ित करें

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
| `output_path` | string | संपीड़ित इमेज का पथ |
| `original_size_bytes` | number | संपीड़ित इमेज का पथ |
| `compressed_size_bytes` | number | बाइट्स में मूल फ़ाइल आकार |
| `compression_ratio` | number | बाइट्स में संपीड़ित फ़ाइल आकार |

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

### इमेज कन्वर्ट करें

`image.convert`

इमेज को अलग फ़ॉर्मेट में बदलें (PNG, JPEG, WEBP, आदि)

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
| `path` | string | कन्वर्ट की गई इमेज का पथ |
| `size` | number | कन्वर्ट की गई इमेज का पथ |
| `format` | string | कन्वर्ट की गई इमेज का पथ |
| `dimensions` | object | बाइट्स में फ़ाइल आकार |

**Example:** Convert PNG to JPEG

```yaml
input_path: /tmp/image.png
format: jpeg
quality: 90
```

### छवि क्रॉप करें

`image.crop`

छवि को निर्दिष्ट निर्देशांक पर क्रॉप करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | इनपुट छवि का पथ |
| `output_path` | string | Yes | - | आउटपुट छवि के लिए पथ |
| `left` | number | Yes | - | क्रॉप क्षेत्र का बायाँ निर्देशांक |
| `top` | number | Yes | - | क्रॉप क्षेत्र का ऊपरी निर्देशांक |
| `right` | number | Yes | - | क्रॉप क्षेत्र का दायाँ निर्देशांक |
| `bottom` | number | Yes | - | क्रॉप क्षेत्र का निचला निर्देशांक |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | क्रॉप की गई छवि का पथ |
| `width` | integer | क्रॉप की गई छवि की चौड़ाई |
| `height` | integer | क्रॉप की गई छवि की ऊँचाई |
| `original_width` | integer | मूल छवि की चौड़ाई |
| `original_height` | integer | मूल छवि की ऊँचाई |

**Example:** Crop center region

```yaml
input_path: /path/to/image.png
output_path: /path/to/cropped.png
left: 100
top: 100
right: 500
bottom: 400
```

### इमेज डाउनलोड करें

`image.download`

URL से इमेज स्थानीय फ़ाइल में डाउनलोड करें

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
| `path` | string | डाउनलोड की गई इमेज का स्थानीय फ़ाइल पथ |
| `size` | number | डाउनलोड की गई इमेज का स्थानीय फ़ाइल पथ |
| `content_type` | string | डाउनलोड की गई इमेज का स्थानीय फ़ाइल पथ |
| `filename` | string | बाइट्स में फ़ाइल आकार |

**Example:** Download image from URL

```yaml
url: https://example.com/photo.jpg
output_dir: /tmp/images
```

### OCR पाठ निकालें

`image.ocr`

OCR का उपयोग करके छवियों से पाठ निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | छवि फ़ाइल का पथ |
| `language` | string | No | `eng` | OCR के लिए भाषा कोड (जैसे eng, chi_sim) |
| `psm` | number | No | `3` | Tesseract पृष्ठ विभाजन मोड |
| `output_type` | select (`text`, `data`, `boxes`) | No | `text` | OCR आउटपुट का प्रकार (पाठ या डेटा) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | छवि से निकाला गया पाठ |
| `confidence` | number | OCR विश्वास स्कोर |
| `language` | string | OCR के लिए उपयोग की गई भाषा |

**Example:** Extract text from image

```yaml
image_path: /path/to/document.png
language: eng
```

### QR कोड जनरेट करें

`image.qrcode_generate`

टेक्स्ट, URLs, या डेटा से QR कोड जनरेट करें

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
| `output_path` | string | जनरेट की गई QR कोड इमेज का पथ |
| `file_size` | number | जनरेट की गई QR कोड इमेज का पथ |
| `dimensions` | object | बाइट्स में आउटपुट फ़ाइल का आकार |

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

### इमेज आकार बदलें

`image.resize`

विभिन्न एल्गोरिदम के साथ इमेज को निर्दिष्ट आयामों में आकार बदलें

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
| `output_path` | string | आकार बदली गई इमेज का पथ |
| `original_size` | object | आकार बदली गई इमेज का पथ |
| `new_size` | object | आकार बदली गई इमेज का पथ |

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

### छवि घुमाएँ

`image.rotate`

छवि को निर्दिष्ट डिग्री पर घुमाएँ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | इनपुट छवि का पथ |
| `output_path` | string | Yes | - | आउटपुट छवि के लिए पथ |
| `angle` | number | Yes | - | डिग्री में घुमाव का कोण |
| `expand` | boolean | No | `True` | पूरी घुमाई गई छवि को समायोजित करने के लिए आउटपुट का विस्तार करें |
| `fill_color` | string | No | `#000000` | घुमाव के बाद खाली क्षेत्रों को भरने का रंग |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | घुमाई गई छवि का पथ |
| `width` | integer | घुमाई गई छवि की चौड़ाई |
| `height` | integer | घुमाई गई छवि की ऊँचाई |
| `angle` | number | छवि को जितना घुमाया गया था |

**Example:** Rotate 90 degrees

```yaml
input_path: /path/to/image.png
output_path: /path/to/rotated.png
angle: 90
```

### वॉटरमार्क जोड़ें

`image.watermark`

छवि में पाठ या छवि वॉटरमार्क जोड़ें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | इनपुट छवि का पथ |
| `output_path` | string | Yes | - | आउटपुट छवि का पथ |
| `text` | string | No | - | वॉटरमार्क के रूप में उपयोग करने के लिए पाठ |
| `watermark_image` | string | No | - | वॉटरमार्क के रूप में उपयोग करने के लिए छवि फ़ाइल का पथ |
| `position` | select (`center`, `top-left`, `top-right`, `bottom-left`, `bottom-right`) | No | `bottom-right` | छवि पर वॉटरमार्क की स्थिति |
| `opacity` | number | No | `0.5` | वॉटरमार्क की अस्पष्टता (0.0 से 1.0) |
| `font_size` | number | No | `36` | पाठ वॉटरमार्क के लिए फ़ॉन्ट आकार |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | वॉटरमार्क वाली छवि का पथ |
| `watermark_type` | string | लागू वॉटरमार्क का प्रकार (पाठ या छवि) |

**Example:** Add text watermark

```yaml
input_path: /path/to/image.png
output_path: /path/to/watermarked.png
text: © 2026 Company
position: bottom-right
opacity: 0.5
```
