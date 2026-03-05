# Document

Excel, PDF, and Word document read/write/convert.

**8 modules**

| Module | Description |
|--------|-------------|
| [Read Excel](#read-excel) | Read data from Excel files (xlsx, xls) |
| [Write Excel](#write-excel) | Write data to Excel files (xlsx) |
| [Fill PDF Form](#fill-pdf-form) | Fill PDF form fields with data and optionally insert images |
| [Generate PDF](#generate-pdf) | Generate PDF files from HTML content or text |
| [Parse PDF](#parse-pdf) | Extract text and metadata from PDF files |
| [PDF to Word](#pdf-to-word) | Convert PDF files to Word documents (.docx) |
| [Parse Word Document](#parse-word-document) | Extract text and content from Word documents (.docx) |
| [Word to PDF](#word-to-pdf) | Convert Word documents (.docx) to PDF files |

## Modules

### Read Excel

`excel.read`

Read data from Excel files (xlsx, xls)

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
| `data` | array | Extracted data rows |
| `headers` | array | Extracted data rows |
| `row_count` | number | Extracted data rows |
| `sheet_names` | array | Column headers |

**Example:** Read entire sheet

```yaml
path: /tmp/data.xlsx
as_dict: true
```

### Write Excel

`excel.write`

Write data to Excel files (xlsx)

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
| `path` | string | Path to the created Excel file |
| `row_count` | number | Path to the created Excel file |
| `size` | number | Path to the created Excel file |

**Example:** Write data to Excel

```yaml
path: /tmp/output.xlsx
data: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
```

### Fill PDF Form

`pdf.fill_form`

Fill PDF form fields with data and optionally insert images

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
| `output_path` | string | Path to the filled PDF |
| `fields_filled` | number | Path to the filled PDF |
| `images_inserted` | number | Path to the filled PDF |
| `file_size_bytes` | number | Number of images inserted |

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

### Generate PDF

`pdf.generate`

Generate PDF files from HTML content or text

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
| `output_path` | string | Path to the generated PDF |
| `page_count` | number | Path to the generated PDF |
| `file_size_bytes` | number | Number of pages in the PDF |

**Example:** Generate from HTML

```yaml
content: <h1>Report</h1><p>Content here</p>
output_path: /path/to/report.pdf
title: Monthly Report
```

### Parse PDF

`pdf.parse`

Extract text and metadata from PDF files

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
| `text` | string | Extracted text content |
| `pages` | array | Extracted text content |
| `metadata` | object | Extracted text content |
| `page_count` | number | Text content per page |

**Example:** Extract all text from PDF

```yaml
path: /tmp/document.pdf
pages: all
```

### PDF to Word

`pdf.to_word`

Convert PDF files to Word documents (.docx)

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
| `output_path` | string | Path to the generated Word document |
| `page_count` | number | Path to the generated Word document |
| `file_size` | number | Number of pages converted |

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

### Parse Word Document

`word.parse`

Extract text and content from Word documents (.docx)

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
| `text` | string | Full text content of the document |
| `paragraphs` | array | Full text content of the document |
| `tables` | array | Full text content of the document |
| `images` | array | List of paragraphs |
| `metadata` | object | Extracted tables as arrays |

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

### Word to PDF

`word.to_pdf`

Convert Word documents (.docx) to PDF files

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input document |
| `output_path` | string | No | - | Path for the output document |
| `method` | select (`auto`, `libreoffice`, `docx2pdf`) | No | `auto` | Method to use for conversion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Path to the generated PDF file |
| `file_size` | number | Path to the generated PDF file |
| `method_used` | string | Size of the output file in bytes |

**Example:** Convert Word to PDF

```yaml
input_path: /tmp/document.docx
```

**Example:** Convert with specific output path

```yaml
input_path: /tmp/document.docx
output_path: /tmp/output.pdf
```
