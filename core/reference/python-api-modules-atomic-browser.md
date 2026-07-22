<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Browser

Source-backed signatures for **213 declarations** across **55 files** in the modules: atomic / browser area.

## `src/core/modules/atomic/browser/_hints.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def extract_element_hints(page) -> dict` | Extract interactive elements from page. | [`src/core/modules/atomic/browser/_hints.py:679`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/_hints.py#L679) |

## `src/core/modules/atomic/browser/challenge.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserChallengeModule(BaseModule)` | Handle anti-bot challenges with auto-wait + human fallback. | [`src/core/modules/atomic/browser/challenge.py:161`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/challenge.py#L161) |
| method | `def BrowserChallengeModule.validate_params(self) -> None` | Implements `BrowserChallengeModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/challenge.py:168`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/challenge.py#L168) |
| method | `async def BrowserChallengeModule.execute(self) -> Any` | Implements `BrowserChallengeModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/challenge.py:178`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/challenge.py#L178) |

## `src/core/modules/atomic/browser/click.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserClickModule(BaseModule)` | Click Element Module | [`src/core/modules/atomic/browser/click.py:135`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/click.py#L135) |
| method | `def BrowserClickModule.validate_params(self) -> None` | Implements `BrowserClickModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/click.py:142`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/click.py#L142) |
| method | `async def BrowserClickModule.execute(self) -> Any` | Implements `BrowserClickModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/click.py:176`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/click.py#L176) |

## `src/core/modules/atomic/browser/close.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserCloseModule(BaseModule)` | Close Browser Module | [`src/core/modules/atomic/browser/close.py:68`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/close.py#L68) |
| method | `def BrowserCloseModule.validate_params(self) -> None` | Implements `BrowserCloseModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/close.py:75`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/close.py#L75) |
| method | `async def BrowserCloseModule.execute(self) -> Any` | Implements `BrowserCloseModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/close.py:78`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/close.py#L78) |

## `src/core/modules/atomic/browser/connect.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserConnectModule(BaseModule)` | Defines the BrowserConnectModule runtime contract. | [`src/core/modules/atomic/browser/connect.py:73`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/connect.py#L73) |
| method | `def BrowserConnectModule.validate_params(self) -> None` | Implements `BrowserConnectModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/connect.py:77`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/connect.py#L77) |
| method | `async def BrowserConnectModule.execute(self) -> Any` | Implements `BrowserConnectModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/connect.py:88`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/connect.py#L88) |

