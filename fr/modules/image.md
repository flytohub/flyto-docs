# Image Processing

Resize, crop, compress, convert, OCR, QR codes, and watermarks.

**9 modules**

| Module | Description |
|--------|-------------|
| [Compresser l'image](#compresser-l'image) | Compresser les images pour reduire la taille du fichier tout en maintenant la qualite |
| [Convertir l'image](#convertir-l'image) | Convertir l'image en format different (PNG, JPEG, WEBP, etc.) |
| [Recadrer l'image](#recadrer-l'image) | Recadrer une image aux coordonnées spécifiées |
| [Telecharger l'image](#telecharger-l'image) | Telecharger une image depuis une URL vers un fichier local |
| [OCR Extraire le texte](#ocr-extraire-le-texte) | Extraire le texte des images en utilisant l'OCR |
| [Generer un code QR](#generer-un-code-qr) | Generer des codes QR a partir de texte, URLs ou donnees |
| [Redimensionner l'image](#redimensionner-l'image) | Redimensionner les images aux dimensions specifiees avec divers algorithmes |
| [Pivoter l'image](#pivoter-l'image) | Pivoter une image de degrés spécifiés |
| [Ajouter un filigrane](#ajouter-un-filigrane) | Ajouter un filigrane texte ou image à une image |

## Modules

### Compresser l'image

`image.compress`

Compresser les images pour reduire la taille du fichier tout en maintenant la qualite

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
| `output_path` | string | Chemin vers l'image compressee |
| `original_size_bytes` | number | Chemin vers l'image compressee |
| `compressed_size_bytes` | number | Taille originale du fichier en octets |
| `compression_ratio` | number | Taille du fichier compresse en octets |

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

### Convertir l'image

`image.convert`

Convertir l'image en format different (PNG, JPEG, WEBP, etc.)

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
| `path` | string | Chemin vers l'image convertie |
| `size` | number | Chemin vers l'image convertie |
| `format` | string | Chemin vers l'image convertie |
| `dimensions` | object | Taille du fichier en octets |

**Example:** Convert PNG to JPEG

```yaml
input_path: /tmp/image.png
format: jpeg
quality: 90
```

### Recadrer l'image

`image.crop`

Recadrer une image aux coordonnées spécifiées

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Chemin vers l'image d'entrée |
| `output_path` | string | Yes | - | Chemin pour l'image de sortie |
| `left` | number | Yes | - | Coordonnée gauche de la zone de recadrage |
| `top` | number | Yes | - | Coordonnée supérieure de la zone de recadrage |
| `right` | number | Yes | - | Coordonnée droite de la zone de recadrage |
| `bottom` | number | Yes | - | Coordonnée inférieure de la zone de recadrage |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Chemin vers l'image recadrée |
| `width` | integer | Largeur de l'image recadrée |
| `height` | integer | Hauteur de l'image recadrée |
| `original_width` | integer | Largeur originale de l'image |
| `original_height` | integer | Hauteur originale de l'image |

**Example:** Crop center region

```yaml
input_path: /path/to/image.png
output_path: /path/to/cropped.png
left: 100
top: 100
right: 500
bottom: 400
```

### Telecharger l'image

`image.download`

Telecharger une image depuis une URL vers un fichier local

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
| `path` | string | Chemin local de l'image telechargee |
| `size` | number | Chemin local de l'image telechargee |
| `content_type` | string | Chemin local de l'image telechargee |
| `filename` | string | Taille du fichier en octets |

**Example:** Download image from URL

```yaml
url: https://example.com/photo.jpg
output_dir: /tmp/images
```

### OCR Extraire le texte

`image.ocr`

Extraire le texte des images en utilisant l'OCR

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | Chemin vers le fichier image |
| `language` | string | No | `eng` | Code de langue pour l'OCR (ex. eng, chi_sim) |
| `psm` | number | No | `3` | Mode de segmentation de page Tesseract |
| `output_type` | select (`text`, `data`, `boxes`) | No | `text` | Type de sortie OCR (texte ou données) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | Texte extrait de l'image |
| `confidence` | number | Score de confiance de l'OCR |
| `language` | string | Langue utilisée pour l'OCR |

**Example:** Extract text from image

```yaml
image_path: /path/to/document.png
language: eng
```

### Generer un code QR

`image.qrcode_generate`

Generer des codes QR a partir de texte, URLs ou donnees

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
| `output_path` | string | Chemin vers l'image du code QR generee |
| `file_size` | number | Chemin vers l'image du code QR generee |
| `dimensions` | object | Taille du fichier de sortie en octets |

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

### Redimensionner l'image

`image.resize`

Redimensionner les images aux dimensions specifiees avec divers algorithmes

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
| `output_path` | string | Chemin vers l'image redimensionnee |
| `original_size` | object | Chemin vers l'image redimensionnee |
| `new_size` | object | Chemin vers l'image redimensionnee |

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

### Pivoter l'image

`image.rotate`

Pivoter une image de degrés spécifiés

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Chemin vers l'image d'entrée |
| `output_path` | string | Yes | - | Chemin pour l'image de sortie |
| `angle` | number | Yes | - | Angle de rotation en degrés |
| `expand` | boolean | No | `True` | Agrandir la sortie pour contenir toute l'image pivotée |
| `fill_color` | string | No | `#000000` | Couleur pour remplir les zones vides après rotation |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Chemin vers l'image pivotée |
| `width` | integer | Largeur de l'image pivotée |
| `height` | integer | Hauteur de l'image pivotée |
| `angle` | number | Angle de rotation de l'image |

**Example:** Rotate 90 degrees

```yaml
input_path: /path/to/image.png
output_path: /path/to/rotated.png
angle: 90
```

### Ajouter un filigrane

`image.watermark`

Ajouter un filigrane texte ou image à une image

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Chemin vers l'image d'entrée |
| `output_path` | string | Yes | - | Chemin pour l'image de sortie |
| `text` | string | No | - | Texte à utiliser comme filigrane |
| `watermark_image` | string | No | - | Chemin vers le fichier image à utiliser comme filigrane |
| `position` | select (`center`, `top-left`, `top-right`, `bottom-left`, `bottom-right`) | No | `bottom-right` | Position du filigrane sur l'image |
| `opacity` | number | No | `0.5` | Opacité du filigrane (0,0 à 1,0) |
| `font_size` | number | No | `36` | Taille de police pour le filigrane texte |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Chemin vers l'image filigranée |
| `watermark_type` | string | Type de filigrane appliqué (texte ou image) |

**Example:** Add text watermark

```yaml
input_path: /path/to/image.png
output_path: /path/to/watermarked.png
text: © 2026 Company
position: bottom-right
opacity: 0.5
```
