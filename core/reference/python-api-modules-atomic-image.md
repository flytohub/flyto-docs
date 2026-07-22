<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Image

Source-backed signatures for **43 declarations** across **9 files** in the modules: atomic / image area.

## `src/core/modules/atomic/image/compress.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _build_compress_kwargs(ext: str, output_format, quality: int, optimize: bool) -> dict` | Implements `_build_compress_kwargs`; linked source is authoritative. | [`src/core/modules/atomic/image/compress.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/compress.py#L21) |
| function | `def _build_compress_result(output_path, original_size, compressed_size)` | Implements `_build_compress_result`; linked source is authoritative. | [`src/core/modules/atomic/image/compress.py:33`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/compress.py#L33) |
| function | `def _resolve_compress_output(input_path, output_path, output_format)` | Implements `_resolve_compress_output`; linked source is authoritative. | [`src/core/modules/atomic/image/compress.py:46`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/compress.py#L46) |
| function | `def _compress_to_target_size(img, output_path, save_kwargs, ext, output_format, quality, max_size_kb)` | Implements `_compress_to_target_size`; linked source is authoritative. | [`src/core/modules/atomic/image/compress.py:55`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/compress.py#L55) |
| function | `async def image_compress(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Compress image to reduce file size | [`src/core/modules/atomic/image/compress.py:151`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/compress.py#L151) |
| method | `def image_compress._compress()` | Implements `image_compress._compress`; linked source is authoritative. | [`src/core/modules/atomic/image/compress.py:178`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/compress.py#L178) |

## `src/core/modules/atomic/image/convert.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_format_from_extension(path: str) -> Optional&#91;str&#93;` | Get format name from file extension | [`src/core/modules/atomic/image/convert.py:38`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/convert.py#L38) |
| function | `def _resolve_convert_paths(input_path: str, output_path: Optional&#91;str&#93;, output_format: str)` | Implements `_resolve_convert_paths`; linked source is authoritative. | [`src/core/modules/atomic/image/convert.py:47`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/convert.py#L47) |
| function | `def _apply_resize(img, resize)` | Implements `_apply_resize`; linked source is authoritative. | [`src/core/modules/atomic/image/convert.py:61`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/convert.py#L61) |
| function | `def _build_save_kwargs(output_format: str, quality: int) -> dict` | Implements `_build_save_kwargs`; linked source is authoritative. | [`src/core/modules/atomic/image/convert.py:83`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/convert.py#L83) |
| function | `async def image_convert(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Convert image to different format | [`src/core/modules/atomic/image/convert.py:164`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/convert.py#L164) |

## `src/core/modules/atomic/image/crop.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _validate_crop_params(input_path, output_path, left, top, right, bottom)` | Implements `_validate_crop_params`; linked source is authoritative. | [`src/core/modules/atomic/image/crop.py:23`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/crop.py#L23) |
| function | `async def image_crop(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Crop image to specified region. | [`src/core/modules/atomic/image/crop.py:175`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/crop.py#L175) |
| method | `def image_crop._crop()` | Implements `image_crop._crop`; linked source is authoritative. | [`src/core/modules/atomic/image/crop.py:198`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/crop.py#L198) |

## `src/core/modules/atomic/image/download.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _validate_and_prepare_download(url: str, parsed, output_path, output_dir, headers)` | Implements `_validate_and_prepare_download`; linked source is authoritative. | [`src/core/modules/atomic/image/download.py:30`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/download.py#L30) |
| function | `async def image_download(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Download image from URL | [`src/core/modules/atomic/image/download.py:118`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/download.py#L118) |

## `src/core/modules/atomic/image/ocr.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _ocr_text(img, language, custom_config)` | Implements `_ocr_text`; linked source is authoritative. | [`src/core/modules/atomic/image/ocr.py:22`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/ocr.py#L22) |
| function | `def _ocr_data(img, language, custom_config)` | Implements `_ocr_data`; linked source is authoritative. | [`src/core/modules/atomic/image/ocr.py:40`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/ocr.py#L40) |
| function | `def _ocr_boxes(img, language, custom_config)` | Implements `_ocr_boxes`; linked source is authoritative. | [`src/core/modules/atomic/image/ocr.py:67`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/ocr.py#L67) |
| function | `async def image_ocr(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Extract text from images using OCR. | [`src/core/modules/atomic/image/ocr.py:186`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/ocr.py#L186) |
| method | `def image_ocr._ocr()` | Implements `image_ocr._ocr`; linked source is authoritative. | [`src/core/modules/atomic/image/ocr.py:200`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/ocr.py#L200) |

## `src/core/modules/atomic/image/qrcode_generate.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _clean_param(val, default)` | Implements `_clean_param`; linked source is authoritative. | [`src/core/modules/atomic/image/qrcode_generate.py:20`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/qrcode_generate.py#L20) |
| function | `def _parse_qr_params(params)` | Implements `_parse_qr_params`; linked source is authoritative. | [`src/core/modules/atomic/image/qrcode_generate.py:26`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/qrcode_generate.py#L26) |
| function | `def _create_qr_code(qrcode, p, ec_map, border)` | Implements `_create_qr_code`; linked source is authoritative. | [`src/core/modules/atomic/image/qrcode_generate.py:52`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/qrcode_generate.py#L52) |
| function | `def _generate_svg_qr(qr, output_path, color, background, border)` | Implements `_generate_svg_qr`; linked source is authoritative. | [`src/core/modules/atomic/image/qrcode_generate.py:75`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/qrcode_generate.py#L75) |
| function | `def _generate_png_qr(qr, output_path, color, background, size, logo_path)` | Implements `_generate_png_qr`; linked source is authoritative. | [`src/core/modules/atomic/image/qrcode_generate.py:100`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/qrcode_generate.py#L100) |
| function | `async def qrcode_generate(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Generate QR code image | [`src/core/modules/atomic/image/qrcode_generate.py:231`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/qrcode_generate.py#L231) |

## `src/core/modules/atomic/image/resize.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _compute_new_dimensions(original_width: int, original_height: int, width: Optional&#91;int&#93;, height: Optional&#91;int&#93;, scale: Optional&#91;float&#93;, maintain_aspect: bool) -> Tuple&#91;int, int&#93;` | Implements `_compute_new_dimensions`; linked source is authoritative. | [`src/core/modules/atomic/image/resize.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/resize.py#L21) |
| function | `def _validate_resize_params(input_path, width, height, scale)` | Implements `_validate_resize_params`; linked source is authoritative. | [`src/core/modules/atomic/image/resize.py:40`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/resize.py#L40) |
| function | `def _get_resampling(Image, algorithm: str)` | Implements `_get_resampling`; linked source is authoritative. | [`src/core/modules/atomic/image/resize.py:47`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/resize.py#L47) |
| function | `async def image_resize(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Resize image to specified dimensions | [`src/core/modules/atomic/image/resize.py:132`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/resize.py#L132) |
| method | `def image_resize._resize()` | Implements `image_resize._resize`; linked source is authoritative. | [`src/core/modules/atomic/image/resize.py:161`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/resize.py#L161) |

## `src/core/modules/atomic/image/rotate.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _validate_rotate_params(input_path, output_path, angle)` | Implements `_validate_rotate_params`; linked source is authoritative. | [`src/core/modules/atomic/image/rotate.py:23`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/rotate.py#L23) |
| function | `def _hex_to_rgb(hex_color: str) -> tuple` | Implements `_hex_to_rgb`; linked source is authoritative. | [`src/core/modules/atomic/image/rotate.py:34`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/rotate.py#L34) |
| function | `async def image_rotate(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Rotate image by specified angle. | [`src/core/modules/atomic/image/rotate.py:163`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/rotate.py#L163) |
| method | `def image_rotate._rotate()` | Implements `image_rotate._rotate`; linked source is authoritative. | [`src/core/modules/atomic/image/rotate.py:185`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/rotate.py#L185) |

## `src/core/modules/atomic/image/watermark.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _validate_watermark_params(input_path, output_path, text, watermark_image_path)` | Implements `_validate_watermark_params`; linked source is authoritative. | [`src/core/modules/atomic/image/watermark.py:23`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/watermark.py#L23) |
| function | `def _calculate_position(base_size, overlay_size, pos_name)` | Implements `_calculate_position`; linked source is authoritative. | [`src/core/modules/atomic/image/watermark.py:34`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/watermark.py#L34) |
| function | `def _apply_image_watermark(base_img, watermark_image_path, position, opacity)` | Implements `_apply_image_watermark`; linked source is authoritative. | [`src/core/modules/atomic/image/watermark.py:48`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/watermark.py#L48) |
| function | `def _save_watermark_result(result, output_path)` | Implements `_save_watermark_result`; linked source is authoritative. | [`src/core/modules/atomic/image/watermark.py:62`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/watermark.py#L62) |
| function | `def _apply_text_watermark(base_img, text, position, opacity, font_size)` | Implements `_apply_text_watermark`; linked source is authoritative. | [`src/core/modules/atomic/image/watermark.py:70`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/watermark.py#L70) |
| function | `async def image_watermark(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Add text or image watermark to an image. | [`src/core/modules/atomic/image/watermark.py:231`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/watermark.py#L231) |
| method | `def image_watermark._apply_watermark()` | Implements `image_watermark._apply_watermark`; linked source is authoritative. | [`src/core/modules/atomic/image/watermark.py:256`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/image/watermark.py#L256) |
