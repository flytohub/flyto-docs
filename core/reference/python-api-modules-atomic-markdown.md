<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Markdown

Source-backed signatures for **10 declarations** across **3 files** in the modules: atomic / markdown area.

## `src/core/modules/atomic/markdown/parse_frontmatter.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _basic_yaml_parse(text: str) -> Dict&#91;str, Any&#93;` | Basic YAML-like parser for simple key: value frontmatter. | [`src/core/modules/atomic/markdown/parse_frontmatter.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/markdown/parse_frontmatter.py#L21) |
| function | `def _parse_value(raw: str) -> Any` | Parse a raw string value into an appropriate Python type. | [`src/core/modules/atomic/markdown/parse_frontmatter.py:71`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/markdown/parse_frontmatter.py#L71) |
| function | `async def markdown_parse_frontmatter(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Extract YAML frontmatter from Markdown content. | [`src/core/modules/atomic/markdown/parse_frontmatter.py:170`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/markdown/parse_frontmatter.py#L170) |

## `src/core/modules/atomic/markdown/to_html.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _basic_markdown_to_html(text: str) -> str` | Basic Markdown to HTML conversion using regex. | [`src/core/modules/atomic/markdown/to_html.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/markdown/to_html.py#L21) |
| method | `def _basic_markdown_to_html._store_code_block(match)` | Implements `_basic_markdown_to_html._store_code_block`; linked source is authoritative. | [`src/core/modules/atomic/markdown/to_html.py:31`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/markdown/to_html.py#L31) |
| function | `async def markdown_to_html(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Convert Markdown text to HTML. | [`src/core/modules/atomic/markdown/to_html.py:189`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/markdown/to_html.py#L189) |

## `src/core/modules/atomic/markdown/toc.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _slugify(text: str) -> str` | Convert heading text to a URL-friendly slug. | [`src/core/modules/atomic/markdown/toc.py:20`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/markdown/toc.py#L20) |
| function | `def _extract_headings(text: str, max_depth: int) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Extract headings from Markdown text. | [`src/core/modules/atomic/markdown/toc.py:36`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/markdown/toc.py#L36) |
| function | `def _format_toc_markdown(headings: List&#91;Dict&#91;str, Any&#93;&#93;) -> str` | Format headings into a Markdown table of contents. | [`src/core/modules/atomic/markdown/toc.py:75`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/markdown/toc.py#L75) |
| function | `async def markdown_toc(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Generate a table of contents from Markdown headings. | [`src/core/modules/atomic/markdown/toc.py:171`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/markdown/toc.py#L171) |
