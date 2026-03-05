# Document

Excel, PDF, and Word document read/write/convert.

**8 modules**

| Module | Description |
|--------|-------------|
| [Đọc Excel](#đọc-excel) | Đọc dữ liệu từ tệp Excel (xlsx, xls) |
| [Ghi Excel](#ghi-excel) | Ghi dữ liệu vào tệp Excel (xlsx) |
| [Điền form PDF](#điền-form-pdf) | Điền các trường form PDF với dữ liệu và tùy chọn chèn hình ảnh |
| [Tạo PDF](#tạo-pdf) | Tạo tệp PDF từ nội dung HTML hoặc văn bản |
| [Phân tích PDF](#phân-tích-pdf) | Trích xuất văn bản và metadata từ tệp PDF |
| [PDF sang Word](#pdf-sang-word) | Chuyển đổi tệp PDF sang tài liệu Word (.docx) |
| [Phân tích tài liệu Word](#phân-tích-tài-liệu-word) | Trích xuất văn bản và nội dung từ tài liệu Word (.docx) |
| [Word sang PDF](#word-sang-pdf) | Chuyển đổi tài liệu Word (.docx) thành tệp PDF |

## Modules

### Đọc Excel

`excel.read`

Đọc dữ liệu từ tệp Excel (xlsx, xls)

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
| `data` | array | Các hàng dữ liệu trích xuất |
| `headers` | array | Các hàng dữ liệu trích xuất |
| `row_count` | number | Các hàng dữ liệu trích xuất |
| `sheet_names` | array | Tiêu đề cột |

**Example:** Read entire sheet

```yaml
path: /tmp/data.xlsx
as_dict: true
```

### Ghi Excel

`excel.write`

Ghi dữ liệu vào tệp Excel (xlsx)

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
| `path` | string | Đường dẫn đến tệp Excel đã tạo |
| `row_count` | number | Đường dẫn đến tệp Excel đã tạo |
| `size` | number | Đường dẫn đến tệp Excel đã tạo |

**Example:** Write data to Excel

```yaml
path: /tmp/output.xlsx
data: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
```

### Điền form PDF

`pdf.fill_form`

Điền các trường form PDF với dữ liệu và tùy chọn chèn hình ảnh

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
| `output_path` | string | Đường dẫn đến PDF đã điền |
| `fields_filled` | number | Đường dẫn đến PDF đã điền |
| `images_inserted` | number | Đường dẫn đến PDF đã điền |
| `file_size_bytes` | number | Số hình ảnh đã chèn |

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

### Tạo PDF

`pdf.generate`

Tạo tệp PDF từ nội dung HTML hoặc văn bản

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
| `output_path` | string | Đường dẫn đến PDF đã tạo |
| `page_count` | number | Đường dẫn đến PDF đã tạo |
| `file_size_bytes` | number | Số trang trong PDF |

**Example:** Generate from HTML

```yaml
content: <h1>Report</h1><p>Content here</p>
output_path: /path/to/report.pdf
title: Monthly Report
```

### Phân tích PDF

`pdf.parse`

Trích xuất văn bản và metadata từ tệp PDF

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
| `text` | string | Nội dung văn bản đã trích xuất |
| `pages` | array | Nội dung văn bản đã trích xuất |
| `metadata` | object | Nội dung văn bản đã trích xuất |
| `page_count` | number | Nội dung văn bản theo trang |

**Example:** Extract all text from PDF

```yaml
path: /tmp/document.pdf
pages: all
```

### PDF sang Word

`pdf.to_word`

Chuyển đổi tệp PDF sang tài liệu Word (.docx)

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
| `output_path` | string | Đường dẫn đến tài liệu Word đã tạo |
| `page_count` | number | Đường dẫn đến tài liệu Word đã tạo |
| `file_size` | number | Số trang đã chuyển đổi |

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

### Phân tích tài liệu Word

`word.parse`

Trích xuất văn bản và nội dung từ tài liệu Word (.docx)

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
| `text` | string | Toàn bộ nội dung văn bản của tài liệu |
| `paragraphs` | array | Toàn bộ nội dung văn bản của tài liệu |
| `tables` | array | Toàn bộ nội dung văn bản của tài liệu |
| `images` | array | Danh sách các đoạn văn |
| `metadata` | object | Các bảng được trích xuất dưới dạng mảng |

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

### Word sang PDF

`word.to_pdf`

Chuyển đổi tài liệu Word (.docx) thành tệp PDF

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input document |
| `output_path` | string | No | - | Path for the output document |
| `method` | select (`auto`, `libreoffice`, `docx2pdf`) | No | `auto` | Method to use for conversion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Đường dẫn đến tệp PDF đã tạo |
| `file_size` | number | Đường dẫn đến tệp PDF đã tạo |
| `method_used` | string | Kích thước tệp đầu ra tính bằng byte |

**Example:** Convert Word to PDF

```yaml
input_path: /tmp/document.docx
```

**Example:** Convert with specific output path

```yaml
input_path: /tmp/document.docx
output_path: /tmp/output.pdf
```
