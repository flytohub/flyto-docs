# Document

Excel, PDF, and Word document read/write/convert.

**8 modules**

| Module | Description |
|--------|-------------|
| [Baca Excel](#baca-excel) | Baca data dari file Excel (xlsx, xls) |
| [Tulis Excel](#tulis-excel) | Tulis data ke file Excel (xlsx) |
| [Isi Form PDF](#isi-form-pdf) | Isi field form PDF dengan data dan opsional sisipkan gambar |
| [Hasilkan PDF](#hasilkan-pdf) | Hasilkan file PDF dari konten HTML atau teks |
| [Memproses PDF](#memproses-pdf) | Ekstrak teks dan metadata dari file PDF |
| [PDF ke Word](#pdf-ke-word) | Konversi file PDF ke dokumen Word (.docx) |
| [Parse Dokumen Word](#parse-dokumen-word) | Ekstrak teks dan konten dari dokumen Word (.docx) |
| [Word ke PDF](#word-ke-pdf) | Konversi dokumen Word (.docx) ke file PDF |

## Modules

### Baca Excel

`excel.read`

Baca data dari file Excel (xlsx, xls)

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
| `data` | array | Baris data yang diekstrak |
| `headers` | array | Baris data yang diekstrak |
| `row_count` | number | Baris data yang diekstrak |
| `sheet_names` | array | Header kolom |

**Example:** Read entire sheet

```yaml
path: /tmp/data.xlsx
as_dict: true
```

### Tulis Excel

`excel.write`

Tulis data ke file Excel (xlsx)

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
| `path` | string | Path ke file Excel yang dibuat |
| `row_count` | number | Path ke file Excel yang dibuat |
| `size` | number | Path ke file Excel yang dibuat |

**Example:** Write data to Excel

```yaml
path: /tmp/output.xlsx
data: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
```

### Isi Form PDF

`pdf.fill_form`

Isi field form PDF dengan data dan opsional sisipkan gambar

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
| `output_path` | string | Path ke PDF yang diisi |
| `fields_filled` | number | Path ke PDF yang diisi |
| `images_inserted` | number | Path ke PDF yang diisi |
| `file_size_bytes` | number | Jumlah gambar yang disisipkan |

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

### Hasilkan PDF

`pdf.generate`

Hasilkan file PDF dari konten HTML atau teks

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
| `output_path` | string | Path ke PDF yang dihasilkan |
| `page_count` | number | Path ke PDF yang dihasilkan |
| `file_size_bytes` | number | Jumlah halaman dalam PDF |

**Example:** Generate from HTML

```yaml
content: <h1>Report</h1><p>Content here</p>
output_path: /path/to/report.pdf
title: Monthly Report
```

### Memproses PDF

`pdf.parse`

Ekstrak teks dan metadata dari file PDF

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
| `text` | string | Konten teks yang diekstrak |
| `pages` | array | Konten teks yang diekstrak |
| `metadata` | object | Konten teks yang diekstrak |
| `page_count` | number | Konten teks per halaman |

**Example:** Extract all text from PDF

```yaml
path: /tmp/document.pdf
pages: all
```

### PDF ke Word

`pdf.to_word`

Konversi file PDF ke dokumen Word (.docx)

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
| `output_path` | string | Path ke dokumen Word yang dihasilkan |
| `page_count` | number | Path ke dokumen Word yang dihasilkan |
| `file_size` | number | Jumlah halaman yang dikonversi |

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

### Parse Dokumen Word

`word.parse`

Ekstrak teks dan konten dari dokumen Word (.docx)

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
| `text` | string | Konten teks lengkap dokumen |
| `paragraphs` | array | Konten teks lengkap dokumen |
| `tables` | array | Konten teks lengkap dokumen |
| `images` | array | Daftar paragraf |
| `metadata` | object | Tabel yang diekstrak sebagai array |

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

### Word ke PDF

`word.to_pdf`

Konversi dokumen Word (.docx) ke file PDF

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input document |
| `output_path` | string | No | - | Path for the output document |
| `method` | select (`auto`, `libreoffice`, `docx2pdf`) | No | `auto` | Method to use for conversion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Path ke file PDF yang dihasilkan |
| `file_size` | number | Path ke file PDF yang dihasilkan |
| `method_used` | string | Ukuran file output dalam bytes |

**Example:** Convert Word to PDF

```yaml
input_path: /tmp/document.docx
```

**Example:** Convert with specific output path

```yaml
input_path: /tmp/document.docx
output_path: /tmp/output.pdf
```
