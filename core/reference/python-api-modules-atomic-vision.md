<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Vision

Source-backed signatures for **7 declarations** across **2 files** in the modules: atomic / vision area.

## `src/core/modules/atomic/vision/analyze.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def vision_analyze(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Analyze image using OpenAI Vision API | [`src/core/modules/atomic/vision/analyze.py:126`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/vision/analyze.py#L126) |
| function | `async def _prepare_image(image_input: str, detail: str) -> Dict&#91;str, Any&#93;` | Prepare image content for OpenAI API | [`src/core/modules/atomic/vision/analyze.py:248`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/vision/analyze.py#L248) |
| function | `def _build_system_prompt(analysis_type: str, output_format: str, context: str) -> str` | Build system prompt based on analysis type | [`src/core/modules/atomic/vision/analyze.py:310`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/vision/analyze.py#L310) |
| function | `def _parse_structured_output(text: str) -> Optional&#91;Dict&#91;str, Any&#93;&#93;` | Try to parse structured data from the response | [`src/core/modules/atomic/vision/analyze.py:370`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/vision/analyze.py#L370) |

## `src/core/modules/atomic/vision/compare.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def vision_compare(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Compare two images using AI vision | [`src/core/modules/atomic/vision/compare.py:120`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/vision/compare.py#L120) |
| function | `async def _load_image(image_path: str) -> Dict&#91;str, Any&#93;` | Load image and prepare for API | [`src/core/modules/atomic/vision/compare.py:275`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/vision/compare.py#L275) |
| function | `def _build_comparison_prompt(comp_type: str, focus: list, ignore: list, threshold: int) -> str` | Build comparison prompt | [`src/core/modules/atomic/vision/compare.py:313`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/vision/compare.py#L313) |
