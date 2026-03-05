# Document

Excel, PDF, and Word document read/write/convert.

**8 modules**

| Module | Description |
|--------|-------------|
| [Excel 읽기](#excel-읽기) | Excel 파일(xlsx, xls)에서 데이터 읽기 |
| [Excel 쓰기](#excel-쓰기) | Excel 파일(xlsx)에 데이터 쓰기 |
| [PDF 폼 채우기](#pdf-폼-채우기) | PDF 폼 필드에 데이터 채우기 및 선택적으로 이미지 삽입 |
| [PDF 생성](#pdf-생성) | HTML 콘텐츠 또는 텍스트에서 PDF 파일 생성 |
| [PDF 파싱](#pdf-파싱) | PDF 파일에서 텍스트 및 메타데이터 추출 |
| [PDF를 Word로](#pdf를-word로) | PDF 파일을 Word 문서(.docx)로 변환 |
| [Word 문서 파싱](#word-문서-파싱) | Word 문서(.docx)에서 텍스트 및 콘텐츠 추출 |
| [Word를 PDF로 변환](#word를-pdf로-변환) | Word 문서(.docx)를 PDF 파일로 변환 |

## Modules

### Excel 읽기

`excel.read`

Excel 파일(xlsx, xls)에서 데이터 읽기

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
| `data` | array | 추출된 데이터 행 |
| `headers` | array | 추출된 데이터 행 |
| `row_count` | number | 추출된 데이터 행 |
| `sheet_names` | array | 열 헤더 |

**Example:** Read entire sheet

```yaml
path: /tmp/data.xlsx
as_dict: true
```

### Excel 쓰기

`excel.write`

Excel 파일(xlsx)에 데이터 쓰기

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
| `path` | string | 생성된 Excel 파일 경로 |
| `row_count` | number | 생성된 Excel 파일 경로 |
| `size` | number | 생성된 Excel 파일 경로 |

**Example:** Write data to Excel

```yaml
path: /tmp/output.xlsx
data: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
```

### PDF 폼 채우기

`pdf.fill_form`

PDF 폼 필드에 데이터 채우기 및 선택적으로 이미지 삽입

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
| `output_path` | string | 채워진 PDF 경로 |
| `fields_filled` | number | 채워진 PDF 경로 |
| `images_inserted` | number | 채워진 PDF 경로 |
| `file_size_bytes` | number | 삽입된 이미지 수 |

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

### PDF 생성

`pdf.generate`

HTML 콘텐츠 또는 텍스트에서 PDF 파일 생성

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
| `output_path` | string | 생성된 PDF 경로 |
| `page_count` | number | 생성된 PDF 경로 |
| `file_size_bytes` | number | PDF의 페이지 수 |

**Example:** Generate from HTML

```yaml
content: <h1>Report</h1><p>Content here</p>
output_path: /path/to/report.pdf
title: Monthly Report
```

### PDF 파싱

`pdf.parse`

PDF 파일에서 텍스트 및 메타데이터 추출

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
| `text` | string | 추출된 텍스트 콘텐츠 |
| `pages` | array | 추출된 텍스트 콘텐츠 |
| `metadata` | object | 추출된 텍스트 콘텐츠 |
| `page_count` | number | 페이지별 텍스트 콘텐츠 |

**Example:** Extract all text from PDF

```yaml
path: /tmp/document.pdf
pages: all
```

### PDF를 Word로

`pdf.to_word`

PDF 파일을 Word 문서(.docx)로 변환

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
| `output_path` | string | 생성된 Word 문서 경로 |
| `page_count` | number | 생성된 Word 문서 경로 |
| `file_size` | number | 변환된 페이지 수 |

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

### Word 문서 파싱

`word.parse`

Word 문서(.docx)에서 텍스트 및 콘텐츠 추출

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
| `text` | string | 문서의 전체 텍스트 콘텐츠 |
| `paragraphs` | array | 문서의 전체 텍스트 콘텐츠 |
| `tables` | array | 문서의 전체 텍스트 콘텐츠 |
| `images` | array | 단락 목록 |
| `metadata` | object | 배열로 추출된 테이블 |

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

### Word를 PDF로 변환

`word.to_pdf`

Word 문서(.docx)를 PDF 파일로 변환

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input document |
| `output_path` | string | No | - | Path for the output document |
| `method` | select (`auto`, `libreoffice`, `docx2pdf`) | No | `auto` | Method to use for conversion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | 생성된 PDF 파일 경로 |
| `file_size` | number | 생성된 PDF 파일 경로 |
| `method_used` | string | 출력 파일 크기 (바이트) |

**Example:** Convert Word to PDF

```yaml
input_path: /tmp/document.docx
```

**Example:** Convert with specific output path

```yaml
input_path: /tmp/document.docx
output_path: /tmp/output.pdf
```
