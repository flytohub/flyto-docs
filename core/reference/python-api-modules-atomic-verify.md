<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Verify

Source-backed signatures for **84 declarations** across **9 files** in the modules: atomic / verify area.

## `src/core/modules/atomic/verify/annotate.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def hex_to_rgb(hex_color: str) -> tuple` | Convert hex color string to RGB tuple. | [`src/core/modules/atomic/verify/annotate.py:34`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/annotate.py#L34) |
| function | `def draw_annotations(image_path: str, annotations: List&#91;Dict&#93;, output_path: str) -> Dict&#91;str, Any&#93;` | Draw bounding boxes and labels on an image. | [`src/core/modules/atomic/verify/annotate.py:42`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/annotate.py#L42) |
| function | `def _get_font(size: int)` | Try to load a font, fall back to default. | [`src/core/modules/atomic/verify/annotate.py:111`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/annotate.py#L111) |
| class | `class VerifyAnnotateModule(BaseModule)` | Draw labeled bounding boxes on screenshots. | [`src/core/modules/atomic/verify/annotate.py:177`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/annotate.py#L177) |
| method | `def VerifyAnnotateModule.validate_params(self) -> None` | Implements `VerifyAnnotateModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/verify/annotate.py:183`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/annotate.py#L183) |
| method | `async def VerifyAnnotateModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `VerifyAnnotateModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/verify/annotate.py:198`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/annotate.py#L198) |

## `src/core/modules/atomic/verify/capture.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class CapturedElement` | Captured element with computed styles. | [`src/core/modules/atomic/verify/capture.py:17`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/capture.py#L17) |
| method | `def CapturedElement.to_dict(self) -> Dict&#91;str, Any&#93;` | Implements `CapturedElement.to_dict`; linked source is authoritative. | [`src/core/modules/atomic/verify/capture.py:63`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/capture.py#L63) |
| class | `class VerifyCaptureModule(BaseModule)` | Capture computed styles from browser element. | [`src/core/modules/atomic/verify/capture.py:168`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/capture.py#L168) |
| method | `def VerifyCaptureModule.validate_params(self) -> None` | Implements `VerifyCaptureModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/verify/capture.py:174`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/capture.py#L174) |
| method | `async def VerifyCaptureModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `VerifyCaptureModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/verify/capture.py:186`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/capture.py#L186) |

## `src/core/modules/atomic/verify/compare.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class Severity(Enum)` | Violation severity levels. | [`src/core/modules/atomic/verify/compare.py:17`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/compare.py#L17) |
| class | `class Violation` | A single style violation. | [`src/core/modules/atomic/verify/compare.py:25`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/compare.py#L25) |
| method | `def Violation.to_dict(self) -> Dict&#91;str, Any&#93;` | Implements `Violation.to_dict`; linked source is authoritative. | [`src/core/modules/atomic/verify/compare.py:34`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/compare.py#L34) |
| class | `class CompareResult` | Result of comparing one element. | [`src/core/modules/atomic/verify/compare.py:46`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/compare.py#L46) |
| method | `def CompareResult.error_count(self) -> int` | Implements `CompareResult.error_count`; linked source is authoritative. | [`src/core/modules/atomic/verify/compare.py:55`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/compare.py#L55) |
| method | `def CompareResult.warning_count(self) -> int` | Implements `CompareResult.warning_count`; linked source is authoritative. | [`src/core/modules/atomic/verify/compare.py:59`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/compare.py#L59) |
| method | `def CompareResult.to_dict(self) -> Dict&#91;str, Any&#93;` | Implements `CompareResult.to_dict`; linked source is authoritative. | [`src/core/modules/atomic/verify/compare.py:62`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/compare.py#L62) |
| function | `def hex_to_rgb(hex_color: str) -> Tuple&#91;int, int, int&#93;` | Convert hex color to RGB tuple. | [`src/core/modules/atomic/verify/compare.py:72`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/compare.py#L72) |
| function | `def colors_match(color1: str, color2: str, tolerance: int=5) -> bool` | Check if two colors match within tolerance. | [`src/core/modules/atomic/verify/compare.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/compare.py#L84) |
| class | `class VerifyCompareModule(BaseModule)` | Compare captured styles with expected values. | [`src/core/modules/atomic/verify/compare.py:141`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/compare.py#L141) |
| method | `def VerifyCompareModule.validate_params(self) -> None` | Implements `VerifyCompareModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/verify/compare.py:147`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/compare.py#L147) |
| method | `async def VerifyCompareModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `VerifyCompareModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/verify/compare.py:162`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/compare.py#L162) |
| method | `def VerifyCompareModule._compare_typography(self) -> List&#91;Violation&#93;` | Implements `VerifyCompareModule._compare_typography`; linked source is authoritative. | [`src/core/modules/atomic/verify/compare.py:199`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/compare.py#L199) |
| method | `def VerifyCompareModule._compare_colors(self) -> List&#91;Violation&#93;` | Implements `VerifyCompareModule._compare_colors`; linked source is authoritative. | [`src/core/modules/atomic/verify/compare.py:232`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/compare.py#L232) |
| method | `def VerifyCompareModule._compare_spacing(self) -> List&#91;Violation&#93;` | Implements `VerifyCompareModule._compare_spacing`; linked source is authoritative. | [`src/core/modules/atomic/verify/compare.py:261`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/compare.py#L261) |
| method | `def VerifyCompareModule._compare_sizing(self) -> List&#91;Violation&#93;` | Implements `VerifyCompareModule._compare_sizing`; linked source is authoritative. | [`src/core/modules/atomic/verify/compare.py:288`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/compare.py#L288) |

## `src/core/modules/atomic/verify/figma.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class FigmaStyle` | Extracted style from a Figma node. | [`src/core/modules/atomic/verify/figma.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/figma.py#L21) |
| method | `def FigmaStyle.to_dict(self) -> Dict&#91;str, Any&#93;` | Implements `FigmaStyle.to_dict`; linked source is authoritative. | [`src/core/modules/atomic/verify/figma.py:54`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/figma.py#L54) |
| class | `class FigmaNode` | A node from Figma file. | [`src/core/modules/atomic/verify/figma.py:59`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/figma.py#L59) |
| method | `def FigmaNode.find_by_name(self, name: str) -> Optional&#91;'FigmaNode'&#93;` | Find child node by name (recursive). | [`src/core/modules/atomic/verify/figma.py:67`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/figma.py#L67) |
| method | `def FigmaNode.to_dict(self) -> Dict&#91;str, Any&#93;` | Implements `FigmaNode.to_dict`; linked source is authoritative. | [`src/core/modules/atomic/verify/figma.py:77`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/figma.py#L77) |
| function | `def rgba_to_hex(color: Dict&#91;str, float&#93;) -> str` | Convert Figma RGBA to hex. | [`src/core/modules/atomic/verify/figma.py:86`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/figma.py#L86) |
| function | `def extract_style(data: Dict&#91;str, Any&#93;) -> FigmaStyle` | Extract style properties from Figma node data. | [`src/core/modules/atomic/verify/figma.py:94`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/figma.py#L94) |
| function | `def parse_node(data: Dict&#91;str, Any&#93;) -> FigmaNode` | Parse raw Figma node data into FigmaNode. | [`src/core/modules/atomic/verify/figma.py:147`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/figma.py#L147) |
| class | `class VerifyFigmaModule(BaseModule)` | Fetch design tokens from Figma API. | [`src/core/modules/atomic/verify/figma.py:204`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/figma.py#L204) |
| method | `def VerifyFigmaModule.validate_params(self) -> None` | Implements `VerifyFigmaModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/verify/figma.py:210`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/figma.py#L210) |
| method | `async def VerifyFigmaModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `VerifyFigmaModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/verify/figma.py:221`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/figma.py#L221) |

## `src/core/modules/atomic/verify/report.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class VerifyReportModule(BaseModule)` | Generate verification report. | [`src/core/modules/atomic/verify/report.py:61`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/report.py#L61) |
| method | `def VerifyReportModule.validate_params(self) -> None` | Implements `VerifyReportModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/verify/report.py:67`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/report.py#L67) |
| method | `async def VerifyReportModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `VerifyReportModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/verify/report.py:80`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/report.py#L80) |
| method | `def VerifyReportModule._generate_html(self, data: Dict) -> str` | Implements `VerifyReportModule._generate_html`; linked source is authoritative. | [`src/core/modules/atomic/verify/report.py:136`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/report.py#L136) |
| method | `def VerifyReportModule._generate_markdown(self, data: Dict) -> str` | Implements `VerifyReportModule._generate_markdown`; linked source is authoritative. | [`src/core/modules/atomic/verify/report.py:209`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/report.py#L209) |

## `src/core/modules/atomic/verify/ruleset.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class Rule` | A single verification rule. | [`src/core/modules/atomic/verify/ruleset.py:20`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/ruleset.py#L20) |
| method | `def Rule.to_dict(self) -> Dict&#91;str, Any&#93;` | Implements `Rule.to_dict`; linked source is authoritative. | [`src/core/modules/atomic/verify/ruleset.py:35`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/ruleset.py#L35) |
| method | `def Rule.from_dict(cls, data: Dict&#91;str, Any&#93;) -> 'Rule'` | Implements `Rule.from_dict`; linked source is authoritative. | [`src/core/modules/atomic/verify/ruleset.py:39`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/ruleset.py#L39) |
| class | `class Ruleset` | Collection of verification rules. | [`src/core/modules/atomic/verify/ruleset.py:57`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/ruleset.py#L57) |
| method | `def Ruleset.to_dict(self) -> Dict&#91;str, Any&#93;` | Implements `Ruleset.to_dict`; linked source is authoritative. | [`src/core/modules/atomic/verify/ruleset.py:72`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/ruleset.py#L72) |
| method | `def Ruleset.from_dict(cls, data: Dict&#91;str, Any&#93;) -> 'Ruleset'` | Implements `Ruleset.from_dict`; linked source is authoritative. | [`src/core/modules/atomic/verify/ruleset.py:93`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/ruleset.py#L93) |
| method | `def Ruleset.add_rule(self, rule: Rule) -> None` | Implements `Ruleset.add_rule`; linked source is authoritative. | [`src/core/modules/atomic/verify/ruleset.py:116`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/ruleset.py#L116) |
| function | `def load_ruleset(path: Union&#91;str, Path&#93;) -> Ruleset` | Load ruleset from YAML file. | [`src/core/modules/atomic/verify/ruleset.py:120`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/ruleset.py#L120) |
| function | `def save_ruleset(ruleset: Ruleset, path: Union&#91;str, Path&#93;) -> None` | Save ruleset to YAML file. | [`src/core/modules/atomic/verify/ruleset.py:136`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/ruleset.py#L136) |
| class | `class VerifyRulesetModule(BaseModule)` | Load verification rules from YAML file. | [`src/core/modules/atomic/verify/ruleset.py:184`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/ruleset.py#L184) |
| method | `def VerifyRulesetModule.validate_params(self) -> None` | Implements `VerifyRulesetModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/verify/ruleset.py:190`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/ruleset.py#L190) |
| method | `async def VerifyRulesetModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `VerifyRulesetModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/verify/ruleset.py:195`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/ruleset.py#L195) |

## `src/core/modules/atomic/verify/runner.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class VerifyRunModule(BaseModule)` | Run full design verification workflow using other verify modules. | [`src/core/modules/atomic/verify/runner.py:89`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/runner.py#L89) |
| method | `def VerifyRunModule.validate_params(self) -> None` | Implements `VerifyRunModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/verify/runner.py:95`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/runner.py#L95) |
| method | `async def VerifyRunModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `VerifyRunModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/verify/runner.py:114`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/runner.py#L114) |
| class | `class VerifyRunner` | High-level API for design verification. | [`src/core/modules/atomic/verify/runner.py:303`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/runner.py#L303) |
| method | `def VerifyRunner.__init__(self, output_dir: str='./verify-reports', figma_token: str=None)` | Implements `VerifyRunner.__init__`; linked source is authoritative. | [`src/core/modules/atomic/verify/runner.py:314`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/runner.py#L314) |
| method | `async def VerifyRunner.run_quick(self, url: str, selectors: List&#91;str&#93;, expected_styles: Dict&#91;str, Dict&#93;=None) -> Dict&#91;str, Any&#93;` | Quick verification with selectors. | [`src/core/modules/atomic/verify/runner.py:318`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/runner.py#L318) |
| method | `async def VerifyRunner.run(self, url: str, ruleset_path: str, report_format: str='html') -> Dict&#91;str, Any&#93;` | Full verification with YAML ruleset. | [`src/core/modules/atomic/verify/runner.py:336`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/runner.py#L336) |
| method | `async def VerifyRunner.run_with_figma(self, url: str, selectors: List&#91;str&#93;, figma_file_id: str, figma_mapping: Dict&#91;str, str&#93;, expected_styles: Dict&#91;str, Dict&#93;=None) -> Dict&#91;str, Any&#93;` | Verification with Figma design comparison. | [`src/core/modules/atomic/verify/runner.py:354`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/runner.py#L354) |

## `src/core/modules/atomic/verify/spec_runner.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class SpecResult` | 单条规则的验证结果 | [`src/core/modules/atomic/verify/spec_runner.py:44`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/spec_runner.py#L44) |
| method | `def SpecResult.coverage(self) -> float` | 计算覆盖率百分比 | [`src/core/modules/atomic/verify/spec_runner.py:56`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/spec_runner.py#L56) |
| method | `def SpecResult.to_dict(self) -> Dict&#91;str, Any&#93;` | Implements `SpecResult.to_dict`; linked source is authoritative. | [`src/core/modules/atomic/verify/spec_runner.py:67`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/spec_runner.py#L67) |
| function | `async def execute_module_dynamic(module_id: str, params: Dict&#91;str, Any&#93;, context: Optional&#91;Dict&#93;=None) -> Dict&#91;str, Any&#93;` | 动态执行任意 flyto-core 模组 | [`src/core/modules/atomic/verify/spec_runner.py:83`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/spec_runner.py#L83) |
| function | `def extract_keys(data: Any, key_field: Optional&#91;str&#93;=None) -> Set&#91;str&#93;` | 从模组输出中提取 keys | [`src/core/modules/atomic/verify/spec_runner.py:113`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/spec_runner.py#L113) |
| function | `def compare_keys(source_keys: Set&#91;str&#93;, target_keys: Set&#91;str&#93;, direction: str='bidirectional') -> tuple` | 比较两个 key 集合 | [`src/core/modules/atomic/verify/spec_runner.py:178`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/spec_runner.py#L178) |
| function | `async def run_spec_rule(rule: Dict&#91;str, Any&#93;) -> SpecResult` | 执行单条验证规则 | [`src/core/modules/atomic/verify/spec_runner.py:206`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/spec_runner.py#L206) |
| function | `async def run_spec_ruleset(ruleset: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | 执行整个 ruleset | [`src/core/modules/atomic/verify/spec_runner.py:270`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/spec_runner.py#L270) |
| function | `def load_spec_ruleset(path: Union&#91;str, Path&#93;) -> Dict&#91;str, Any&#93;` | 从 YAML 文件加载 ruleset | [`src/core/modules/atomic/verify/spec_runner.py:299`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/spec_runner.py#L299) |
| class | `class VerifySpecModule(BaseModule)` | 动态 Spec 验证模组 | [`src/core/modules/atomic/verify/spec_runner.py:344`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/spec_runner.py#L344) |
| method | `def VerifySpecModule.validate_params(self) -> None` | Implements `VerifySpecModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/verify/spec_runner.py:350`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/spec_runner.py#L350) |
| method | `async def VerifySpecModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `VerifySpecModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/verify/spec_runner.py:356`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/spec_runner.py#L356) |

## `src/core/modules/atomic/verify/visual_diff.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def _screenshot_url(url: str, output_path: str, viewport_width: int=1280, viewport_height: int=800) -> str` | Take a full-page screenshot of a URL using Playwright. | [`src/core/modules/atomic/verify/visual_diff.py:31`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/visual_diff.py#L31) |
| function | `async def _vision_compare_images(reference_path: str, dev_path: str, focus_areas: Optional&#91;List&#91;str&#93;&#93;=None, api_key: Optional&#91;str&#93;=None, model: str='gpt-4o') -> Dict&#91;str, Any&#93;` | Use OpenAI Vision API to compare two screenshots and identify differences. | [`src/core/modules/atomic/verify/visual_diff.py:49`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/visual_diff.py#L49) |
| method | `def _vision_compare_images.load_image_b64(img_path: str) -> Dict` | Implements `_vision_compare_images.load_image_b64`; linked source is authoritative. | [`src/core/modules/atomic/verify/visual_diff.py:69`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/visual_diff.py#L69) |
| function | `def _pct_to_px(differences: List&#91;Dict&#93;, img_width: int, img_height: int) -> List&#91;Dict&#93;` | Convert percentage-based coordinates to pixel coordinates. | [`src/core/modules/atomic/verify/visual_diff.py:145`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/visual_diff.py#L145) |
| function | `def _generate_visual_diff_html(report_data: Dict, ref_screenshot: str, dev_screenshot: str, annotated_screenshot: str, output_path: str) -> str` | Generate an HTML report with side-by-side comparison and annotations. | [`src/core/modules/atomic/verify/visual_diff.py:161`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/visual_diff.py#L161) |
| function | `def _score_color(score) -> str` | Implements `_score_color`; linked source is authoritative. | [`src/core/modules/atomic/verify/visual_diff.py:263`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/visual_diff.py#L263) |
| class | `class VerifyVisualDiffModule(BaseModule)` | End-to-end visual comparison: screenshot, AI diff, annotate, report. | [`src/core/modules/atomic/verify/visual_diff.py:326`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/visual_diff.py#L326) |
| method | `def VerifyVisualDiffModule.validate_params(self) -> None` | Implements `VerifyVisualDiffModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/verify/visual_diff.py:332`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/visual_diff.py#L332) |
| method | `async def VerifyVisualDiffModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `VerifyVisualDiffModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/verify/visual_diff.py:347`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verify/visual_diff.py#L347) |