## `src/core/modules/atomic/browser/console.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserConsoleModule(BaseModule)` | Capture Console Module | [`src/core/modules/atomic/browser/console.py:61`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/console.py#L61) |
| method | `def BrowserConsoleModule.validate_params(self) -> None` | Implements `BrowserConsoleModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/console.py:68`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/console.py#L68) |
| method | `async def BrowserConsoleModule.execute(self) -> Any` | Implements `BrowserConsoleModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/console.py:76`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/console.py#L76) |
| method | `def BrowserConsoleModule.execute.handle_console(msg)` | Implements `BrowserConsoleModule.execute.handle_console`; linked source is authoritative. | [`src/core/modules/atomic/browser/console.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/console.py#L84) |

## `src/core/modules/atomic/browser/cookies.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserCookiesModule(BaseModule)` | Manage Cookies Module | [`src/core/modules/atomic/browser/cookies.py:78`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/cookies.py#L78) |
| method | `def BrowserCookiesModule.validate_params(self) -> None` | Implements `BrowserCookiesModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/cookies.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/cookies.py#L85) |
| method | `async def BrowserCookiesModule.execute(self) -> Any` | Implements `BrowserCookiesModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/cookies.py:110`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/cookies.py#L110) |

## `src/core/modules/atomic/browser/cookies_file.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserCookiesFileModule(BaseModule)` | Defines the BrowserCookiesFileModule runtime contract. | [`src/core/modules/atomic/browser/cookies_file.py:70`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/cookies_file.py#L70) |
| method | `def BrowserCookiesFileModule.validate_params(self) -> None` | Implements `BrowserCookiesFileModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/cookies_file.py:74`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/cookies_file.py#L74) |
| method | `async def BrowserCookiesFileModule.execute(self) -> Any` | Implements `BrowserCookiesFileModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/cookies_file.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/cookies_file.py#L84) |
| method | `async def BrowserCookiesFileModule._export(self, context) -> dict` | Implements `BrowserCookiesFileModule._export`; linked source is authoritative. | [`src/core/modules/atomic/browser/cookies_file.py:96`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/cookies_file.py#L96) |
| method | `async def BrowserCookiesFileModule._import(self, context) -> dict` | Implements `BrowserCookiesFileModule._import`; linked source is authoritative. | [`src/core/modules/atomic/browser/cookies_file.py:116`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/cookies_file.py#L116) |

## `src/core/modules/atomic/browser/detect.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserDetectModule(BaseModule)` | Smart Detect Module — multi-strategy element detection with fallbacks. | [`src/core/modules/atomic/browser/detect.py:310`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/detect.py#L310) |
| method | `def BrowserDetectModule.validate_params(self) -> None` | Implements `BrowserDetectModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/detect.py:317`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/detect.py#L317) |
| method | `async def BrowserDetectModule.execute(self) -> Any` | Implements `BrowserDetectModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/detect.py:336`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/detect.py#L336) |
| method | `async def BrowserDetectModule._run_detection(self, page, strategies, all_texts)` | Single detection pass. | [`src/core/modules/atomic/browser/detect.py:419`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/detect.py#L419) |
| method | `async def BrowserDetectModule._search_frames(self, page, strategies, all_texts)` | Search child iframes for the element. | [`src/core/modules/atomic/browser/detect.py:491`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/detect.py#L491) |
| method | `def BrowserDetectModule._build_strategies(self, all_texts: List&#91;str&#93;) -> List&#91;Tuple&#91;str, Any, int&#93;&#93;` | Build ordered list of (name, locator_factory, confidence) tuples. | [`src/core/modules/atomic/browser/detect.py:519`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/detect.py#L519) |
| method | `async def BrowserDetectModule._get_element_info(locator) -> dict` | Extract element metadata from a Playwright locator. | [`src/core/modules/atomic/browser/detect.py:613`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/detect.py#L613) |
| method | `def BrowserDetectModule._role_matches(info: dict, expected_role: str) -> bool` | Check if element info matches expected role. | [`src/core/modules/atomic/browser/detect.py:638`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/detect.py#L638) |

## `src/core/modules/atomic/browser/detect_list.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserDetectListModule(BaseModule)` | Auto-detect repeating list items on any page. | [`src/core/modules/atomic/browser/detect_list.py:392`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/detect_list.py#L392) |
| method | `def BrowserDetectListModule.validate_params(self) -> None` | Implements `BrowserDetectListModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/detect_list.py:399`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/detect_list.py#L399) |
| method | `async def BrowserDetectListModule.execute(self) -> Any` | Implements `BrowserDetectListModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/detect_list.py:405`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/detect_list.py#L405) |

## `src/core/modules/atomic/browser/dialog.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserDialogModule(BaseModule)` | Handle Dialog Module | [`src/core/modules/atomic/browser/dialog.py:71`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/dialog.py#L71) |
| method | `def BrowserDialogModule.validate_params(self) -> None` | Implements `BrowserDialogModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/dialog.py:78`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/dialog.py#L78) |
| method | `async def BrowserDialogModule.execute(self) -> Any` | Implements `BrowserDialogModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/dialog.py:89`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/dialog.py#L89) |
| method | `async def BrowserDialogModule.execute.handle_dialog(dialog)` | Implements `BrowserDialogModule.execute.handle_dialog`; linked source is authoritative. | [`src/core/modules/atomic/browser/dialog.py:97`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/dialog.py#L97) |
| method | `async def BrowserDialogModule._wait_for_dialog(self, dialog_info: dict)` | Implements `BrowserDialogModule._wait_for_dialog`; linked source is authoritative. | [`src/core/modules/atomic/browser/dialog.py:149`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/dialog.py#L149) |

## `src/core/modules/atomic/browser/download.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserDownloadModule(BaseModule)` | Download File Module | [`src/core/modules/atomic/browser/download.py:71`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/download.py#L71) |
| method | `def BrowserDownloadModule.validate_params(self) -> None` | Implements `BrowserDownloadModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/download.py:78`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/download.py#L78) |
| method | `async def BrowserDownloadModule.execute(self) -> Any` | Implements `BrowserDownloadModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/download.py:90`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/download.py#L90) |

## `src/core/modules/atomic/browser/drag.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserDragModule(BaseModule)` | Drag and Drop Module | [`src/core/modules/atomic/browser/drag.py:80`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/drag.py#L80) |
| method | `def BrowserDragModule.validate_params(self) -> None` | Implements `BrowserDragModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/drag.py:87`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/drag.py#L87) |
| method | `async def BrowserDragModule.execute(self) -> Any` | Implements `BrowserDragModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/drag.py:99`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/drag.py#L99) |

## `src/core/modules/atomic/browser/emulate.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserEmulateModule(BaseModule)` | Device Emulation Module | [`src/core/modules/atomic/browser/emulate.py:325`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/emulate.py#L325) |
| method | `def BrowserEmulateModule.validate_params(self) -> None` | Implements `BrowserEmulateModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/emulate.py:332`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/emulate.py#L332) |
| method | `async def BrowserEmulateModule.execute(self) -> Any` | Implements `BrowserEmulateModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/emulate.py:361`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/emulate.py#L361) |
| method | `async def BrowserEmulateModule._emulate_via_cdp(self, browser, settings, current_url)` | Apply device emulation via CDP for persistent context mode. | [`src/core/modules/atomic/browser/emulate.py:435`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/emulate.py#L435) |

## `src/core/modules/atomic/browser/ensure.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserEnsureModule(BaseModule)` | Ensure Browser Module | [`src/core/modules/atomic/browser/ensure.py:93`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/ensure.py#L93) |
| method | `def BrowserEnsureModule.validate_params(self) -> None` | Implements `BrowserEnsureModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/ensure.py:112`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/ensure.py#L112) |
| method | `async def BrowserEnsureModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `BrowserEnsureModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/ensure.py:116`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/ensure.py#L116) |

## `src/core/modules/atomic/browser/evaluate.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserEvaluateModule(BaseModule)` | Execute JavaScript Module | [`src/core/modules/atomic/browser/evaluate.py:68`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/evaluate.py#L68) |
| method | `def BrowserEvaluateModule.validate_params(self) -> None` | Implements `BrowserEvaluateModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/evaluate.py:75`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/evaluate.py#L75) |
| method | `async def BrowserEvaluateModule.execute(self) -> Any` | Implements `BrowserEvaluateModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/evaluate.py:81`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/evaluate.py#L81) |

## `src/core/modules/atomic/browser/extract.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserExtractModule(BaseModule)` | Extract Data Module | [`src/core/modules/atomic/browser/extract.py:64`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/extract.py#L64) |
| method | `def BrowserExtractModule.validate_params(self) -> None` | Implements `BrowserExtractModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/extract.py:71`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/extract.py#L71) |
| method | `async def BrowserExtractModule.execute(self) -> Any` | Implements `BrowserExtractModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/extract.py:86`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/extract.py#L86) |

## `src/core/modules/atomic/browser/extract_nested.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserExtractNestedModule(BaseModule)` | Defines the BrowserExtractNestedModule runtime contract. | [`src/core/modules/atomic/browser/extract_nested.py:183`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/extract_nested.py#L183) |
| method | `def BrowserExtractNestedModule.validate_params(self) -> None` | Implements `BrowserExtractNestedModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/extract_nested.py:187`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/extract_nested.py#L187) |
| method | `async def BrowserExtractNestedModule.execute(self) -> Any` | Implements `BrowserExtractNestedModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/extract_nested.py:196`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/extract_nested.py#L196) |

## `src/core/modules/atomic/browser/find.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserFindModule(BaseModule)` | Find elements in page | [`src/core/modules/atomic/browser/find.py:67`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/find.py#L67) |
| method | `def BrowserFindModule.validate_params(self) -> None` | Implements `BrowserFindModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/find.py:94`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/find.py#L94) |
| method | `async def BrowserFindModule.execute(self) -> Any` | Implements `BrowserFindModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/find.py:101`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/find.py#L101) |

## `src/core/modules/atomic/browser/form.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserFormModule(BaseModule)` | Smart form filling module. | [`src/core/modules/atomic/browser/form.py:159`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/form.py#L159) |
| method | `def BrowserFormModule.validate_params(self) -> None` | Implements `BrowserFormModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/form.py:171`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/form.py#L171) |
| method | `async def BrowserFormModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `BrowserFormModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/form.py:186`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/form.py#L186) |
| method | `def BrowserFormModule._get_field_selector(self, field_name: str) -> str` | Get CSS selector for a field. | [`src/core/modules/atomic/browser/form.py:262`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/form.py#L262) |
| method | `async def BrowserFormModule._fill_field(self, browser, selector: str, value: Any) -> None` | Fill a field based on its type. | [`src/core/modules/atomic/browser/form.py:282`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/form.py#L282) |
| method | `def BrowserFormModule._is_sensitive(self, field_name: str) -> bool` | Check if field contains sensitive data. | [`src/core/modules/atomic/browser/form.py:337`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/form.py#L337) |

## `src/core/modules/atomic/browser/frame.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserFrameModule(BaseModule)` | Switch Frame Module | [`src/core/modules/atomic/browser/frame.py:107`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/frame.py#L107) |
| method | `def BrowserFrameModule.validate_params(self) -> None` | Implements `BrowserFrameModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/frame.py:114`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/frame.py#L114) |
| method | `async def BrowserFrameModule.execute(self) -> Any` | Implements `BrowserFrameModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/frame.py:124`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/frame.py#L124) |

## `src/core/modules/atomic/browser/geolocation.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserGeolocationModule(BaseModule)` | Mock Geolocation Module | [`src/core/modules/atomic/browser/geolocation.py:96`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/geolocation.py#L96) |
| method | `def BrowserGeolocationModule.validate_params(self) -> None` | Implements `BrowserGeolocationModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/geolocation.py:103`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/geolocation.py#L103) |
| method | `async def BrowserGeolocationModule.execute(self) -> Any` | Implements `BrowserGeolocationModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/geolocation.py:121`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/geolocation.py#L121) |

## `src/core/modules/atomic/browser/goto.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserGotoModule(BaseModule)` | Navigate to URL Module | [`src/core/modules/atomic/browser/goto.py:96`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/goto.py#L96) |
| method | `def BrowserGotoModule.validate_params(self) -> None` | Implements `BrowserGotoModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/goto.py:103`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/goto.py#L103) |
| method | `async def BrowserGotoModule.execute(self) -> Any` | Implements `BrowserGotoModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/goto.py:135`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/goto.py#L135) |
| method | `async def BrowserGotoModule._try_www_toggle(self, browser) -> Any` | Try navigating with toggled www prefix. | [`src/core/modules/atomic/browser/goto.py:169`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/goto.py#L169) |
| method | `def BrowserGotoModule._toggle_www(url: str)` | Toggle www prefix. | [`src/core/modules/atomic/browser/goto.py:199`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/goto.py#L199) |

## `src/core/modules/atomic/browser/hover.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserHoverModule(BaseModule)` | Hover Element Module | [`src/core/modules/atomic/browser/hover.py:57`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/hover.py#L57) |
| method | `def BrowserHoverModule.validate_params(self) -> None` | Implements `BrowserHoverModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/hover.py:64`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/hover.py#L64) |
| method | `async def BrowserHoverModule.execute(self) -> Any` | Implements `BrowserHoverModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/hover.py:71`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/hover.py#L71) |

## `src/core/modules/atomic/browser/interact.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserInteractModule(BaseModule)` | Browser Interact Module | [`src/core/modules/atomic/browser/interact.py:133`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/interact.py#L133) |
| method | `def BrowserInteractModule.validate_params(self) -> None` | Implements `BrowserInteractModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/interact.py:149`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/interact.py#L149) |
| method | `async def BrowserInteractModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `BrowserInteractModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/interact.py:154`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/interact.py#L154) |
| method | `async def BrowserInteractModule._execute_action(self, page, browser, action: str, selector: str, value: str) -> Dict&#91;str, Any&#93;` | Execute the user's chosen action on the browser page. | [`src/core/modules/atomic/browser/interact.py:325`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/interact.py#L325) |

## `src/core/modules/atomic/browser/launch.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserLaunchModule(BaseModule)` | Launch Browser Module — single browser, single responsibility. | [`src/core/modules/atomic/browser/launch.py:177`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/launch.py#L177) |
| method | `def BrowserLaunchModule.validate_params(self) -> None` | Implements `BrowserLaunchModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/launch.py:184`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/launch.py#L184) |
| method | `async def BrowserLaunchModule.execute(self) -> Any` | Implements `BrowserLaunchModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/launch.py:207`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/launch.py#L207) |

## `src/core/modules/atomic/browser/login.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserLoginModule(BaseModule)` | Defines the BrowserLoginModule runtime contract. | [`src/core/modules/atomic/browser/login.py:140`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/login.py#L140) |
| method | `def BrowserLoginModule.validate_params(self) -> None` | Implements `BrowserLoginModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/login.py:144`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/login.py#L144) |
| method | `async def BrowserLoginModule.execute(self) -> Any` | Implements `BrowserLoginModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/login.py:157`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/login.py#L157) |

## `src/core/modules/atomic/browser/navigation.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserNavigationModule(BaseModule)` | Page Navigation Module | [`src/core/modules/atomic/browser/navigation.py:78`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/navigation.py#L78) |
| method | `def BrowserNavigationModule.validate_params(self) -> None` | Implements `BrowserNavigationModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/navigation.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/navigation.py#L85) |
| method | `async def BrowserNavigationModule.execute(self) -> Any` | Implements `BrowserNavigationModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/navigation.py:96`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/navigation.py#L96) |

## `src/core/modules/atomic/browser/network.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserNetworkModule(BaseModule)` | Network Monitor Module | [`src/core/modules/atomic/browser/network.py:129`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/network.py#L129) |
| method | `def BrowserNetworkModule.validate_params(self) -> None` | Implements `BrowserNetworkModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/network.py:136`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/network.py#L136) |
| method | `def BrowserNetworkModule._matches_filter(self, request) -> bool` | Check if request matches filters | [`src/core/modules/atomic/browser/network.py:157`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/network.py#L157) |
| method | `def BrowserNetworkModule._safe_url(self, url: str) -> str` | Implements `BrowserNetworkModule._safe_url`; linked source is authoritative. | [`src/core/modules/atomic/browser/network.py:165`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/network.py#L165) |
| method | `async def BrowserNetworkModule.execute(self) -> Any` | Implements `BrowserNetworkModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/network.py:171`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/network.py#L171) |

## `src/core/modules/atomic/browser/pages.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserPagesModule(BaseModule)` | List Pages Module | [`src/core/modules/atomic/browser/pages.py:99`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pages.py#L99) |
| method | `def BrowserPagesModule.validate_params(self) -> None` | Implements `BrowserPagesModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/pages.py:106`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pages.py#L106) |
| method | `async def BrowserPagesModule.execute(self) -> Any` | Implements `BrowserPagesModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/pages.py:110`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pages.py#L110) |

## `src/core/modules/atomic/browser/pagination.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserPaginationModule(BaseModule)` | Auto-pagination and data extraction module. | [`src/core/modules/atomic/browser/pagination.py:267`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pagination.py#L267) |
| method | `def BrowserPaginationModule.validate_params(self) -> None` | Implements `BrowserPaginationModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/pagination.py:290`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pagination.py#L290) |
| method | `async def BrowserPaginationModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `BrowserPaginationModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/pagination.py:313`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pagination.py#L313) |
| method | `async def BrowserPaginationModule._extract_with_retry(self, browser)` | Extract items with retry on failure. | [`src/core/modules/atomic/browser/pagination.py:463`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pagination.py#L463) |
| method | `async def BrowserPaginationModule._extract_items(self, browser) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Implements `BrowserPaginationModule._extract_items`; linked source is authoritative. | [`src/core/modules/atomic/browser/pagination.py:490`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pagination.py#L490) |
| method | `async def BrowserPaginationModule._extract_with_fields(self, browser) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Implements `BrowserPaginationModule._extract_with_fields`; linked source is authoritative. | [`src/core/modules/atomic/browser/pagination.py:496`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pagination.py#L496) |
| method | `async def BrowserPaginationModule._extract_raw(self, browser) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Implements `BrowserPaginationModule._extract_raw`; linked source is authoritative. | [`src/core/modules/atomic/browser/pagination.py:532`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pagination.py#L532) |
| method | `async def BrowserPaginationModule._navigate_next(self, browser) -> bool` | Implements `BrowserPaginationModule._navigate_next`; linked source is authoritative. | [`src/core/modules/atomic/browser/pagination.py:547`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pagination.py#L547) |
| method | `async def BrowserPaginationModule._click_next_button(self, browser) -> bool` | Implements `BrowserPaginationModule._click_next_button`; linked source is authoritative. | [`src/core/modules/atomic/browser/pagination.py:558`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pagination.py#L558) |
| method | `async def BrowserPaginationModule._infinite_scroll(self, browser) -> bool` | Implements `BrowserPaginationModule._infinite_scroll`; linked source is authoritative. | [`src/core/modules/atomic/browser/pagination.py:583`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pagination.py#L583) |
| method | `async def BrowserPaginationModule._click_load_more(self, browser) -> bool` | Implements `BrowserPaginationModule._click_load_more`; linked source is authoritative. | [`src/core/modules/atomic/browser/pagination.py:590`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pagination.py#L590) |
| method | `async def BrowserPaginationModule._click_next_page_number(self, browser) -> bool` | Implements `BrowserPaginationModule._click_next_page_number`; linked source is authoritative. | [`src/core/modules/atomic/browser/pagination.py:606`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pagination.py#L606) |

## `src/core/modules/atomic/browser/pdf.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserPdfModule(BaseModule)` | Generate PDF Module | [`src/core/modules/atomic/browser/pdf.py:89`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pdf.py#L89) |
| method | `def BrowserPdfModule.validate_params(self) -> None` | Implements `BrowserPdfModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/pdf.py:96`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pdf.py#L96) |
| method | `async def BrowserPdfModule.execute(self) -> Any` | Implements `BrowserPdfModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/pdf.py:118`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pdf.py#L118) |

## `src/core/modules/atomic/browser/performance.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserPerformanceModule(BaseModule)` | Performance Metrics Module for Web Vitals collection | [`src/core/modules/atomic/browser/performance.py:274`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/performance.py#L274) |
| method | `def BrowserPerformanceModule.validate_params(self) -> None` | Implements `BrowserPerformanceModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/performance.py:290`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/performance.py#L290) |
| method | `async def BrowserPerformanceModule.execute(self) -> Any` | Implements `BrowserPerformanceModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/performance.py:304`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/performance.py#L304) |
| method | `def BrowserPerformanceModule._calculate_ratings(self, metrics: Dict&#91;str, Any&#93;) -> Dict&#91;str, str&#93;` | Calculate ratings based on Google's Web Vitals thresholds. | [`src/core/modules/atomic/browser/performance.py:374`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/performance.py#L374) |

## `src/core/modules/atomic/browser/pool.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserPoolModule(BaseModule)` | Defines the BrowserPoolModule runtime contract. | [`src/core/modules/atomic/browser/pool.py:81`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pool.py#L81) |
| method | `def BrowserPoolModule.validate_params(self) -> None` | Implements `BrowserPoolModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/pool.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pool.py#L85) |
| method | `async def BrowserPoolModule.execute(self) -> Any` | Implements `BrowserPoolModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/pool.py:91`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pool.py#L91) |
| method | `async def BrowserPoolModule._create(self) -> dict` | Implements `BrowserPoolModule._create`; linked source is authoritative. | [`src/core/modules/atomic/browser/pool.py:107`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pool.py#L107) |
| method | `def BrowserPoolModule._switch(self) -> dict` | Implements `BrowserPoolModule._switch`; linked source is authoritative. | [`src/core/modules/atomic/browser/pool.py:134`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pool.py#L134) |
| method | `async def BrowserPoolModule._close(self) -> dict` | Implements `BrowserPoolModule._close`; linked source is authoritative. | [`src/core/modules/atomic/browser/pool.py:152`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pool.py#L152) |
| method | `def BrowserPoolModule._list(self) -> dict` | Implements `BrowserPoolModule._list`; linked source is authoritative. | [`src/core/modules/atomic/browser/pool.py:175`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pool.py#L175) |
| method | `async def BrowserPoolModule._close_all(self) -> dict` | Implements `BrowserPoolModule._close_all`; linked source is authoritative. | [`src/core/modules/atomic/browser/pool.py:184`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/pool.py#L184) |

## `src/core/modules/atomic/browser/press.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserPressModule(BaseModule)` | Press Key Module | [`src/core/modules/atomic/browser/press.py:57`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/press.py#L57) |
| method | `def BrowserPressModule.validate_params(self) -> None` | Implements `BrowserPressModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/press.py:64`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/press.py#L64) |
| method | `async def BrowserPressModule.execute(self) -> Any` | Implements `BrowserPressModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/press.py:69`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/press.py#L69) |

## `src/core/modules/atomic/browser/proxy_rotate.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserProxyRotateModule(BaseModule)` | Defines the BrowserProxyRotateModule runtime contract. | [`src/core/modules/atomic/browser/proxy_rotate.py:96`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/proxy_rotate.py#L96) |
| method | `def BrowserProxyRotateModule.validate_params(self) -> None` | Implements `BrowserProxyRotateModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/proxy_rotate.py:100`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/proxy_rotate.py#L100) |
| method | `async def BrowserProxyRotateModule.execute(self) -> Any` | Implements `BrowserProxyRotateModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/proxy_rotate.py:109`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/proxy_rotate.py#L109) |
| method | `def BrowserProxyRotateModule._get_pool(self)` | Implements `BrowserProxyRotateModule._get_pool`; linked source is authoritative. | [`src/core/modules/atomic/browser/proxy_rotate.py:191`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/proxy_rotate.py#L191) |
| method | `async def BrowserProxyRotateModule._fetch_from_provider(self) -> list` | Fetch proxy list from a provider API (Bright Data, Oxylabs, SmartProxy, etc.). | [`src/core/modules/atomic/browser/proxy_rotate.py:197`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/proxy_rotate.py#L197) |
| method | `def BrowserProxyRotateModule._status(self, action: str, current_proxy: str='') -> dict` | Implements `BrowserProxyRotateModule._status`; linked source is authoritative. | [`src/core/modules/atomic/browser/proxy_rotate.py:244`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/proxy_rotate.py#L244) |

## `src/core/modules/atomic/browser/readability.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserReadabilityModule(BaseModule)` | Smart article extraction from any webpage. | [`src/core/modules/atomic/browser/readability.py:515`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/readability.py#L515) |
| method | `def BrowserReadabilityModule.validate_params(self) -> None` | Implements `BrowserReadabilityModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/readability.py:522`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/readability.py#L522) |
| method | `async def BrowserReadabilityModule.execute(self) -> Any` | Implements `BrowserReadabilityModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/readability.py:532`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/readability.py#L532) |
| method | `async def BrowserReadabilityModule._ai_extract(self, page, heuristic_result: dict) -> dict` | Fall back to LLM when heuristic extraction fails. | [`src/core/modules/atomic/browser/readability.py:570`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/readability.py#L570) |

## `src/core/modules/atomic/browser/record.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserRecordModule(BaseModule)` | Record Actions Module | [`src/core/modules/atomic/browser/record.py:91`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/record.py#L91) |
| method | `def BrowserRecordModule.validate_params(self) -> None` | Implements `BrowserRecordModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/record.py:102`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/record.py#L102) |
| method | `async def BrowserRecordModule.execute(self) -> Any` | Implements `BrowserRecordModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/record.py:113`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/record.py#L113) |
| method | `def BrowserRecordModule._generate_workflow(self, recording: List&#91;Dict&#91;str, Any&#93;&#93;) -> str` | Generate workflow from recorded actions | [`src/core/modules/atomic/browser/record.py:249`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/record.py#L249) |
| method | `async def BrowserRecordModule._get_selector(self, element) -> str` | Get unique selector for element | [`src/core/modules/atomic/browser/record.py:270`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/record.py#L270) |

## `src/core/modules/atomic/browser/release.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserReleaseModule(BaseModule)` | Release Browser Module | [`src/core/modules/atomic/browser/release.py:102`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/release.py#L102) |
| method | `def BrowserReleaseModule.validate_params(self) -> None` | Implements `BrowserReleaseModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/release.py:123`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/release.py#L123) |
| method | `async def BrowserReleaseModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `BrowserReleaseModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/release.py:126`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/release.py#L126) |

## `src/core/modules/atomic/browser/response.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserResponseModule(BaseModule)` | Defines the BrowserResponseModule runtime contract. | [`src/core/modules/atomic/browser/response.py:72`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/response.py#L72) |
| method | `def BrowserResponseModule.validate_params(self) -> None` | Implements `BrowserResponseModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/response.py:76`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/response.py#L76) |
| method | `async def BrowserResponseModule.execute(self) -> Any` | Implements `BrowserResponseModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/response.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/response.py#L84) |
| method | `async def BrowserResponseModule.execute.handle_response(response)` | Implements `BrowserResponseModule.execute.handle_response`; linked source is authoritative. | [`src/core/modules/atomic/browser/response.py:93`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/response.py#L93) |

## `src/core/modules/atomic/browser/robots.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserRobotsModule(BaseModule)` | Defines the BrowserRobotsModule runtime contract. | [`src/core/modules/atomic/browser/robots.py:156`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/robots.py#L156) |
| method | `def BrowserRobotsModule.validate_params(self) -> None` | Implements `BrowserRobotsModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/robots.py:160`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/robots.py#L160) |
| method | `async def BrowserRobotsModule.execute(self) -> Any` | Implements `BrowserRobotsModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/robots.py:164`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/robots.py#L164) |

## `src/core/modules/atomic/browser/screenshot.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserScreenshotModule(BaseModule)` | Screenshot Module | [`src/core/modules/atomic/browser/screenshot.py:52`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/screenshot.py#L52) |
| method | `def BrowserScreenshotModule.validate_params(self) -> None` | Implements `BrowserScreenshotModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/screenshot.py:59`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/screenshot.py#L59) |
| method | `async def BrowserScreenshotModule.execute(self) -> Any` | Implements `BrowserScreenshotModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/screenshot.py:65`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/screenshot.py#L65) |

## `src/core/modules/atomic/browser/scroll.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserScrollModule(BaseModule)` | Scroll Page Module | [`src/core/modules/atomic/browser/scroll.py:63`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/scroll.py#L63) |
| method | `def BrowserScrollModule.validate_params(self) -> None` | Implements `BrowserScrollModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/scroll.py:70`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/scroll.py#L70) |
| method | `async def BrowserScrollModule.execute(self) -> Any` | Implements `BrowserScrollModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/scroll.py:81`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/scroll.py#L81) |

## `src/core/modules/atomic/browser/select.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserSelectModule(BaseModule)` | Select Option Module | [`src/core/modules/atomic/browser/select.py:101`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/select.py#L101) |
| method | `def BrowserSelectModule.validate_params(self) -> None` | Implements `BrowserSelectModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/select.py:108`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/select.py#L108) |
| method | `async def BrowserSelectModule._select_native(self, page) -> List&#91;str&#93;` | Select from a native &lt;select&gt; element using Playwright select_option(). | [`src/core/modules/atomic/browser/select.py:142`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/select.py#L142) |
| method | `async def BrowserSelectModule._select_custom(self, page, browser) -> List&#91;str&#93;` | Select from a custom (non-native) dropdown via click-based interaction. | [`src/core/modules/atomic/browser/select.py:168`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/select.py#L168) |
| method | `async def BrowserSelectModule._select_custom._find_by_label(target)` | Find option by label text. | [`src/core/modules/atomic/browser/select.py:195`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/select.py#L195) |
| method | `async def BrowserSelectModule._select_custom._find_by_value(target)` | Find option by value attribute. | [`src/core/modules/atomic/browser/select.py:207`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/select.py#L207) |
| method | `async def BrowserSelectModule.execute(self) -> Any` | Implements `BrowserSelectModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/select.py:259`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/select.py#L259) |

## `src/core/modules/atomic/browser/sitemap.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserSitemapModule(BaseModule)` | Defines the BrowserSitemapModule runtime contract. | [`src/core/modules/atomic/browser/sitemap.py:164`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/sitemap.py#L164) |
| method | `def BrowserSitemapModule.validate_params(self) -> None` | Implements `BrowserSitemapModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/sitemap.py:168`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/sitemap.py#L168) |
| method | `async def BrowserSitemapModule.execute(self) -> Any` | Implements `BrowserSitemapModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/sitemap.py:174`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/sitemap.py#L174) |

## `src/core/modules/atomic/browser/snapshot.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserSnapshotModule(BaseModule)` | DOM Snapshot Module | [`src/core/modules/atomic/browser/snapshot.py:116`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/snapshot.py#L116) |
| method | `def BrowserSnapshotModule.validate_params(self) -> None` | Implements `BrowserSnapshotModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/snapshot.py:123`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/snapshot.py#L123) |
| method | `async def BrowserSnapshotModule.execute(self) -> Any` | Implements `BrowserSnapshotModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/snapshot.py:131`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/snapshot.py#L131) |
| method | `async def BrowserSnapshotModule._capture_html(self, page) -> str` | Capture HTML content | [`src/core/modules/atomic/browser/snapshot.py:202`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/snapshot.py#L202) |
| method | `async def BrowserSnapshotModule._capture_mhtml(self, page) -> bytes` | Capture MHTML archive using CDP | [`src/core/modules/atomic/browser/snapshot.py:214`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/snapshot.py#L214) |
| method | `async def BrowserSnapshotModule._capture_text(self, page) -> str` | Capture text content | [`src/core/modules/atomic/browser/snapshot.py:224`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/snapshot.py#L224) |

## `src/core/modules/atomic/browser/storage.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserStorageModule(BaseModule)` | Browser Storage Module | [`src/core/modules/atomic/browser/storage.py:71`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/storage.py#L71) |
| method | `def BrowserStorageModule.validate_params(self) -> None` | Implements `BrowserStorageModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/storage.py:78`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/storage.py#L78) |
| method | `async def BrowserStorageModule.execute(self) -> Any` | Implements `BrowserStorageModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/storage.py:98`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/storage.py#L98) |

## `src/core/modules/atomic/browser/tab.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserTabModule(BaseModule)` | Manage Tabs Module | [`src/core/modules/atomic/browser/tab.py:94`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/tab.py#L94) |
| method | `def BrowserTabModule.validate_params(self) -> None` | Implements `BrowserTabModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/tab.py:101`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/tab.py#L101) |
| method | `async def BrowserTabModule.execute(self) -> Any` | Implements `BrowserTabModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/tab.py:115`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/tab.py#L115) |

## `src/core/modules/atomic/browser/table.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserTableModule(BaseModule)` | Defines the BrowserTableModule runtime contract. | [`src/core/modules/atomic/browser/table.py:155`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/table.py#L155) |
| method | `def BrowserTableModule.validate_params(self) -> None` | Implements `BrowserTableModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/table.py:159`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/table.py#L159) |
| method | `async def BrowserTableModule.execute(self) -> Any` | Implements `BrowserTableModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/table.py:165`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/table.py#L165) |

## `src/core/modules/atomic/browser/throttle.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserThrottleModule(BaseModule)` | Defines the BrowserThrottleModule runtime contract. | [`src/core/modules/atomic/browser/throttle.py:89`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/throttle.py#L89) |
| method | `def BrowserThrottleModule.validate_params(self) -> None` | Implements `BrowserThrottleModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/throttle.py:93`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/throttle.py#L93) |
| method | `async def BrowserThrottleModule.execute(self) -> Any` | Implements `BrowserThrottleModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/throttle.py:100`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/throttle.py#L100) |

## `src/core/modules/atomic/browser/trace.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserTraceModule(BaseModule)` | Performance Trace Module using Chrome DevTools Protocol | [`src/core/modules/atomic/browser/trace.py:121`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/trace.py#L121) |
| method | `def BrowserTraceModule.validate_params(self) -> None` | Implements `BrowserTraceModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/trace.py:128`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/trace.py#L128) |
| method | `async def BrowserTraceModule.execute(self) -> Any` | Implements `BrowserTraceModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/trace.py:140`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/trace.py#L140) |
| method | `async def BrowserTraceModule._start_tracing(self, browser) -> Dict&#91;str, Any&#93;` | Start performance tracing | [`src/core/modules/atomic/browser/trace.py:158`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/trace.py#L158) |
| method | `async def BrowserTraceModule._stop_tracing(self, browser) -> Dict&#91;str, Any&#93;` | Stop performance tracing and optionally save to file | [`src/core/modules/atomic/browser/trace.py:203`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/trace.py#L203) |

## `src/core/modules/atomic/browser/type.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserTypeModule(BaseModule)` | Type Text Module | [`src/core/modules/atomic/browser/type.py:152`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/type.py#L152) |
| method | `def BrowserTypeModule.validate_params(self) -> None` | Implements `BrowserTypeModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/type.py:159`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/type.py#L159) |
| method | `async def BrowserTypeModule.execute(self) -> Any` | Implements `BrowserTypeModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/type.py:214`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/type.py#L214) |

## `src/core/modules/atomic/browser/upload.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserUploadModule(BaseModule)` | Upload File Module | [`src/core/modules/atomic/browser/upload.py:69`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/upload.py#L69) |
| method | `def BrowserUploadModule.validate_params(self) -> None` | Implements `BrowserUploadModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/upload.py:76`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/upload.py#L76) |
| method | `async def BrowserUploadModule.execute(self) -> Any` | Implements `BrowserUploadModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/upload.py:93`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/upload.py#L93) |

## `src/core/modules/atomic/browser/viewport.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserViewportModule(BaseModule)` | Resize Viewport Module | [`src/core/modules/atomic/browser/viewport.py:100`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/viewport.py#L100) |
| method | `def BrowserViewportModule.validate_params(self) -> None` | Implements `BrowserViewportModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/viewport.py:107`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/viewport.py#L107) |
| method | `async def BrowserViewportModule.execute(self) -> Any` | Implements `BrowserViewportModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/viewport.py:122`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/viewport.py#L122) |

## `src/core/modules/atomic/browser/wait.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BrowserWaitModule(BaseModule)` | Wait Module | [`src/core/modules/atomic/browser/wait.py:87`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/wait.py#L87) |
| method | `def BrowserWaitModule.validate_params(self) -> None` | Implements `BrowserWaitModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/browser/wait.py:94`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/wait.py#L94) |
| method | `async def BrowserWaitModule.execute(self) -> Any` | Implements `BrowserWaitModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/browser/wait.py:110`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/browser/wait.py#L110) |
