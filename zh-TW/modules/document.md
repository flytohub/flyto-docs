# Document

Excel, PDF, and Word document read/write/convert.

**8 modules**

| Module | Description |
|--------|-------------|
| [讀取 Excel](#讀取-excel) | 從 Excel 檔案（xlsx、xls）讀取資料 |
| [寫入 Excel](#寫入-excel) | 將資料寫入 Excel 檔案（xlsx） |
| [填寫 PDF 表單](#填寫-pdf-表單) | 填寫 PDF 表單欄位並可選擇插入圖片 |
| [產生 PDF](#產生-pdf) | 從 HTML 內容或文字產生 PDF 檔案 |
| [解析 PDF](#解析-pdf) | 從 PDF 檔案擷取文字和中繼資料 |
| [PDF 轉 Word](#pdf-轉-word) | 將 PDF 檔案轉換為 Word 文件（.docx） |
| [解析 Word 文件](#解析-word-文件) | 從 Word 文件（.docx）擷取文字和內容 |
| [Word 轉 PDF](#word-轉-pdf) | 將 Word 文件（.docx）轉換為 PDF 檔案 |

## Modules

### 讀取 Excel

`excel.read`

從 Excel 檔案（xlsx、xls）讀取資料

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
| `data` | array | 擷取的資料列 |
| `headers` | array | 擷取的資料列 |
| `row_count` | number | 擷取的資料列 |
| `sheet_names` | array | 欄位標頭 |

**Example:** Read entire sheet

```yaml
path: /tmp/data.xlsx
as_dict: true
```

### 寫入 Excel

`excel.write`

將資料寫入 Excel 檔案（xlsx）

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
| `path` | string | 建立的 Excel 檔案路徑 |
| `row_count` | number | 建立的 Excel 檔案路徑 |
| `size` | number | 建立的 Excel 檔案路徑 |

**Example:** Write data to Excel

```yaml
path: /tmp/output.xlsx
data: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
```

### 填寫 PDF 表單

`pdf.fill_form`

填寫 PDF 表單欄位並可選擇插入圖片

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
| `output_path` | string | 已填寫 PDF 的路徑 |
| `fields_filled` | number | 已填寫 PDF 的路徑 |
| `images_inserted` | number | 已填寫 PDF 的路徑 |
| `file_size_bytes` | number | 插入的圖片數量 |

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

### 產生 PDF

`pdf.generate`

從 HTML 內容或文字產生 PDF 檔案

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
| `output_path` | string | 產生的 PDF 路徑 |
| `page_count` | number | 產生的 PDF 路徑 |
| `file_size_bytes` | number | PDF 的頁數 |

**Example:** Generate from HTML

```yaml
content: <h1>Report</h1><p>Content here</p>
output_path: /path/to/report.pdf
title: Monthly Report
```

### 解析 PDF

`pdf.parse`

從 PDF 檔案擷取文字和中繼資料

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
| `text` | string | 擷取的文字內容 |
| `pages` | array | 擷取的文字內容 |
| `metadata` | object | 擷取的文字內容 |
| `page_count` | number | 每頁的文字內容 |

**Example:** Extract all text from PDF

```yaml
path: /tmp/document.pdf
pages: all
```

### PDF 轉 Word

`pdf.to_word`

將 PDF 檔案轉換為 Word 文件（.docx）

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
| `output_path` | string | 產生的 Word 文件路徑 |
| `page_count` | number | 產生的 Word 文件路徑 |
| `file_size` | number | 轉換的頁數 |

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

### 解析 Word 文件

`word.parse`

從 Word 文件（.docx）擷取文字和內容

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
| `text` | string | 文件的完整文字內容 |
| `paragraphs` | array | 文件的完整文字內容 |
| `tables` | array | 文件的完整文字內容 |
| `images` | array | 段落列表 |
| `metadata` | object | 擷取的表格（陣列格式） |

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

### Word 轉 PDF

`word.to_pdf`

將 Word 文件（.docx）轉換為 PDF 檔案

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input document |
| `output_path` | string | No | - | Path for the output document |
| `method` | select (`auto`, `libreoffice`, `docx2pdf`) | No | `auto` | Method to use for conversion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | 產生的 PDF 檔案路徑 |
| `file_size` | number | 產生的 PDF 檔案路徑 |
| `method_used` | string | 輸出檔案大小（位元組） |

**Example:** Convert Word to PDF

```yaml
input_path: /tmp/document.docx
```

**Example:** Convert with specific output path

```yaml
input_path: /tmp/document.docx
output_path: /tmp/output.pdf
```
