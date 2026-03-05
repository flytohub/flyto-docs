# Document

Excel, PDF, and Word document read/write/convert.

**8 modules**

| Module | Description |
|--------|-------------|
| [Odczytaj Excel](#odczytaj-excel) | Odczytaj dane z plikow Excel (xlsx, xls) |
| [Zapisz Excel](#zapisz-excel) | Zapisz dane do plikow Excel (xlsx) |
| [Wypelnij formularz PDF](#wypelnij-formularz-pdf) | Wypelnij pola formularza PDF danymi i opcjonalnie wstaw obrazy |
| [Generuj PDF](#generuj-pdf) | Generuj pliki PDF z zawartosci HTML lub tekstu |
| [Parsuj PDF](#parsuj-pdf) | Wyodrebnij tekst i metadane z plikow PDF |
| [PDF do Word](#pdf-do-word) | Konwertuj pliki PDF na dokumenty Word (.docx) |
| [Parsuj dokument Word](#parsuj-dokument-word) | Wyodrębnij tekst i zawartość z dokumentów Word (.docx) |
| [Word do PDF](#word-do-pdf) | Konwertuj dokumenty Word (.docx) na pliki PDF |

## Modules

### Odczytaj Excel

`excel.read`

Odczytaj dane z plikow Excel (xlsx, xls)

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
| `data` | array | Wyodrebnione wiersze danych |
| `headers` | array | Wyodrebnione wiersze danych |
| `row_count` | number | Wyodrebnione wiersze danych |
| `sheet_names` | array | Naglowki kolumn |

**Example:** Read entire sheet

```yaml
path: /tmp/data.xlsx
as_dict: true
```

### Zapisz Excel

`excel.write`

Zapisz dane do plikow Excel (xlsx)

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
| `path` | string | Sciezka do utworzonego pliku Excel |
| `row_count` | number | Sciezka do utworzonego pliku Excel |
| `size` | number | Sciezka do utworzonego pliku Excel |

**Example:** Write data to Excel

```yaml
path: /tmp/output.xlsx
data: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
```

### Wypelnij formularz PDF

`pdf.fill_form`

Wypelnij pola formularza PDF danymi i opcjonalnie wstaw obrazy

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
| `output_path` | string | Sciezka do wypelnionego PDF |
| `fields_filled` | number | Sciezka do wypelnionego PDF |
| `images_inserted` | number | Sciezka do wypelnionego PDF |
| `file_size_bytes` | number | Liczba wstawionych obrazow |

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

### Generuj PDF

`pdf.generate`

Generuj pliki PDF z zawartosci HTML lub tekstu

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
| `output_path` | string | Sciezka do wygenerowanego PDF |
| `page_count` | number | Sciezka do wygenerowanego PDF |
| `file_size_bytes` | number | Liczba stron w PDF |

**Example:** Generate from HTML

```yaml
content: <h1>Report</h1><p>Content here</p>
output_path: /path/to/report.pdf
title: Monthly Report
```

### Parsuj PDF

`pdf.parse`

Wyodrebnij tekst i metadane z plikow PDF

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
| `text` | string | Wyodrebniona zawartosc tekstowa |
| `pages` | array | Wyodrebniona zawartosc tekstowa |
| `metadata` | object | Wyodrebniona zawartosc tekstowa |
| `page_count` | number | Zawartosc tekstowa na strone |

**Example:** Extract all text from PDF

```yaml
path: /tmp/document.pdf
pages: all
```

### PDF do Word

`pdf.to_word`

Konwertuj pliki PDF na dokumenty Word (.docx)

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
| `output_path` | string | Sciezka do wygenerowanego dokumentu Word |
| `page_count` | number | Sciezka do wygenerowanego dokumentu Word |
| `file_size` | number | Liczba skonwertowanych stron |

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

### Parsuj dokument Word

`word.parse`

Wyodrębnij tekst i zawartość z dokumentów Word (.docx)

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
| `text` | string | Pełna zawartość tekstowa dokumentu |
| `paragraphs` | array | Pełna zawartość tekstowa dokumentu |
| `tables` | array | Pełna zawartość tekstowa dokumentu |
| `images` | array | Lista akapitów |
| `metadata` | object | Wyodrębnione tabele jako tablice |

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

### Word do PDF

`word.to_pdf`

Konwertuj dokumenty Word (.docx) na pliki PDF

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input document |
| `output_path` | string | No | - | Path for the output document |
| `method` | select (`auto`, `libreoffice`, `docx2pdf`) | No | `auto` | Method to use for conversion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Ścieżka do wygenerowanego pliku PDF |
| `file_size` | number | Ścieżka do wygenerowanego pliku PDF |
| `method_used` | string | Rozmiar pliku wyjściowego w bajtach |

**Example:** Convert Word to PDF

```yaml
input_path: /tmp/document.docx
```

**Example:** Convert with specific output path

```yaml
input_path: /tmp/document.docx
output_path: /tmp/output.pdf
```
