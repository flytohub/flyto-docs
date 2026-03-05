# Document

Excel, PDF, and Word document read/write/convert.

**8 modules**

| Module | Description |
|--------|-------------|
| [Excel Oku](#excel-oku) | Excel dosyalarından veri oku (xlsx, xls) |
| [Excel Yaz](#excel-yaz) | Excel dosyalarına veri yaz (xlsx) |
| [PDF Formu Doldur](#pdf-formu-doldur) | PDF form alanlarını verilerle doldur ve isteğe bağlı olarak görüntü ekle |
| [PDF Oluştur](#pdf-oluştur) | HTML içeriğinden veya metinden PDF dosyaları oluştur |
| [PDF Ayrıştır](#pdf-ayrıştır) | PDF dosyalarından metin ve meta verileri çıkar |
| [PDF'den Word'e](#pdf'den-word'e) | PDF dosyalarını Word belgelerine (.docx) dönüştür |
| [Word Belgesini Ayrıştır](#word-belgesini-ayrıştır) | Word belgelerinden (.docx) metin ve içerik çıkar |
| [Word'den PDF'e](#word'den-pdf'e) | Word belgelerini (.docx) PDF dosyalarına dönüştür |

## Modules

### Excel Oku

`excel.read`

Excel dosyalarından veri oku (xlsx, xls)

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
| `data` | array | Çıkarılan veri satırları |
| `headers` | array | Çıkarılan veri satırları |
| `row_count` | number | Çıkarılan veri satırları |
| `sheet_names` | array | Sütun başlıkları |

**Example:** Read entire sheet

```yaml
path: /tmp/data.xlsx
as_dict: true
```

### Excel Yaz

`excel.write`

Excel dosyalarına veri yaz (xlsx)

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
| `path` | string | Oluşturulan Excel dosyasının yolu |
| `row_count` | number | Oluşturulan Excel dosyasının yolu |
| `size` | number | Oluşturulan Excel dosyasının yolu |

**Example:** Write data to Excel

```yaml
path: /tmp/output.xlsx
data: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
```

### PDF Formu Doldur

`pdf.fill_form`

PDF form alanlarını verilerle doldur ve isteğe bağlı olarak görüntü ekle

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
| `output_path` | string | Doldurulan PDF'in yolu |
| `fields_filled` | number | Doldurulan PDF'in yolu |
| `images_inserted` | number | Doldurulan PDF'in yolu |
| `file_size_bytes` | number | Eklenen görüntü sayısı |

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

### PDF Oluştur

`pdf.generate`

HTML içeriğinden veya metinden PDF dosyaları oluştur

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
| `output_path` | string | Oluşturulan PDF'in yolu |
| `page_count` | number | Oluşturulan PDF'in yolu |
| `file_size_bytes` | number | PDF'teki sayfa sayısı |

**Example:** Generate from HTML

```yaml
content: <h1>Report</h1><p>Content here</p>
output_path: /path/to/report.pdf
title: Monthly Report
```

### PDF Ayrıştır

`pdf.parse`

PDF dosyalarından metin ve meta verileri çıkar

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
| `text` | string | Çıkarılan metin içeriği |
| `pages` | array | Çıkarılan metin içeriği |
| `metadata` | object | Çıkarılan metin içeriği |
| `page_count` | number | Sayfa başına metin içeriği |

**Example:** Extract all text from PDF

```yaml
path: /tmp/document.pdf
pages: all
```

### PDF'den Word'e

`pdf.to_word`

PDF dosyalarını Word belgelerine (.docx) dönüştür

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
| `output_path` | string | Oluşturulan Word belgesinin yolu |
| `page_count` | number | Oluşturulan Word belgesinin yolu |
| `file_size` | number | Dönüştürülen sayfa sayısı |

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

### Word Belgesini Ayrıştır

`word.parse`

Word belgelerinden (.docx) metin ve içerik çıkar

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
| `text` | string | Belgenin tam metin içeriği |
| `paragraphs` | array | Belgenin tam metin içeriği |
| `tables` | array | Belgenin tam metin içeriği |
| `images` | array | Paragraf listesi |
| `metadata` | object | Dizi olarak çıkarılan tablolar |

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

### Word'den PDF'e

`word.to_pdf`

Word belgelerini (.docx) PDF dosyalarına dönüştür

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input document |
| `output_path` | string | No | - | Path for the output document |
| `method` | select (`auto`, `libreoffice`, `docx2pdf`) | No | `auto` | Method to use for conversion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Oluşturulan PDF dosyasının yolu |
| `file_size` | number | Oluşturulan PDF dosyasının yolu |
| `method_used` | string | Çıktı dosyasının bayt cinsinden boyutu |

**Example:** Convert Word to PDF

```yaml
input_path: /tmp/document.docx
```

**Example:** Convert with specific output path

```yaml
input_path: /tmp/document.docx
output_path: /tmp/output.pdf
```
