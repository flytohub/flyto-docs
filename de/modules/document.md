# Document

Excel, PDF, and Word document read/write/convert.

**8 modules**

| Module | Description |
|--------|-------------|
| [Excel lesen](#excel-lesen) | Daten aus Excel-Dateien lesen (xlsx, xls) |
| [Excel schreiben](#excel-schreiben) | Daten in Excel-Dateien schreiben (xlsx) |
| [PDF-Formular ausfüllen](#pdf-formular-ausfüllen) | PDF-Formularfelder mit Daten füllen und optional Bilder einfügen |
| [PDF generieren](#pdf-generieren) | PDF-Dateien aus HTML-Inhalt oder Text generieren |
| [PDF parsen](#pdf-parsen) | Text und Metadaten aus PDF-Dateien extrahieren |
| [PDF zu Word](#pdf-zu-word) | PDF-Dateien in Word-Dokumente (.docx) konvertieren |
| [Word-Dokument parsen](#word-dokument-parsen) | Text und Inhalt aus Word-Dokumenten (.docx) extrahieren |
| [Word zu PDF](#word-zu-pdf) | Word-Dokumente (.docx) in PDF-Dateien konvertieren |

## Modules

### Excel lesen

`excel.read`

Daten aus Excel-Dateien lesen (xlsx, xls)

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
| `data` | array | Extrahierte Datenzeilen |
| `headers` | array | Extrahierte Datenzeilen |
| `row_count` | number | Extrahierte Datenzeilen |
| `sheet_names` | array | Spaltenüberschriften |

**Example:** Read entire sheet

```yaml
path: /tmp/data.xlsx
as_dict: true
```

### Excel schreiben

`excel.write`

Daten in Excel-Dateien schreiben (xlsx)

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
| `path` | string | Pfad zur erstellten Excel-Datei |
| `row_count` | number | Pfad zur erstellten Excel-Datei |
| `size` | number | Pfad zur erstellten Excel-Datei |

**Example:** Write data to Excel

```yaml
path: /tmp/output.xlsx
data: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
```

### PDF-Formular ausfüllen

`pdf.fill_form`

PDF-Formularfelder mit Daten füllen und optional Bilder einfügen

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
| `output_path` | string | Pfad zur ausgefüllten PDF |
| `fields_filled` | number | Pfad zur ausgefüllten PDF |
| `images_inserted` | number | Pfad zur ausgefüllten PDF |
| `file_size_bytes` | number | Anzahl der eingefügten Bilder |

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

### PDF generieren

`pdf.generate`

PDF-Dateien aus HTML-Inhalt oder Text generieren

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
| `output_path` | string | Pfad zur generierten PDF |
| `page_count` | number | Pfad zur generierten PDF |
| `file_size_bytes` | number | Anzahl der Seiten in der PDF |

**Example:** Generate from HTML

```yaml
content: <h1>Report</h1><p>Content here</p>
output_path: /path/to/report.pdf
title: Monthly Report
```

### PDF parsen

`pdf.parse`

Text und Metadaten aus PDF-Dateien extrahieren

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
| `text` | string | Extrahierter Textinhalt |
| `pages` | array | Extrahierter Textinhalt |
| `metadata` | object | Extrahierter Textinhalt |
| `page_count` | number | Textinhalt pro Seite |

**Example:** Extract all text from PDF

```yaml
path: /tmp/document.pdf
pages: all
```

### PDF zu Word

`pdf.to_word`

PDF-Dateien in Word-Dokumente (.docx) konvertieren

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
| `output_path` | string | Pfad zum generierten Word-Dokument |
| `page_count` | number | Pfad zum generierten Word-Dokument |
| `file_size` | number | Anzahl der konvertierten Seiten |

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

### Word-Dokument parsen

`word.parse`

Text und Inhalt aus Word-Dokumenten (.docx) extrahieren

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
| `text` | string | Vollständiger Textinhalt des Dokuments |
| `paragraphs` | array | Vollständiger Textinhalt des Dokuments |
| `tables` | array | Vollständiger Textinhalt des Dokuments |
| `images` | array | Liste der Absätze |
| `metadata` | object | Extrahierte Tabellen als Arrays |

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

### Word zu PDF

`word.to_pdf`

Word-Dokumente (.docx) in PDF-Dateien konvertieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input document |
| `output_path` | string | No | - | Path for the output document |
| `method` | select (`auto`, `libreoffice`, `docx2pdf`) | No | `auto` | Method to use for conversion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Pfad zur generierten PDF-Datei |
| `file_size` | number | Pfad zur generierten PDF-Datei |
| `method_used` | string | Größe der Ausgabedatei in Bytes |

**Example:** Convert Word to PDF

```yaml
input_path: /tmp/document.docx
```

**Example:** Convert with specific output path

```yaml
input_path: /tmp/document.docx
output_path: /tmp/output.pdf
```
