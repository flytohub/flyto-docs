# Document

Excel, PDF, and Word document read/write/convert.

**8 modules**

| Module | Description |
|--------|-------------|
| [Excel पढ़ें](#excel-पढ़ें) | Excel फ़ाइलों (xlsx, xls) से डेटा पढ़ें |
| [Excel लिखें](#excel-लिखें) | Excel फ़ाइलों (xlsx) में डेटा लिखें |
| [PDF फ़ॉर्म भरें](#pdf-फ़ॉर्म-भरें) | PDF फ़ॉर्म फ़ील्ड्स को डेटा से भरें और वैकल्पिक रूप से इमेज इन्सर्ट करें |
| [PDF जनरेट करें](#pdf-जनरेट-करें) | HTML सामग्री या टेक्स्ट से PDF फ़ाइल जनरेट करें |
| [PDF पार्स करें](#pdf-पार्स-करें) | PDF फ़ाइलों से टेक्स्ट और मेटाडेटा निकालें |
| [PDF से Word](#pdf-से-word) | PDF फ़ाइलों को Word डॉक्यूमेंट (.docx) में बदलें |
| [Word डॉक्यूमेंट पार्स करें](#word-डॉक्यूमेंट-पार्स-करें) | Word डॉक्यूमेंट (.docx) से टेक्स्ट और सामग्री निकालें |
| [Word से PDF](#word-से-pdf) | Word डॉक्यूमेंट (.docx) को PDF फ़ाइलों में बदलें |

## Modules

### Excel पढ़ें

`excel.read`

Excel फ़ाइलों (xlsx, xls) से डेटा पढ़ें

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
| `data` | array | निकाली गई डेटा पंक्तियां |
| `headers` | array | निकाली गई डेटा पंक्तियां |
| `row_count` | number | निकाली गई डेटा पंक्तियां |
| `sheet_names` | array | कॉलम हेडर्स |

**Example:** Read entire sheet

```yaml
path: /tmp/data.xlsx
as_dict: true
```

### Excel लिखें

`excel.write`

Excel फ़ाइलों (xlsx) में डेटा लिखें

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
| `path` | string | बनाई गई Excel फ़ाइल का पथ |
| `row_count` | number | बनाई गई Excel फ़ाइल का पथ |
| `size` | number | बनाई गई Excel फ़ाइल का पथ |

**Example:** Write data to Excel

```yaml
path: /tmp/output.xlsx
data: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
```

### PDF फ़ॉर्म भरें

`pdf.fill_form`

PDF फ़ॉर्म फ़ील्ड्स को डेटा से भरें और वैकल्पिक रूप से इमेज इन्सर्ट करें

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
| `output_path` | string | भरी गई PDF का पथ |
| `fields_filled` | number | भरी गई PDF का पथ |
| `images_inserted` | number | भरी गई PDF का पथ |
| `file_size_bytes` | number | इन्सर्ट की गई इमेज की संख्या |

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

### PDF जनरेट करें

`pdf.generate`

HTML सामग्री या टेक्स्ट से PDF फ़ाइल जनरेट करें

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
| `output_path` | string | जनरेट की गई PDF का पथ |
| `page_count` | number | जनरेट की गई PDF का पथ |
| `file_size_bytes` | number | PDF में पेजों की संख्या |

**Example:** Generate from HTML

```yaml
content: <h1>Report</h1><p>Content here</p>
output_path: /path/to/report.pdf
title: Monthly Report
```

### PDF पार्स करें

`pdf.parse`

PDF फ़ाइलों से टेक्स्ट और मेटाडेटा निकालें

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
| `text` | string | निकाली गई टेक्स्ट सामग्री |
| `pages` | array | निकाली गई टेक्स्ट सामग्री |
| `metadata` | object | निकाली गई टेक्स्ट सामग्री |
| `page_count` | number | प्रति पेज टेक्स्ट सामग्री |

**Example:** Extract all text from PDF

```yaml
path: /tmp/document.pdf
pages: all
```

### PDF से Word

`pdf.to_word`

PDF फ़ाइलों को Word डॉक्यूमेंट (.docx) में बदलें

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
| `output_path` | string | जनरेट किए गए Word डॉक्यूमेंट का पथ |
| `page_count` | number | जनरेट किए गए Word डॉक्यूमेंट का पथ |
| `file_size` | number | कन्वर्ट किए गए पेजों की संख्या |

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

### Word डॉक्यूमेंट पार्स करें

`word.parse`

Word डॉक्यूमेंट (.docx) से टेक्स्ट और सामग्री निकालें

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
| `text` | string | डॉक्यूमेंट की पूर्ण टेक्स्ट सामग्री |
| `paragraphs` | array | डॉक्यूमेंट की पूर्ण टेक्स्ट सामग्री |
| `tables` | array | डॉक्यूमेंट की पूर्ण टेक्स्ट सामग्री |
| `images` | array | पैराग्राफ की सूची |
| `metadata` | object | सरणियों के रूप में निकाली गई टेबल |

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

### Word से PDF

`word.to_pdf`

Word डॉक्यूमेंट (.docx) को PDF फ़ाइलों में बदलें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input document |
| `output_path` | string | No | - | Path for the output document |
| `method` | select (`auto`, `libreoffice`, `docx2pdf`) | No | `auto` | Method to use for conversion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | जनरेट की गई PDF फ़ाइल का पथ |
| `file_size` | number | जनरेट की गई PDF फ़ाइल का पथ |
| `method_used` | string | बाइट्स में आउटपुट फ़ाइल का आकार |

**Example:** Convert Word to PDF

```yaml
input_path: /tmp/document.docx
```

**Example:** Convert with specific output path

```yaml
input_path: /tmp/document.docx
output_path: /tmp/output.pdf
```
