# Document

Excel, PDF, and Word document read/write/convert.

**8 modules**

| Module | Description |
|--------|-------------|
| [Excel読み取り](#excel読み取り) | Excelファイル（xlsx、xls）からデータを読み取り |
| [Excel書き込み](#excel書き込み) | Excelファイル（xlsx）にデータを書き込み |
| [PDFフォーム入力](#pdfフォーム入力) | PDFフォームフィールドにデータを入力し、オプションで画像を挿入 |
| [PDF生成](#pdf生成) | HTMLコンテンツまたはテキストからPDFファイルを生成 |
| [PDFパース](#pdfパース) | PDFファイルからテキストとメタデータを抽出 |
| [PDF → Word](#pdf-→-word) | PDFファイルをWordドキュメント（.docx）に変換 |
| [Wordドキュメント解析](#wordドキュメント解析) | Wordドキュメント（.docx）からテキストとコンテンツを抽出 |
| [Word → PDF](#word-→-pdf) | Wordドキュメント（.docx）をPDFファイルに変換 |

## Modules

### Excel読み取り

`excel.read`

Excelファイル（xlsx、xls）からデータを読み取り

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
| `data` | array | 抽出されたデータ行 |
| `headers` | array | 抽出されたデータ行 |
| `row_count` | number | 抽出されたデータ行 |
| `sheet_names` | array | 列ヘッダー |

**Example:** Read entire sheet

```yaml
path: /tmp/data.xlsx
as_dict: true
```

### Excel書き込み

`excel.write`

Excelファイル（xlsx）にデータを書き込み

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
| `path` | string | 作成されたExcelファイルのパス |
| `row_count` | number | 作成されたExcelファイルのパス |
| `size` | number | 作成されたExcelファイルのパス |

**Example:** Write data to Excel

```yaml
path: /tmp/output.xlsx
data: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
```

### PDFフォーム入力

`pdf.fill_form`

PDFフォームフィールドにデータを入力し、オプションで画像を挿入

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
| `output_path` | string | 入力済みPDFのパス |
| `fields_filled` | number | 入力済みPDFのパス |
| `images_inserted` | number | 入力済みPDFのパス |
| `file_size_bytes` | number | 挿入された画像の数 |

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

### PDF生成

`pdf.generate`

HTMLコンテンツまたはテキストからPDFファイルを生成

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
| `output_path` | string | 生成されたPDFのパス |
| `page_count` | number | 生成されたPDFのパス |
| `file_size_bytes` | number | PDFのページ数 |

**Example:** Generate from HTML

```yaml
content: <h1>Report</h1><p>Content here</p>
output_path: /path/to/report.pdf
title: Monthly Report
```

### PDFパース

`pdf.parse`

PDFファイルからテキストとメタデータを抽出

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
| `text` | string | 抽出されたテキストコンテンツ |
| `pages` | array | 抽出されたテキストコンテンツ |
| `metadata` | object | 抽出されたテキストコンテンツ |
| `page_count` | number | ページごとのテキストコンテンツ |

**Example:** Extract all text from PDF

```yaml
path: /tmp/document.pdf
pages: all
```

### PDF → Word

`pdf.to_word`

PDFファイルをWordドキュメント（.docx）に変換

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
| `output_path` | string | 生成されたWordドキュメントのパス |
| `page_count` | number | 生成されたWordドキュメントのパス |
| `file_size` | number | 変換されたページ数 |

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

### Wordドキュメント解析

`word.parse`

Wordドキュメント（.docx）からテキストとコンテンツを抽出

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
| `text` | string | ドキュメントの全テキストコンテンツ |
| `paragraphs` | array | ドキュメントの全テキストコンテンツ |
| `tables` | array | ドキュメントの全テキストコンテンツ |
| `images` | array | 段落のリスト |
| `metadata` | object | 配列として抽出されたテーブル |

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

### Word → PDF

`word.to_pdf`

Wordドキュメント（.docx）をPDFファイルに変換

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input document |
| `output_path` | string | No | - | Path for the output document |
| `method` | select (`auto`, `libreoffice`, `docx2pdf`) | No | `auto` | Method to use for conversion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | 生成されたPDFファイルのパス |
| `file_size` | number | 生成されたPDFファイルのパス |
| `method_used` | string | 出力ファイルのサイズ（バイト） |

**Example:** Convert Word to PDF

```yaml
input_path: /tmp/document.docx
```

**Example:** Convert with specific output path

```yaml
input_path: /tmp/document.docx
output_path: /tmp/output.pdf
```
