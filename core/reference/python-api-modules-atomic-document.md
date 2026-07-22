<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Document

Source-backed signatures for **40 declarations** across **8 files** in the modules: atomic / document area.

## `src/core/modules/atomic/document/excel_read.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def excel_read(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Read data from Excel file | [`src/core/modules/atomic/document/excel_read.py:89`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/excel_read.py#L89) |
| function | `def _select_sheet(wb, sheet_name: Optional&#91;str&#93;, sheet_names: List&#91;str&#93;)` | Implements `_select_sheet`; linked source is authoritative. | [`src/core/modules/atomic/document/excel_read.py:128`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/excel_read.py#L128) |
| function | `def _read_rows(ws, cell_range: Optional&#91;str&#93;) -> List&#91;List&#91;Any&#93;&#93;` | Implements `_read_rows`; linked source is authoritative. | [`src/core/modules/atomic/document/excel_read.py:136`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/excel_read.py#L136) |
| function | `def _extract_headers(all_rows: List&#91;List&#91;Any&#93;&#93;, header_row: int)` | Implements `_extract_headers`; linked source is authoritative. | [`src/core/modules/atomic/document/excel_read.py:141`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/excel_read.py#L141) |
| function | `def _rows_to_dicts(data_rows: List&#91;List&#91;Any&#93;&#93;, headers: List&#91;str&#93;) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Implements `_rows_to_dicts`; linked source is authoritative. | [`src/core/modules/atomic/document/excel_read.py:148`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/excel_read.py#L148) |

## `src/core/modules/atomic/document/excel_write.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def excel_write(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Write data to Excel file | [`src/core/modules/atomic/document/excel_write.py:90`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/excel_write.py#L90) |
| function | `def _resolve_headers(data: List, headers: Optional&#91;List&#91;str&#93;&#93;) -> List&#91;str&#93;` | Implements `_resolve_headers`; linked source is authoritative. | [`src/core/modules/atomic/document/excel_write.py:143`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/excel_write.py#L143) |
| function | `def _write_sheet_data(ws, headers: List&#91;str&#93;, data: List, auto_width: bool) -> Dict&#91;int, int&#93;` | Implements `_write_sheet_data`; linked source is authoritative. | [`src/core/modules/atomic/document/excel_write.py:151`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/excel_write.py#L151) |
| function | `def _apply_column_widths(ws, col_widths: Dict&#91;int, int&#93;, get_column_letter)` | Implements `_apply_column_widths`; linked source is authoritative. | [`src/core/modules/atomic/document/excel_write.py:173`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/excel_write.py#L173) |

## `src/core/modules/atomic/document/pdf_fill_form.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def pdf_fill_form(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Fill PDF form fields and insert images | [`src/core/modules/atomic/document/pdf_fill_form.py:116`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/pdf_fill_form.py#L116) |
| method | `def pdf_fill_form._do_fill()` | Implements `pdf_fill_form._do_fill`; linked source is authoritative. | [`src/core/modules/atomic/document/pdf_fill_form.py:133`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/pdf_fill_form.py#L133) |
| function | `def _fill_form_fields(writer, reader, fields: Dict&#91;str, Any&#93;) -> int` | Implements `_fill_form_fields`; linked source is authoritative. | [`src/core/modules/atomic/document/pdf_fill_form.py:162`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/pdf_fill_form.py#L162) |
| function | `def _insert_form_images(writer, images: List&#91;Dict&#91;str, Any&#93;&#93;) -> int` | Implements `_insert_form_images`; linked source is authoritative. | [`src/core/modules/atomic/document/pdf_fill_form.py:177`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/pdf_fill_form.py#L177) |
| function | `def _insert_single_image(writer, img_config: Dict&#91;str, Any&#93;, canvas, BytesIO) -> bool` | Implements `_insert_single_image`; linked source is authoritative. | [`src/core/modules/atomic/document/pdf_fill_form.py:196`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/pdf_fill_form.py#L196) |

## `src/core/modules/atomic/document/pdf_generate.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def pdf_generate(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Generate PDF from HTML or text content | [`src/core/modules/atomic/document/pdf_generate.py:88`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/pdf_generate.py#L88) |
| method | `def pdf_generate._generate()` | Implements `pdf_generate._generate`; linked source is authoritative. | [`src/core/modules/atomic/document/pdf_generate.py:123`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/pdf_generate.py#L123) |

## `src/core/modules/atomic/document/pdf_parse.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def pdf_parse(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Parse PDF and extract text | [`src/core/modules/atomic/document/pdf_parse.py:90`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/pdf_parse.py#L90) |
| function | `def _parse_page_range(pages: str, total: int) -> List&#91;int&#93;` | Parse page range string to list of indices (0-based) | [`src/core/modules/atomic/document/pdf_parse.py:157`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/pdf_parse.py#L157) |

## `src/core/modules/atomic/document/pdf_to_word.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def pdf_to_word(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Convert PDF to Word document | [`src/core/modules/atomic/document/pdf_to_word.py:93`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/pdf_to_word.py#L93) |
| function | `def _resolve_pdf_output(params: Dict&#91;str, Any&#93;, input_path: str) -> str` | Implements `_resolve_pdf_output`; linked source is authoritative. | [`src/core/modules/atomic/document/pdf_to_word.py:148`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/pdf_to_word.py#L148) |
| function | `def _ensure_output_dir(output_path: str)` | Implements `_ensure_output_dir`; linked source is authoritative. | [`src/core/modules/atomic/document/pdf_to_word.py:156`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/pdf_to_word.py#L156) |
| function | `def _add_pdf_title(doc, reader, alignment_enum)` | Implements `_add_pdf_title`; linked source is authoritative. | [`src/core/modules/atomic/document/pdf_to_word.py:162`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/pdf_to_word.py#L162) |
| function | `def _convert_pages(doc, reader, page_indices, total_pages, preserve_formatting, Pt)` | Implements `_convert_pages`; linked source is authoritative. | [`src/core/modules/atomic/document/pdf_to_word.py:168`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/pdf_to_word.py#L168) |
| function | `def _parse_page_range(pages: str, total: int) -> list` | Parse page range string to list of indices (0-based) | [`src/core/modules/atomic/document/pdf_to_word.py:195`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/pdf_to_word.py#L195) |

## `src/core/modules/atomic/document/word_parse.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def word_parse(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Parse Word document and extract content | [`src/core/modules/atomic/document/word_parse.py:102`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/word_parse.py#L102) |
| method | `def word_parse._parse()` | Implements `word_parse._parse`; linked source is authoritative. | [`src/core/modules/atomic/document/word_parse.py:120`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/word_parse.py#L120) |
| function | `def _extract_paragraphs(doc, preserve_formatting: bool)` | Implements `_extract_paragraphs`; linked source is authoritative. | [`src/core/modules/atomic/document/word_parse.py:152`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/word_parse.py#L152) |
| function | `def _extract_tables(doc) -> List` | Implements `_extract_tables`; linked source is authoritative. | [`src/core/modules/atomic/document/word_parse.py:167`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/word_parse.py#L167) |
| function | `def _extract_images(doc, images_output_dir: str) -> List&#91;str&#93;` | Implements `_extract_images`; linked source is authoritative. | [`src/core/modules/atomic/document/word_parse.py:178`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/word_parse.py#L178) |
| function | `def _extract_metadata(doc) -> Dict&#91;str, Any&#93;` | Implements `_extract_metadata`; linked source is authoritative. | [`src/core/modules/atomic/document/word_parse.py:206`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/word_parse.py#L206) |

## `src/core/modules/atomic/document/word_to_pdf.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def word_to_pdf(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Convert Word document to PDF | [`src/core/modules/atomic/document/word_to_pdf.py:92`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/word_to_pdf.py#L92) |
| function | `def _resolve_output_path(params: Dict&#91;str, Any&#93;, input_path: str, ext: str) -> str` | Implements `_resolve_output_path`; linked source is authoritative. | [`src/core/modules/atomic/document/word_to_pdf.py:130`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/word_to_pdf.py#L130) |
| function | `def _validate_input_and_prepare_output(input_path: str, output_path: str, file_type: str)` | Implements `_validate_input_and_prepare_output`; linked source is authoritative. | [`src/core/modules/atomic/document/word_to_pdf.py:138`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/word_to_pdf.py#L138) |
| function | `async def _run_conversion(method: str, input_path: str, output_path: str) -> tuple` | Implements `_run_conversion`; linked source is authoritative. | [`src/core/modules/atomic/document/word_to_pdf.py:146`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/word_to_pdf.py#L146) |
| function | `async def _try_docx2pdf(input_path: str, output_path: str) -> tuple` | Try conversion using docx2pdf | [`src/core/modules/atomic/document/word_to_pdf.py:160`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/word_to_pdf.py#L160) |
| function | `async def _try_libreoffice(input_path: str, output_path: str) -> tuple` | Try conversion using LibreOffice | [`src/core/modules/atomic/document/word_to_pdf.py:174`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/word_to_pdf.py#L174) |
| function | `def _find_libreoffice()` | Implements `_find_libreoffice`; linked source is authoritative. | [`src/core/modules/atomic/document/word_to_pdf.py:206`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/word_to_pdf.py#L206) |
| function | `async def _try_fallback(input_path: str, output_path: str) -> tuple` | Fallback: Extract text and create basic PDF | [`src/core/modules/atomic/document/word_to_pdf.py:220`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/word_to_pdf.py#L220) |
| function | `def _write_paragraph(c, text: str, y: float, y_top: float, width: float, margin: float) -> float` | Implements `_write_paragraph`; linked source is authoritative. | [`src/core/modules/atomic/document/word_to_pdf.py:255`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/word_to_pdf.py#L255) |
| function | `def _which(program: str) -> str` | Find executable in PATH | [`src/core/modules/atomic/document/word_to_pdf.py:279`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/document/word_to_pdf.py#L279) |
