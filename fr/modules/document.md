# Document

Excel, PDF, and Word document read/write/convert.

**8 modules**

| Module | Description |
|--------|-------------|
| [Lire Excel](#lire-excel) | Lire des donnees depuis des fichiers Excel (xlsx, xls) |
| [Ecrire Excel](#ecrire-excel) | Ecrire des donnees dans des fichiers Excel (xlsx) |
| [Remplir le formulaire PDF](#remplir-le-formulaire-pdf) | Remplir les champs de formulaire PDF avec des donnees et optionnellement inserer des images |
| [Generer un PDF](#generer-un-pdf) | Generer des fichiers PDF a partir de contenu HTML ou texte |
| [Analyser un PDF](#analyser-un-pdf) | Extraire du texte et des metadonnees des fichiers PDF |
| [PDF vers Word](#pdf-vers-word) | Convertir des fichiers PDF en documents Word (.docx) |
| [Analyser un document Word](#analyser-un-document-word) | Extraire du texte et du contenu des documents Word (.docx) |
| [Word vers PDF](#word-vers-pdf) | Convertir des documents Word (.docx) en fichiers PDF |

## Modules

### Lire Excel

`excel.read`

Lire des donnees depuis des fichiers Excel (xlsx, xls)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the Excel file |
| `sheet` | string | No | - | Sheet name (default: first sheet) |
| `header_row` | number | No | `1` | Row number for headers (1-based, 0 for no headers) |
| `range` | string | No | - | Cell range to read (e.g., "A1:D10") |
| `as_dict` | boolean | No | `True` | Return rows as dictionaries (using headers as keys) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | array | Lignes de donnees extraites |
| `headers` | array | Lignes de donnees extraites |
| `row_count` | number | Lignes de donnees extraites |
| `sheet_names` | array | En-tetes de colonnes |

**Example:** Read entire sheet

```yaml
path: /tmp/data.xlsx
as_dict: true
```

### Ecrire Excel

`excel.write`

Ecrire des donnees dans des fichiers Excel (xlsx)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the Excel file |
| `data` | array | Yes | - | Data to write (array of arrays or array of objects) |
| `headers` | array | No | - | Column headers (auto-detected from objects if not provided) |
| `sheet_name` | string | No | `Sheet1` | Name of the worksheet |
| `auto_width` | boolean | No | `True` | Automatically adjust column widths |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | Chemin vers le fichier Excel cree |
| `row_count` | number | Chemin vers le fichier Excel cree |
| `size` | number | Chemin vers le fichier Excel cree |

**Example:** Write data to Excel

```yaml
path: /tmp/output.xlsx
data: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
```

### Remplir le formulaire PDF

`pdf.fill_form`

Remplir les champs de formulaire PDF avec des donnees et optionnellement inserer des images

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Path to the PDF template file |
| `output` | string | Yes | - | Path for the output document |
| `fields` | object | No | `{}` | Key-value pairs of form field names and values |
| `images` | array | No | `[]` | List of images to insert with position info |
| `flatten` | boolean | No | `True` | Flatten form fields (make them non-editable) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Chemin vers le PDF rempli |
| `fields_filled` | number | Chemin vers le PDF rempli |
| `images_inserted` | number | Chemin vers le PDF rempli |
| `file_size_bytes` | number | Nombre d'images inserees |

**Example:** Fill form with text fields

```yaml
template: /templates/form.pdf
output: /output/filled.pdf
fields: {"name": "John Doe", "id_number": "A123456789", "date": "2024-01-01"}
```

**Example:** Fill form with photo

```yaml
template: /templates/id_card.pdf
output: /output/id_card_filled.pdf
fields: {"name": "Jane Doe"}
images: [{"file": "/photos/jane.jpg", "page": 1, "x": 50, "y": 650, "width": 100, "height": 120}]
```

### Generer un PDF

`pdf.generate`

Generer des fichiers PDF a partir de contenu HTML ou texte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content` | string | Yes | - | HTML or text content to convert to PDF |
| `output_path` | string | Yes | - | Path for the output document |
| `title` | string | No | - | Document title (metadata) |
| `author` | string | No | - | Document author (metadata) |
| `page_size` | select (`A4`, `Letter`, `Legal`, `A3`, `A5`) | No | `A4` | Page size format |
| `orientation` | select (`portrait`, `landscape`) | No | `portrait` | Page orientation |
| `margin` | number | No | `20` | Page margin in millimeters |
| `header` | string | No | - | Header text for each page |
| `footer` | string | No | - | Footer text for each page |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Chemin vers le PDF genere |
| `page_count` | number | Chemin vers le PDF genere |
| `file_size_bytes` | number | Nombre de pages dans le PDF |

**Example:** Generate from HTML

```yaml
content: <h1>Report</h1><p>Content here</p>
output_path: /path/to/report.pdf
title: Monthly Report
```

### Analyser un PDF

`pdf.parse`

Extraire du texte et des metadonnees des fichiers PDF

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the PDF file |
| `pages` | string | No | `all` | Page range (e.g., "1-5", "1,3,5", or "all") |
| `extract_images` | boolean | No | `False` | Extract embedded images |
| `extract_tables` | boolean | No | `False` | Extract tables as structured data |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | Contenu textuel extrait |
| `pages` | array | Contenu textuel extrait |
| `metadata` | object | Contenu textuel extrait |
| `page_count` | number | Contenu textuel par page |

**Example:** Extract all text from PDF

```yaml
path: /tmp/document.pdf
pages: all
```

### PDF vers Word

`pdf.to_word`

Convertir des fichiers PDF en documents Word (.docx)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input document |
| `output_path` | string | No | - | Path for the output document |
| `preserve_formatting` | boolean | No | `True` | Preserve basic formatting |
| `pages` | string | No | `all` | Page range (e.g., "1-5", "1,3,5", or "all") |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Chemin vers le document Word genere |
| `page_count` | number | Chemin vers le document Word genere |
| `file_size` | number | Nombre de pages converties |

**Example:** Convert entire PDF to Word

```yaml
input_path: /tmp/document.pdf
```

**Example:** Convert specific pages

```yaml
input_path: /tmp/document.pdf
output_path: /tmp/output.docx
pages: 1-5
```

### Analyser un document Word

`word.parse`

Extraire du texte et du contenu des documents Word (.docx)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_path` | string | Yes | - | Path to the Word document (.docx) |
| `extract_tables` | boolean | No | `True` | Extract tables as structured data |
| `extract_images` | boolean | No | `False` | Extract embedded images |
| `images_output_dir` | string | No | - | Directory to save extracted images |
| `preserve_formatting` | boolean | No | `False` | Preserve basic formatting |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | Contenu textuel complet du document |
| `paragraphs` | array | Contenu textuel complet du document |
| `tables` | array | Contenu textuel complet du document |
| `images` | array | Liste des paragraphes |
| `metadata` | object | Tableaux extraits sous forme de tableaux |

**Example:** Extract text from Word

```yaml
file_path: /path/to/document.docx
```

**Example:** Extract with tables and images

```yaml
file_path: /path/to/document.docx
extract_tables: true
extract_images: true
images_output_dir: /path/to/images/
```

### Word vers PDF

`word.to_pdf`

Convertir des documents Word (.docx) en fichiers PDF

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input document |
| `output_path` | string | No | - | Path for the output document |
| `method` | select (`auto`, `libreoffice`, `docx2pdf`) | No | `auto` | Method to use for conversion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Chemin vers le fichier PDF genere |
| `file_size` | number | Nombre de pages converties |
| `method_used` | string | Taille du fichier de sortie en octets |

**Example:** Convert Word to PDF

```yaml
input_path: /tmp/document.docx
```

**Example:** Convert with specific output path

```yaml
input_path: /tmp/document.docx
output_path: /tmp/output.pdf
```
