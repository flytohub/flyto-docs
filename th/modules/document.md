# Document

Excel, PDF, and Word document read/write/convert.

**8 modules**

| Module | Description |
|--------|-------------|
| [อ่าน Excel](#อ่าน-excel) | อ่านข้อมูลจากไฟล์ Excel (xlsx, xls) |
| [เขียน Excel](#เขียน-excel) | เขียนข้อมูลลงไฟล์ Excel (xlsx) |
| [กรอกฟอร์ม PDF](#กรอกฟอร์ม-pdf) | กรอกฟิลด์ฟอร์ม PDF ด้วยข้อมูลและแทรกรูปภาพ (ไม่บังคับ) |
| [สร้าง PDF](#สร้าง-pdf) | สร้างไฟล์ PDF จากเนื้อหา HTML หรือข้อความ |
| [แปลง PDF](#แปลง-pdf) | ดึงข้อความและ metadata จากไฟล์ PDF |
| [PDF เป็น Word](#pdf-เป็น-word) | แปลงไฟล์ PDF เป็นเอกสาร Word (.docx) |
| [แปลงเอกสาร Word](#แปลงเอกสาร-word) | ดึงข้อความและเนื้อหาจากเอกสาร Word (.docx) |
| [Word เป็น PDF](#word-เป็น-pdf) | แปลงเอกสาร Word (.docx) เป็นไฟล์ PDF |

## Modules

### อ่าน Excel

`excel.read`

อ่านข้อมูลจากไฟล์ Excel (xlsx, xls)

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
| `data` | array | แถวข้อมูลที่ดึงออกมา |
| `headers` | array | แถวข้อมูลที่ดึงออกมา |
| `row_count` | number | แถวข้อมูลที่ดึงออกมา |
| `sheet_names` | array | หัวคอลัมน์ |

**Example:** Read entire sheet

```yaml
path: /tmp/data.xlsx
as_dict: true
```

### เขียน Excel

`excel.write`

เขียนข้อมูลลงไฟล์ Excel (xlsx)

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
| `path` | string | พาธไปยังไฟล์ Excel ที่สร้าง |
| `row_count` | number | พาธไปยังไฟล์ Excel ที่สร้าง |
| `size` | number | พาธไปยังไฟล์ Excel ที่สร้าง |

**Example:** Write data to Excel

```yaml
path: /tmp/output.xlsx
data: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
```

### กรอกฟอร์ม PDF

`pdf.fill_form`

กรอกฟิลด์ฟอร์ม PDF ด้วยข้อมูลและแทรกรูปภาพ (ไม่บังคับ)

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
| `output_path` | string | พาธไปยัง PDF ที่กรอกแล้ว |
| `fields_filled` | number | พาธไปยัง PDF ที่กรอกแล้ว |
| `images_inserted` | number | พาธไปยัง PDF ที่กรอกแล้ว |
| `file_size_bytes` | number | จำนวนรูปภาพที่แทรก |

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

### สร้าง PDF

`pdf.generate`

สร้างไฟล์ PDF จากเนื้อหา HTML หรือข้อความ

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
| `output_path` | string | พาธไปยัง PDF ที่สร้าง |
| `page_count` | number | พาธไปยัง PDF ที่สร้าง |
| `file_size_bytes` | number | จำนวนหน้าใน PDF |

**Example:** Generate from HTML

```yaml
content: <h1>Report</h1><p>Content here</p>
output_path: /path/to/report.pdf
title: Monthly Report
```

### แปลง PDF

`pdf.parse`

ดึงข้อความและ metadata จากไฟล์ PDF

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
| `text` | string | เนื้อหาข้อความที่ดึง |
| `pages` | array | เนื้อหาข้อความที่ดึง |
| `metadata` | object | เนื้อหาข้อความที่ดึง |
| `page_count` | number | เนื้อหาข้อความต่อหน้า |

**Example:** Extract all text from PDF

```yaml
path: /tmp/document.pdf
pages: all
```

### PDF เป็น Word

`pdf.to_word`

แปลงไฟล์ PDF เป็นเอกสาร Word (.docx)

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
| `output_path` | string | พาธไปยังเอกสาร Word ที่สร้าง |
| `page_count` | number | พาธไปยังเอกสาร Word ที่สร้าง |
| `file_size` | number | จำนวนหน้าที่แปลง |

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

### แปลงเอกสาร Word

`word.parse`

ดึงข้อความและเนื้อหาจากเอกสาร Word (.docx)

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
| `text` | string | เนื้อหาข้อความทั้งหมดของเอกสาร |
| `paragraphs` | array | เนื้อหาข้อความทั้งหมดของเอกสาร |
| `tables` | array | เนื้อหาข้อความทั้งหมดของเอกสาร |
| `images` | array | รายการย่อหน้า |
| `metadata` | object | ตารางที่ดึงออกมาเป็นอาร์เรย์ |

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

### Word เป็น PDF

`word.to_pdf`

แปลงเอกสาร Word (.docx) เป็นไฟล์ PDF

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input document |
| `output_path` | string | No | - | Path for the output document |
| `method` | select (`auto`, `libreoffice`, `docx2pdf`) | No | `auto` | Method to use for conversion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | พาธไปยังไฟล์ PDF ที่สร้าง |
| `file_size` | number | พาธไปยังไฟล์ PDF ที่สร้าง |
| `method_used` | string | ขนาดไฟล์เอาต์พุตเป็นไบต์ |

**Example:** Convert Word to PDF

```yaml
input_path: /tmp/document.docx
```

**Example:** Convert with specific output path

```yaml
input_path: /tmp/document.docx
output_path: /tmp/output.pdf
```
