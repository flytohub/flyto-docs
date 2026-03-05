# Document

Excel, PDF, and Word document read/write/convert.

**8 modules**

| Module | Description |
|--------|-------------|
| [Ler Excel](#ler-excel) | Ler dados de arquivos Excel (xlsx, xls) |
| [Escrever Excel](#escrever-excel) | Escrever dados em arquivos Excel (xlsx) |
| [Preencher Formulario PDF](#preencher-formulario-pdf) | Preencher campos de formulario PDF com dados e opcionalmente inserir imagens |
| [Gerar PDF](#gerar-pdf) | Gerar arquivos PDF a partir de conteudo HTML ou texto |
| [Analisar PDF](#analisar-pdf) | Extrair texto e metadados de arquivos PDF |
| [PDF para Word](#pdf-para-word) | Converter arquivos PDF para documentos Word (.docx) |
| [Analisar Documento Word](#analisar-documento-word) | Extrair texto e conteudo de documentos Word (.docx) |
| [Word para PDF](#word-para-pdf) | Converter documentos Word (.docx) para arquivos PDF |

## Modules

### Ler Excel

`excel.read`

Ler dados de arquivos Excel (xlsx, xls)

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
| `data` | array | Linhas de dados extraidas |
| `headers` | array | Linhas de dados extraidas |
| `row_count` | number | Linhas de dados extraidas |
| `sheet_names` | array | Cabecalhos das colunas |

**Example:** Read entire sheet

```yaml
path: /tmp/data.xlsx
as_dict: true
```

### Escrever Excel

`excel.write`

Escrever dados em arquivos Excel (xlsx)

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
| `path` | string | Caminho para o arquivo Excel criado |
| `row_count` | number | Caminho para o arquivo Excel criado |
| `size` | number | Caminho para o arquivo Excel criado |

**Example:** Write data to Excel

```yaml
path: /tmp/output.xlsx
data: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
```

### Preencher Formulario PDF

`pdf.fill_form`

Preencher campos de formulario PDF com dados e opcionalmente inserir imagens

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
| `output_path` | string | Caminho para o PDF preenchido |
| `fields_filled` | number | Caminho para o PDF preenchido |
| `images_inserted` | number | Caminho para o PDF preenchido |
| `file_size_bytes` | number | Numero de imagens inseridas |

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

### Gerar PDF

`pdf.generate`

Gerar arquivos PDF a partir de conteudo HTML ou texto

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
| `output_path` | string | Caminho para o PDF gerado |
| `page_count` | number | Caminho para o PDF gerado |
| `file_size_bytes` | number | Numero de paginas no PDF |

**Example:** Generate from HTML

```yaml
content: <h1>Report</h1><p>Content here</p>
output_path: /path/to/report.pdf
title: Monthly Report
```

### Analisar PDF

`pdf.parse`

Extrair texto e metadados de arquivos PDF

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
| `text` | string | Conteudo de texto extraido |
| `pages` | array | Conteudo de texto extraido |
| `metadata` | object | Conteudo de texto extraido |
| `page_count` | number | Conteudo de texto por pagina |

**Example:** Extract all text from PDF

```yaml
path: /tmp/document.pdf
pages: all
```

### PDF para Word

`pdf.to_word`

Converter arquivos PDF para documentos Word (.docx)

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
| `output_path` | string | Caminho para o documento Word gerado |
| `page_count` | number | Caminho para o documento Word gerado |
| `file_size` | number | Numero de paginas convertidas |

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

### Analisar Documento Word

`word.parse`

Extrair texto e conteudo de documentos Word (.docx)

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
| `text` | string | Conteudo de texto completo do documento |
| `paragraphs` | array | Conteudo de texto completo do documento |
| `tables` | array | Conteudo de texto completo do documento |
| `images` | array | Lista de paragrafos |
| `metadata` | object | Tabelas extraidas como arrays |

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

### Word para PDF

`word.to_pdf`

Converter documentos Word (.docx) para arquivos PDF

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | Path to the input document |
| `output_path` | string | No | - | Path for the output document |
| `method` | select (`auto`, `libreoffice`, `docx2pdf`) | No | `auto` | Method to use for conversion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | Caminho para o arquivo PDF gerado |
| `file_size` | number | Caminho para o arquivo PDF gerado |
| `method_used` | string | Tamanho do arquivo de saida em bytes |

**Example:** Convert Word to PDF

```yaml
input_path: /tmp/document.docx
```

**Example:** Convert with specific output path

```yaml
input_path: /tmp/document.docx
output_path: /tmp/output.pdf
```
