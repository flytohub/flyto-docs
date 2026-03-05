# Document

Excel, PDF, and Word document read/write/convert.

**8 modules**

| Module | Description |
|--------|-------------|
| [Leggi Excel](#leggi-excel) | Leggi dati da file Excel (xlsx, xls) |
| [Scrivi Excel](#scrivi-excel) | Scrivi dati su file Excel (xlsx) |
| [Compila Modulo PDF](#compila-modulo-pdf) | Compila campi modulo PDF con dati e inserisci opzionalmente immagini |
| [Genera PDF](#genera-pdf) | Genera file PDF da contenuto HTML o testo |
| [Analizza PDF](#analizza-pdf) | Estrai testo e metadati da file PDF |
| [PDF a Word](#pdf-a-word) | Converti file PDF in documenti Word (.docx) |
| [Analizza Documento Word](#analizza-documento-word) | Estrai testo e contenuto da documenti Word (.docx) |
| [Word a PDF](#word-a-pdf) | Converti documenti Word (.docx) in file PDF |

## Modules

### Leggi Excel

`excel.read`

Leggi dati da file Excel (xlsx, xls)

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
| `data` | array | Righe dati estratte |
| `headers` | array | Righe dati estratte |
| `row_count` | number | Righe dati estratte |
| `sheet_names` | array | Intestazioni colonne |

**Example:** Read entire sheet

```yaml
path: /tmp/data.xlsx
as_dict: true
```

### Scrivi Excel

`excel.write`

Scrivi dati su file Excel (xlsx)

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
| `path` | string | Percorso del file Excel creato |
| `row_count` | number | Percorso del file Excel creato |
| `size` | number | Percorso del file Excel creato |

**Example:** Write data to Excel

```yaml
path: /tmp/output.xlsx
data: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
```

### Compila Modulo PDF

`pdf.fill_form`

Compila campi modulo PDF con dati e inserisci opzionalmente immagini

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
| `output_path` | string | Percorso del PDF compilato |
| `fields_filled` | number | Percorso del PDF compilato |
| `images_inserted` | number | Percorso del PDF compilato |
| `file_size_bytes` | number | Numero di immagini inserite |

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

### Genera PDF

`pdf.generate`

Genera file PDF da contenuto HTML o testo

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
| `output_path` | string | Percorso del PDF generato |
| `page_count` | number | Percorso del PDF generato |
| `file_size_bytes` | number | Numero di pagine nel PDF |

**Example:** Generate from HTML

```yaml
content: <h1>Report</h1><p>Content here</p>
output_path: /path/to/report.pdf
title: Monthly Report
```

### Analizza PDF

`pdf.parse`

Estrai testo e metadati da file PDF

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
| `text` | string | Contenuto testo estratto |
| `pages` | array | Contenuto testo estratto |
| `metadata` | object | Contenuto testo estratto |
| `page_count` | number | Contenuto testo per pagina |

**Example:** Extract all text from PDF

```yaml
path: /tmp/document.pdf
pages: all
```

### PDF a Word

`pdf.to_word`

Converti file PDF in documenti Word (.docx)

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
| `output_path` | string | Percorso del documento Word generato |
| `page_count` | number | Percorso del documento Word generato |
| `file_size` | number | Numero di pagine convertite |

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

### Analizza Documento Word

`word.parse`

Estrai testo e contenuto da documenti Word (.docx)

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
| `text` | string | Contenuto testo completo del documento |
| `paragraphs` | array | Contenuto testo completo del documento |
| `tables` | array | Contenuto testo completo del documento |
| `images` | array | Lista dei paragrafi |
| `metadata` | object | Tabelle estratte come array |

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

### Word a PDF

`word.to_pdf`

Converti documenti Word (.docx) in file PDF

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input document |
| `output_path` | string | No | - | Path for the output document |
| `method` | select (`auto`, `libreoffice`, `docx2pdf`) | No | `auto` | Method to use for conversion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Percorso del file PDF generato |
| `file_size` | number | Percorso del file PDF generato |
| `method_used` | string | Dimensione del file di output in byte |

**Example:** Convert Word to PDF

```yaml
input_path: /tmp/document.docx
```

**Example:** Convert with specific output path

```yaml
input_path: /tmp/document.docx
output_path: /tmp/output.pdf
```
