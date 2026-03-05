# Document

Excel, PDF, and Word document read/write/convert.

**8 modules**

| Module | Description |
|--------|-------------|
| [Leer Excel](#leer-excel) | Leer datos de archivos Excel (xlsx, xls) |
| [Escribir Excel](#escribir-excel) | Escribir datos a archivos Excel (xlsx) |
| [Llenar formulario PDF](#llenar-formulario-pdf) | Llenar campos de formulario PDF con datos e insertar imagenes opcionalmente |
| [Generar PDF](#generar-pdf) | Generar archivos PDF desde contenido HTML o texto |
| [Parsear PDF](#parsear-pdf) | Extraer texto y metadatos de archivos PDF |
| [PDF a Word](#pdf-a-word) | Convertir archivos PDF a documentos Word (.docx) |
| [Parsear documento Word](#parsear-documento-word) | Extraer texto y contenido de documentos Word (.docx) |
| [Word a PDF](#word-a-pdf) | Convertir documentos Word (.docx) a archivos PDF |

## Modules

### Leer Excel

`excel.read`

Leer datos de archivos Excel (xlsx, xls)

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
| `data` | array | Filas de datos extraidas |
| `headers` | array | Filas de datos extraidas |
| `row_count` | number | Filas de datos extraidas |
| `sheet_names` | array | Encabezados de columna |

**Example:** Read entire sheet

```yaml
path: /tmp/data.xlsx
as_dict: true
```

### Escribir Excel

`excel.write`

Escribir datos a archivos Excel (xlsx)

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
| `path` | string | Ruta al archivo Excel creado |
| `row_count` | number | Ruta al archivo Excel creado |
| `size` | number | Ruta al archivo Excel creado |

**Example:** Write data to Excel

```yaml
path: /tmp/output.xlsx
data: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
```

### Llenar formulario PDF

`pdf.fill_form`

Llenar campos de formulario PDF con datos e insertar imagenes opcionalmente

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
| `output_path` | string | Ruta al PDF llenado |
| `fields_filled` | number | Ruta al PDF llenado |
| `images_inserted` | number | Ruta al PDF llenado |
| `file_size_bytes` | number | Numero de imagenes insertadas |

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

### Generar PDF

`pdf.generate`

Generar archivos PDF desde contenido HTML o texto

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
| `output_path` | string | Ruta al PDF generado |
| `page_count` | number | Ruta al PDF generado |
| `file_size_bytes` | number | Numero de paginas en el PDF |

**Example:** Generate from HTML

```yaml
content: <h1>Report</h1><p>Content here</p>
output_path: /path/to/report.pdf
title: Monthly Report
```

### Parsear PDF

`pdf.parse`

Extraer texto y metadatos de archivos PDF

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
| `text` | string | Contenido de texto extraido |
| `pages` | array | Contenido de texto extraido |
| `metadata` | object | Contenido de texto extraido |
| `page_count` | number | Contenido de texto por pagina |

**Example:** Extract all text from PDF

```yaml
path: /tmp/document.pdf
pages: all
```

### PDF a Word

`pdf.to_word`

Convertir archivos PDF a documentos Word (.docx)

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
| `output_path` | string | Ruta al documento Word generado |
| `page_count` | number | Ruta al documento Word generado |
| `file_size` | number | Numero de paginas convertidas |

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

### Parsear documento Word

`word.parse`

Extraer texto y contenido de documentos Word (.docx)

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
| `text` | string | Contenido de texto completo del documento |
| `paragraphs` | array | Contenido de texto completo del documento |
| `tables` | array | Contenido de texto completo del documento |
| `images` | array | Lista de parrafos |
| `metadata` | object | Tablas extraidas como arrays |

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

Convertir documentos Word (.docx) a archivos PDF

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input document |
| `output_path` | string | No | - | Path for the output document |
| `method` | select (`auto`, `libreoffice`, `docx2pdf`) | No | `auto` | Method to use for conversion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Ruta al archivo PDF generado |
| `file_size` | number | Numero de paginas convertidas |
| `method_used` | string | Tamano del archivo de salida en bytes |

**Example:** Convert Word to PDF

```yaml
input_path: /tmp/document.docx
```

**Example:** Convert with specific output path

```yaml
input_path: /tmp/document.docx
output_path: /tmp/output.pdf
```
