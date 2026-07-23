<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Maintenance Scripts

Source-backed signatures for **245 declarations** across **35 files** in the maintenance scripts area.

## `scripts/analyze_module_returns.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ReturnPattern` | Detected return pattern in a module. | [`scripts/analyze_module_returns.py:32`](https://github.com/flytohub/flyto-core/blob/main/scripts/analyze_module_returns.py#L32) |
| class | `class ModuleAnalysis` | Analysis result for a single module. | [`scripts/analyze_module_returns.py:45`](https://github.com/flytohub/flyto-core/blob/main/scripts/analyze_module_returns.py#L45) |
| class | `class ReturnPatternVisitor(ast.NodeVisitor)` | AST visitor to detect return patterns. | [`scripts/analyze_module_returns.py:58`](https://github.com/flytohub/flyto-core/blob/main/scripts/analyze_module_returns.py#L58) |
| method | `def ReturnPatternVisitor.__init__(self)` | Implements `ReturnPatternVisitor.__init__`; linked source is authoritative. | [`scripts/analyze_module_returns.py:61`](https://github.com/flytohub/flyto-core/blob/main/scripts/analyze_module_returns.py#L61) |
| method | `def ReturnPatternVisitor.visit_Return(self, node)` | Visit return statements. | [`scripts/analyze_module_returns.py:66`](https://github.com/flytohub/flyto-core/blob/main/scripts/analyze_module_returns.py#L66) |
| function | `def analyze_file(file_path: Path) -> Optional&#91;ModuleAnalysis&#93;` | Analyze a single module file. | [`scripts/analyze_module_returns.py:147`](https://github.com/flytohub/flyto-core/blob/main/scripts/analyze_module_returns.py#L147) |
| function | `def analyze_directory(base_path: Path, category_filter: Optional&#91;str&#93;=None) -> List&#91;ModuleAnalysis&#93;` | Analyze all modules in a directory. | [`scripts/analyze_module_returns.py:286`](https://github.com/flytohub/flyto-core/blob/main/scripts/analyze_module_returns.py#L286) |
| function | `def print_report(results: List&#91;ModuleAnalysis&#93;, verbose: bool=False)` | Print analysis report. | [`scripts/analyze_module_returns.py:313`](https://github.com/flytohub/flyto-core/blob/main/scripts/analyze_module_returns.py#L313) |
| function | `def main()` | Implements `main`; linked source is authoritative. | [`scripts/analyze_module_returns.py:386`](https://github.com/flytohub/flyto-core/blob/main/scripts/analyze_module_returns.py#L386) |

## `scripts/batch_update_connection_rules.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def extract_category(content: str) -> Optional&#91;str&#93;` | Extract category from module file content. | [`scripts/batch_update_connection_rules.py:266`](https://github.com/flytohub/flyto-core/blob/main/scripts/batch_update_connection_rules.py#L266) |
| function | `def extract_module_id(content: str) -> Optional&#91;str&#93;` | Extract module_id from module file content. | [`scripts/batch_update_connection_rules.py:287`](https://github.com/flytohub/flyto-core/blob/main/scripts/batch_update_connection_rules.py#L287) |
| function | `def has_connection_rules(content: str) -> bool` | Check if the module already has connection rules defined. | [`scripts/batch_update_connection_rules.py:295`](https://github.com/flytohub/flyto-core/blob/main/scripts/batch_update_connection_rules.py#L295) |
| function | `def get_rules_for_module(category: str, module_id: str) -> Dict&#91;str, List&#91;str&#93;&#93;` | Get the appropriate connection rules for a module. | [`scripts/batch_update_connection_rules.py:300`](https://github.com/flytohub/flyto-core/blob/main/scripts/batch_update_connection_rules.py#L300) |
| function | `def format_rules(rules: Dict&#91;str, List&#91;str&#93;&#93;, indent: str='    ') -> str` | Format rules as Python code. | [`scripts/batch_update_connection_rules.py:317`](https://github.com/flytohub/flyto-core/blob/main/scripts/batch_update_connection_rules.py#L317) |
| function | `def find_insertion_point(content: str) -> Optional&#91;int&#93;` | Find the best insertion point for connection rules. | [`scripts/batch_update_connection_rules.py:338`](https://github.com/flytohub/flyto-core/blob/main/scripts/batch_update_connection_rules.py#L338) |
| function | `def update_module_file(filepath: Path, dry_run: bool=True) -> Tuple&#91;bool, str&#93;` | Update a module file with connection rules. | [`scripts/batch_update_connection_rules.py:365`](https://github.com/flytohub/flyto-core/blob/main/scripts/batch_update_connection_rules.py#L365) |
| function | `def main()` | Main function to batch update modules. | [`scripts/batch_update_connection_rules.py:413`](https://github.com/flytohub/flyto-core/blob/main/scripts/batch_update_connection_rules.py#L413) |

## `scripts/check_brand_identity.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def repository_files() -> list&#91;str&#93;` | Implements `repository_files`; linked source is authoritative. | [`scripts/check_brand_identity.py:38`](https://github.com/flytohub/flyto-core/blob/main/scripts/check_brand_identity.py#L38) |
| function | `def main() -> int` | Implements `main`; linked source is authoritative. | [`scripts/check_brand_identity.py:49`](https://github.com/flytohub/flyto-core/blob/main/scripts/check_brand_identity.py#L49) |

## `scripts/check_documentation.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def command(*args: str) -> None` | Implements `command`; linked source is authoritative. | [`scripts/check_documentation.py:60`](https://github.com/flytohub/flyto-core/blob/main/scripts/check_documentation.py#L60) |
| function | `def repository_files() -> list&#91;str&#93;` | Implements `repository_files`; linked source is authoritative. | [`scripts/check_documentation.py:64`](https://github.com/flytohub/flyto-core/blob/main/scripts/check_documentation.py#L64) |
| function | `def documentation_paths(manifest: dict) -> list&#91;str&#93;` | Implements `documentation_paths`; linked source is authoritative. | [`scripts/check_documentation.py:75`](https://github.com/flytohub/flyto-core/blob/main/scripts/check_documentation.py#L75) |
| function | `def owned_source_files(files: list&#91;str&#93;) -> list&#91;str&#93;` | Implements `owned_source_files`; linked source is authoritative. | [`scripts/check_documentation.py:90`](https://github.com/flytohub/flyto-core/blob/main/scripts/check_documentation.py#L90) |
| function | `def local_target(source: Path, raw_target: str) -> Optional&#91;Path&#93;` | Implements `local_target`; linked source is authoritative. | [`scripts/check_documentation.py:113`](https://github.com/flytohub/flyto-core/blob/main/scripts/check_documentation.py#L113) |
| function | `def check_current_inventory() -> list&#91;str&#93;` | Require current prose to match generated catalog and source references. | [`scripts/check_documentation.py:121`](https://github.com/flytohub/flyto-core/blob/main/scripts/check_documentation.py#L121) |
| function | `def main() -> int` | Implements `main`; linked source is authoritative. | [`scripts/check_documentation.py:197`](https://github.com/flytohub/flyto-core/blob/main/scripts/check_documentation.py#L197) |

## `scripts/export_i18n_baseline.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def load_all_modules() -> Dict&#91;str, Dict&#91;str, Any&#93;&#93;` | Load all modules by importing the module packages. | [`scripts/export_i18n_baseline.py:27`](https://github.com/flytohub/flyto-core/blob/main/scripts/export_i18n_baseline.py#L27) |
| function | `def export_en_baseline(metadata: Dict&#91;str, Dict&#91;str, Any&#93;&#93;) -> Dict&#91;str, Dict&#91;str, Any&#93;&#93;` | Export module metadata to i18n baseline format. | [`scripts/export_i18n_baseline.py:58`](https://github.com/flytohub/flyto-core/blob/main/scripts/export_i18n_baseline.py#L58) |
| function | `def main()` | Implements `main`; linked source is authoritative. | [`scripts/export_i18n_baseline.py:114`](https://github.com/flytohub/flyto-core/blob/main/scripts/export_i18n_baseline.py#L114) |

## `scripts/fix_all_connection_rules.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_category(content: str) -> str` | Extract category from module content. | [`scripts/fix_all_connection_rules.py:48`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_all_connection_rules.py#L48) |
| function | `def add_can_receive_from(content: str, category: str) -> tuple` | Add can_receive_from after can_connect_to. | [`scripts/fix_all_connection_rules.py:63`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_all_connection_rules.py#L63) |
| method | `def add_can_receive_from.replacer(match)` | Implements `add_can_receive_from.replacer`; linked source is authoritative. | [`scripts/fix_all_connection_rules.py:70`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_all_connection_rules.py#L70) |
| function | `def process_file(filepath: Path) -> bool` | Process a single file. | [`scripts/fix_all_connection_rules.py:80`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_all_connection_rules.py#L80) |
| method | `def process_file.replacer(match)` | Implements `process_file.replacer`; linked source is authoritative. | [`scripts/fix_all_connection_rules.py:98`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_all_connection_rules.py#L98) |
| function | `def main()` | Implements `main`; linked source is authoritative. | [`scripts/fix_all_connection_rules.py:121`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_all_connection_rules.py#L121) |

## `scripts/fix_credential_keys.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_credential_keys(module_id: str) -> list` | Get credential keys for a module based on its ID. | [`scripts/fix_credential_keys.py:67`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_credential_keys.py#L67) |
| function | `def add_credential_keys_to_file(file_path: str) -> int` | Add credential_keys to @register_module decorators in a file. | [`scripts/fix_credential_keys.py:75`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_credential_keys.py#L75) |
| function | `def main()` | Main entry point. | [`scripts/fix_credential_keys.py:123`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_credential_keys.py#L123) |

## `scripts/fix_lint_warnings.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def fix_validate_params_type_hint(content: str) -> str` | Add -> None type hint to validate_params methods. | [`scripts/fix_lint_warnings.py:22`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_lint_warnings.py#L22) |
| function | `def add_ssrf_protected_tag(content: str) -> str` | Add 'ssrf_protected' to tags for network modules. | [`scripts/fix_lint_warnings.py:30`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_lint_warnings.py#L30) |
| function | `def add_path_restricted_tag(content: str) -> str` | Add 'path_restricted' to tags for file modules. | [`scripts/fix_lint_warnings.py:56`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_lint_warnings.py#L56) |
| function | `def add_credential_keys(content: str) -> str` | Add credential_keys for modules with requires_credentials=True. | [`scripts/fix_lint_warnings.py:81`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_lint_warnings.py#L81) |
| function | `def fix_file(filepath: Path) -> bool` | Fix a single file. | [`scripts/fix_lint_warnings.py:137`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_lint_warnings.py#L137) |
| function | `def main()` | Fix all module files. | [`scripts/fix_lint_warnings.py:158`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_lint_warnings.py#L158) |

## `scripts/fix_missing_can_receive_from.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_category(content: str) -> str` | Extract category from module content. | [`scripts/fix_missing_can_receive_from.py:33`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_missing_can_receive_from.py#L33) |
| function | `def has_can_receive_from(content: str) -> bool` | Check if module already has can_receive_from. | [`scripts/fix_missing_can_receive_from.py:44`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_missing_can_receive_from.py#L44) |
| function | `def add_can_receive_from(content: str, category: str) -> str` | Add can_receive_from after can_connect_to. | [`scripts/fix_missing_can_receive_from.py:48`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_missing_can_receive_from.py#L48) |
| method | `def add_can_receive_from.replacer(match)` | Implements `add_can_receive_from.replacer`; linked source is authoritative. | [`scripts/fix_missing_can_receive_from.py:55`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_missing_can_receive_from.py#L55) |
| function | `def process_file(filepath: Path) -> bool` | Process a single file. | [`scripts/fix_missing_can_receive_from.py:65`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_missing_can_receive_from.py#L65) |
| function | `def main()` | Implements `main`; linked source is authoritative. | [`scripts/fix_missing_can_receive_from.py:94`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_missing_can_receive_from.py#L94) |

## `scripts/fix_output_descriptions.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def fix_output_schema_in_file(filepath: Path) -> tuple&#91;int, list&#93;` | Fix output_schema descriptions in a single file. | [`scripts/fix_output_descriptions.py:205`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_output_descriptions.py#L205) |
| method | `def fix_output_schema_in_file.replace_field(m)` | Implements `fix_output_schema_in_file.replace_field`; linked source is authoritative. | [`scripts/fix_output_descriptions.py:225`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_output_descriptions.py#L225) |
| function | `def main()` | Implements `main`; linked source is authoritative. | [`scripts/fix_output_descriptions.py:244`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_output_descriptions.py#L244) |

## `scripts/fix_presets_placeholder.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def add_placeholder_to_preset(content: str, func_name: str, placeholder: str) -> str` | Add placeholder= to a preset function's field() call. | [`scripts/fix_presets_placeholder.py:80`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_presets_placeholder.py#L80) |
| function | `def main()` | Implements `main`; linked source is authoritative. | [`scripts/fix_presets_placeholder.py:169`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_presets_placeholder.py#L169) |

## `scripts/fix_remaining_warnings.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def add_ssrf_tag_aggressive(content: str) -> str` | Add ssrf_protected tag to any module with network-related tags. | [`scripts/fix_remaining_warnings.py:22`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_remaining_warnings.py#L22) |
| function | `def add_path_tag_aggressive(content: str) -> str` | Add path_restricted tag to file-related modules. | [`scripts/fix_remaining_warnings.py:60`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_remaining_warnings.py#L60) |
| function | `def add_permissions_for_sensitive(content: str) -> str` | Add required_permissions for handles_sensitive_data=True modules. | [`scripts/fix_remaining_warnings.py:92`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_remaining_warnings.py#L92) |
| function | `def add_output_descriptions(content: str) -> str` | Add missing descriptions in output_schema. | [`scripts/fix_remaining_warnings.py:121`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_remaining_warnings.py#L121) |
| method | `def add_output_descriptions.add_desc(match)` | Implements `add_output_descriptions.add_desc`; linked source is authoritative. | [`scripts/fix_remaining_warnings.py:132`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_remaining_warnings.py#L132) |
| function | `def add_empty_params_schema(content: str) -> str` | Add params_schema={} where missing. | [`scripts/fix_remaining_warnings.py:151`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_remaining_warnings.py#L151) |
| function | `def fix_file(filepath: Path) -> bool` | Fix a single file. | [`scripts/fix_remaining_warnings.py:177`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_remaining_warnings.py#L177) |
| function | `def main()` | Implements `main`; linked source is authoritative. | [`scripts/fix_remaining_warnings.py:198`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_remaining_warnings.py#L198) |

## `scripts/fix_schema.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def generate_placeholder(field_name: str, field_type: str) -> Optional&#91;str&#93;` | Generate a smart placeholder based on field name and type. | [`scripts/fix_schema.py:119`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema.py#L119) |
| function | `def generate_label(field_name: str) -> str` | Generate a human-readable label from field name. | [`scripts/fix_schema.py:139`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema.py#L139) |
| function | `def generate_description(field_name: str, field_type: str) -> str` | Generate a description from field name and type. | [`scripts/fix_schema.py:145`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema.py#L145) |
| class | `class Stats` | Track what was fixed. | [`scripts/fix_schema.py:209`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema.py#L209) |
| method | `def Stats.__init__(self)` | Implements `Stats.__init__`; linked source is authoritative. | [`scripts/fix_schema.py:211`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema.py#L211) |
| function | `def fix_module_file(file_path: Path, dry_run: bool, stats: Stats, verbose: bool) -> bool` | Fix a single module file. | [`scripts/fix_schema.py:226`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema.py#L226) |
| function | `def fix_schema_section(content: str, schema_name: str, is_output: bool, stats: Stats) -> str` | Fix all fields in a schema section (params_schema or output_schema). | [`scripts/fix_schema.py:275`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema.py#L275) |
| method | `def fix_schema_section.replace_field(field_match)` | Implements `fix_schema_section.replace_field`; linked source is authoritative. | [`scripts/fix_schema.py:295`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema.py#L295) |
| function | `def fix_decorator_types(content: str, category: str, stats: Stats) -> str` | Add missing input_types/output_types based on category. | [`scripts/fix_schema.py:363`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema.py#L363) |
| function | `def discover_module_files(base_path: Path) -> List&#91;Path&#93;` | Find all module files in the atomic directory. | [`scripts/fix_schema.py:399`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema.py#L399) |
| function | `def main()` | Implements `main`; linked source is authoritative. | [`scripts/fix_schema.py:416`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema.py#L416) |

## `scripts/fix_schema_quality.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_default_description(field_name: str, field_type: str) -> str` | Get default description for a field based on its name and type. | [`scripts/fix_schema_quality.py:233`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_quality.py#L233) |
| function | `def get_default_placeholder(field_name: str, field_type: str) -> str` | Get default placeholder for a string field. | [`scripts/fix_schema_quality.py:258`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_quality.py#L258) |
| function | `def analyze_module_schema(module_id: str, metadata: Dict) -> List&#91;Dict&#93;` | Analyze a module's params_schema for missing fields. | [`scripts/fix_schema_quality.py:274`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_quality.py#L274) |
| function | `def main()` | Main function to analyze and report schema issues. | [`scripts/fix_schema_quality.py:309`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_quality.py#L309) |

## `scripts/fix_schema_v2.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_placeholder(field_name: str) -> str` | Get a sensible placeholder for a field name. | [`scripts/fix_schema_v2.py:154`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v2.py#L154) |
| function | `def get_description(field_name: str) -> str` | Get a sensible description for a field name. | [`scripts/fix_schema_v2.py:172`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v2.py#L172) |
| function | `def get_issues() -> List&#91;Dict&#91;str, str&#93;&#93;` | Run quality validator and collect Q013/Q014 issues. | [`scripts/fix_schema_v2.py:187`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v2.py#L187) |
| function | `def find_module_file(module_id: str) -> Optional&#91;Path&#93;` | Find the source file for a module_id. | [`scripts/fix_schema_v2.py:226`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v2.py#L226) |
| function | `def fix_dict_field(content: str, field_name: str, prop_name: str, prop_value: str) -> str` | Add a property to a dict-style field definition. | [`scripts/fix_schema_v2.py:243`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v2.py#L243) |
| method | `def fix_dict_field.replacer(m)` | Implements `fix_dict_field.replacer`; linked source is authoritative. | [`scripts/fix_schema_v2.py:252`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v2.py#L252) |
| function | `def fix_field_call(content: str, field_name: str, prop_name: str, prop_value: str) -> str` | Add a kwarg to a field() call. | [`scripts/fix_schema_v2.py:280`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v2.py#L280) |
| method | `def fix_field_call.replacer(m)` | Implements `fix_field_call.replacer`; linked source is authoritative. | [`scripts/fix_schema_v2.py:296`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v2.py#L296) |
| function | `def apply_fix(file_path: Path, field_name: str, issue: str, fix_value: str, dry_run: bool) -> bool` | Apply a single fix to a file. | [`scripts/fix_schema_v2.py:330`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v2.py#L330) |
| function | `def main()` | Implements `main`; linked source is authoritative. | [`scripts/fix_schema_v2.py:351`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v2.py#L351) |

## `scripts/fix_schema_v3.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_placeholder(field_name: str) -> str` | Implements `get_placeholder`; linked source is authoritative. | [`scripts/fix_schema_v3.py:129`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v3.py#L129) |
| function | `def get_description(field_name: str) -> str` | Implements `get_description`; linked source is authoritative. | [`scripts/fix_schema_v3.py:140`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v3.py#L140) |
| function | `def get_issues() -> List&#91;Dict&#93;` | Implements `get_issues`; linked source is authoritative. | [`scripts/fix_schema_v3.py:151`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v3.py#L151) |
| function | `def find_module_file(module_id: str) -> Optional&#91;Path&#93;` | Implements `find_module_file`; linked source is authoritative. | [`scripts/fix_schema_v3.py:179`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v3.py#L179) |
| function | `def safe_add_to_field_call(content: str, field_name: str, prop: str, value: str) -> Optional&#91;str&#93;` | Add a kwarg to a field() call. | [`scripts/fix_schema_v3.py:194`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v3.py#L194) |
| function | `def safe_add_to_dict_field(content: str, field_name: str, prop: str, value: str) -> Optional&#91;str&#93;` | Add a property to a dict-style field. | [`scripts/fix_schema_v3.py:273`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v3.py#L273) |
| function | `def apply_fix(file_path: Path, field_name: str, issue: str, fix_value: str, dry_run: bool) -> bool` | Apply a single fix with AST validation. | [`scripts/fix_schema_v3.py:350`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v3.py#L350) |
| function | `def main()` | Implements `main`; linked source is authoritative. | [`scripts/fix_schema_v3.py:377`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v3.py#L377) |

## `scripts/fix_schema_v4.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_placeholder(name: str) -> str` | Implements `get_placeholder`; linked source is authoritative. | [`scripts/fix_schema_v4.py:76`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v4.py#L76) |
| function | `def get_description(name: str) -> str` | Implements `get_description`; linked source is authoritative. | [`scripts/fix_schema_v4.py:86`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v4.py#L86) |
| function | `def find_matching_close(content: str, start: int, open_ch: str, close_ch: str) -> Optional&#91;int&#93;` | Find matching closing bracket/paren, respecting strings. | [`scripts/fix_schema_v4.py:96`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v4.py#L96) |
| function | `def add_kwarg_to_call(content: str, field_name: str, prop: str, value: str, call_name: str='field') -> Optional&#91;str&#93;` | Add kwarg to field() or schema_field() call. | [`scripts/fix_schema_v4.py:131`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v4.py#L131) |
| function | `def add_to_dict(content: str, field_name: str, prop: str, value: str) -> Optional&#91;str&#93;` | Add property to dict-style field definition. | [`scripts/fix_schema_v4.py:165`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v4.py#L165) |
| function | `def apply_fix(file_path: Path, field_name: str, issue: str, fix_value: str, dry_run: bool) -> bool` | Implements `apply_fix`; linked source is authoritative. | [`scripts/fix_schema_v4.py:197`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v4.py#L197) |
| function | `def get_issues()` | Implements `get_issues`; linked source is authoritative. | [`scripts/fix_schema_v4.py:224`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v4.py#L224) |
| function | `def find_module_file(module_id: str) -> Optional&#91;Path&#93;` | Implements `find_module_file`; linked source is authoritative. | [`scripts/fix_schema_v4.py:252`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v4.py#L252) |
| function | `def main()` | Implements `main`; linked source is authoritative. | [`scripts/fix_schema_v4.py:272`](https://github.com/flytohub/flyto-core/blob/main/scripts/fix_schema_v4.py#L272) |

## `scripts/generate_catalog.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def format_params(params_schema: dict) -> str` | Format params_schema into a readable string. | [`scripts/generate_catalog.py:22`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_catalog.py#L22) |
| function | `def format_output(output_schema: dict) -> str` | Format output_schema into a readable string. | [`scripts/generate_catalog.py:50`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_catalog.py#L50) |
| function | `def escape_md(text: str) -> str` | Escape pipe characters for markdown tables. | [`scripts/generate_catalog.py:63`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_catalog.py#L63) |
| function | `def render_catalog() -> tuple&#91;str, int, int&#93;` | Render the runtime-discovered module catalog deterministically. | [`scripts/generate_catalog.py:68`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_catalog.py#L68) |
| function | `def main() -> int` | Implements `main`; linked source is authoritative. | [`scripts/generate_catalog.py:131`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_catalog.py#L131) |

## `scripts/generate_reference.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def relative(path: Path) -> str` | Implements `relative`; linked source is authoritative. | [`scripts/generate_reference.py:23`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L23) |
| function | `def source_link(path: Path, line: int) -> str` | Implements `source_link`; linked source is authoritative. | [`scripts/generate_reference.py:27`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L27) |
| function | `def markdown_code(value: Any) -> str` | Implements `markdown_code`; linked source is authoritative. | [`scripts/generate_reference.py:35`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L35) |
| function | `def clean(value: Any, limit: int=240) -> str` | Implements `clean`; linked source is authoritative. | [`scripts/generate_reference.py:45`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L45) |
| function | `def parse(path: Path) -> ast.Module` | Implements `parse`; linked source is authoritative. | [`scripts/generate_reference.py:50`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L50) |
| function | `def literal(node: ast.AST \| None, default: Any='') -> Any` | Implements `literal`; linked source is authoritative. | [`scripts/generate_reference.py:54`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L54) |
| function | `def summary(node: ast.AST, fallback: str) -> str` | Implements `summary`; linked source is authoritative. | [`scripts/generate_reference.py:66`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L66) |
| function | `def source_files() -> list&#91;Path&#93;` | Implements `source_files`; linked source is authoritative. | [`scripts/generate_reference.py:78`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L78) |
| function | `def callable_signature(node: ast.FunctionDef \| ast.AsyncFunctionDef) -> str` | Implements `callable_signature`; linked source is authoritative. | [`scripts/generate_reference.py:100`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L100) |
| function | `def declarations(tree: ast.Module) -> list&#91;tuple&#91;int, str, str, str&#93;&#93;` | Implements `declarations`; linked source is authoritative. | [`scripts/generate_reference.py:106`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L106) |
| method | `def declarations.visit(nodes: Iterable&#91;ast.stmt&#93;, owner: str='') -> None` | Implements `declarations.visit`; linked source is authoritative. | [`scripts/generate_reference.py:109`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L109) |
| function | `def module_inventory() -> str` | Implements `module_inventory`; linked source is authoritative. | [`scripts/generate_reference.py:149`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L149) |
| function | `def python_api() -> str` | Implements `python_api`; linked source is authoritative. | [`scripts/generate_reference.py:194`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L194) |
| function | `def decorator_name(node: ast.AST) -> str` | Implements `decorator_name`; linked source is authoritative. | [`scripts/generate_reference.py:222`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L222) |
| function | `def registered_modules() -> str` | Implements `registered_modules`; linked source is authoritative. | [`scripts/generate_reference.py:230`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L230) |
| function | `def cli_reference() -> str` | Implements `cli_reference`; linked source is authoritative. | [`scripts/generate_reference.py:284`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L284) |
| function | `def http_reference() -> str` | Implements `http_reference`; linked source is authoritative. | [`scripts/generate_reference.py:399`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L399) |
| function | `def configuration_reference() -> str` | Implements `configuration_reference`; linked source is authoritative. | [`scripts/generate_reference.py:464`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L464) |
| function | `def recipe_reference() -> str` | Implements `recipe_reference`; linked source is authoritative. | [`scripts/generate_reference.py:510`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L510) |
| function | `def reference_index() -> str` | Implements `reference_index`; linked source is authoritative. | [`scripts/generate_reference.py:549`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L549) |
| function | `def outputs() -> dict&#91;Path, str&#93;` | Implements `outputs`; linked source is authoritative. | [`scripts/generate_reference.py:566`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L566) |
| function | `def main() -> int` | Implements `main`; linked source is authoritative. | [`scripts/generate_reference.py:580`](https://github.com/flytohub/flyto-core/blob/main/scripts/generate_reference.py#L580) |

## `scripts/lint_modules.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def compute_violation_fingerprint(module_id: str, error: str) -> str` | Compute a stable fingerprint for a violation. | [`scripts/lint_modules.py:76`](https://github.com/flytohub/flyto-core/blob/main/scripts/lint_modules.py#L76) |
| function | `def load_baseline(baseline_path: Path) -> Dict&#91;str, Any&#93;` | Load baseline file. | [`scripts/lint_modules.py:97`](https://github.com/flytohub/flyto-core/blob/main/scripts/lint_modules.py#L97) |
| function | `def save_baseline(baseline_path: Path, data: Dict&#91;str, Any&#93;) -> None` | Save baseline file. | [`scripts/lint_modules.py:106`](https://github.com/flytohub/flyto-core/blob/main/scripts/lint_modules.py#L106) |
| function | `def create_baseline_from_results(results: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Create baseline data from validation results. | [`scripts/lint_modules.py:113`](https://github.com/flytohub/flyto-core/blob/main/scripts/lint_modules.py#L113) |
| function | `def compare_with_baseline(results: Dict&#91;str, Any&#93;, baseline: Dict&#91;str, Any&#93;) -> Tuple&#91;List&#91;Dict&#93;, List&#91;Dict&#93;, List&#91;Dict&#93;&#93;` | Compare current results with baseline. | [`scripts/lint_modules.py:146`](https://github.com/flytohub/flyto-core/blob/main/scripts/lint_modules.py#L146) |
| function | `def update_baseline(baseline_path: Path, baseline: Dict&#91;str, Any&#93;, results: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Update baseline by removing fixed violations and adding new ones. | [`scripts/lint_modules.py:211`](https://github.com/flytohub/flyto-core/blob/main/scripts/lint_modules.py#L211) |
| function | `def record_trend_data(trend_dir: Path, results: Dict&#91;str, Any&#93;) -> None` | Record validation results for trend tracking. | [`scripts/lint_modules.py:250`](https://github.com/flytohub/flyto-core/blob/main/scripts/lint_modules.py#L250) |
| function | `def _group_errors_by_rule(modules: List&#91;Dict&#93;) -> Dict&#91;str, int&#93;` | Group error counts by rule code. | [`scripts/lint_modules.py:280`](https://github.com/flytohub/flyto-core/blob/main/scripts/lint_modules.py#L280) |
| function | `def _group_warnings_by_rule(modules: List&#91;Dict&#93;) -> Dict&#91;str, int&#93;` | Group warning counts by rule code. | [`scripts/lint_modules.py:293`](https://github.com/flytohub/flyto-core/blob/main/scripts/lint_modules.py#L293) |
| function | `def load_trend_history(trend_dir: Path, limit: int=30) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Load trend history from directory. | [`scripts/lint_modules.py:306`](https://github.com/flytohub/flyto-core/blob/main/scripts/lint_modules.py#L306) |
| function | `def print_trend_report(trend_dir: Path) -> None` | Print quality trend report. | [`scripts/lint_modules.py:324`](https://github.com/flytohub/flyto-core/blob/main/scripts/lint_modules.py#L324) |
| function | `def discover_and_import_modules() -> List&#91;str&#93;` | Auto-discover and import ALL modules under src/core/modules. | [`scripts/lint_modules.py:413`](https://github.com/flytohub/flyto-core/blob/main/scripts/lint_modules.py#L413) |
| function | `def load_all_modules() -> Tuple&#91;Dict&#91;str, Dict&#91;str, Any&#93;&#93;, List&#91;str&#93;&#93;` | Load all modules via auto-discovery. | [`scripts/lint_modules.py:459`](https://github.com/flytohub/flyto-core/blob/main/scripts/lint_modules.py#L459) |
| function | `def validate_modules(metadata: Dict&#91;str, Dict&#91;str, Any&#93;&#93;, import_failures: List&#91;str&#93;, mode: str='ci', category_filter: Optional&#91;str&#93;=None, module_filter: Optional&#91;str&#93;=None) -> Dict&#91;str, Any&#93;` | Validate modules using ModuleValidator. | [`scripts/lint_modules.py:475`](https://github.com/flytohub/flyto-core/blob/main/scripts/lint_modules.py#L475) |
| function | `def print_text_report(data: Dict&#91;str, Any&#93;, verbose: bool=False) -> None` | Print human-readable report. | [`scripts/lint_modules.py:556`](https://github.com/flytohub/flyto-core/blob/main/scripts/lint_modules.py#L556) |
| function | `def print_baseline_report(new_violations: List&#91;Dict&#93;, existing_violations: List&#91;Dict&#93;, fixed_violations: List&#91;Dict&#93;, baseline_path: Path) -> None` | Print baseline comparison report. | [`scripts/lint_modules.py:627`](https://github.com/flytohub/flyto-core/blob/main/scripts/lint_modules.py#L627) |
| function | `def main()` | Implements `main`; linked source is authoritative. | [`scripts/lint_modules.py:680`](https://github.com/flytohub/flyto-core/blob/main/scripts/lint_modules.py#L680) |

## `scripts/mcp_drive_demo.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def send(proc: subprocess.Popen, req: dict) -> dict` | Send one JSON-RPC request and read the matching response. | [`scripts/mcp_drive_demo.py:28`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_drive_demo.py#L28) |
| function | `def call_tool(proc, request_id: int, name: str, arguments: dict) -> dict` | Call a tool via tools/call and unwrap the structured content. | [`scripts/mcp_drive_demo.py:45`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_drive_demo.py#L45) |
| function | `def main(url: str, out_png: Path) -> int` | Implements `main`; linked source is authoritative. | [`scripts/mcp_drive_demo.py:67`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_drive_demo.py#L67) |
| method | `def main.assert_ok(label: str, resp: dict, code: int) -> None` | Implements `main.assert_ok`; linked source is authoritative. | [`scripts/mcp_drive_demo.py:109`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_drive_demo.py#L109) |

## `scripts/mcp_drive_login.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def send(proc: subprocess.Popen, req: dict) -> dict` | Implements `send`; linked source is authoritative. | [`scripts/mcp_drive_login.py:32`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_drive_login.py#L32) |
| function | `def call_tool(proc, name: str, arguments: dict) -> dict` | Implements `call_tool`; linked source is authoritative. | [`scripts/mcp_drive_login.py:48`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_drive_login.py#L48) |
| function | `def ok(resp: dict) -> bool` | Implements `ok`; linked source is authoritative. | [`scripts/mcp_drive_login.py:68`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_drive_login.py#L68) |
| function | `def must_ok(label: str, resp: dict)` | Implements `must_ok`; linked source is authoritative. | [`scripts/mcp_drive_login.py:72`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_drive_login.py#L72) |
| function | `def execute(proc, session, module_id, **params)` | Implements `execute`; linked source is authoritative. | [`scripts/mcp_drive_login.py:78`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_drive_login.py#L78) |
| function | `def main(base_url: str) -> int` | Implements `main`; linked source is authoritative. | [`scripts/mcp_drive_login.py:86`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_drive_login.py#L86) |

## `scripts/mcp_find_orgid.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def main()` | Implements `main`; linked source is authoritative. | [`scripts/mcp_find_orgid.py:13`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_find_orgid.py#L13) |
| method | `def main.send(req)` | Implements `main.send`; linked source is authoritative. | [`scripts/mcp_find_orgid.py:20`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_find_orgid.py#L20) |
| method | `def main.call(name, **a)` | Implements `main.call`; linked source is authoritative. | [`scripts/mcp_find_orgid.py:28`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_find_orgid.py#L28) |

## `scripts/mcp_grab_ctem_error.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def send(proc, req)` | Implements `send`; linked source is authoritative. | [`scripts/mcp_grab_ctem_error.py:9`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_grab_ctem_error.py#L9) |
| function | `def call(proc, name, **args)` | Implements `call`; linked source is authoritative. | [`scripts/mcp_grab_ctem_error.py:22`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_grab_ctem_error.py#L22) |
| function | `def exec_mod(proc, session, m, **p)` | Implements `exec_mod`; linked source is authoritative. | [`scripts/mcp_grab_ctem_error.py:35`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_grab_ctem_error.py#L35) |
| function | `def main(base, org)` | Implements `main`; linked source is authoritative. | [`scripts/mcp_grab_ctem_error.py:40`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_grab_ctem_error.py#L40) |

## `scripts/mcp_grab_ctem_html.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def send(proc, req)` | Implements `send`; linked source is authoritative. | [`scripts/mcp_grab_ctem_html.py:9`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_grab_ctem_html.py#L9) |
| function | `def call(proc, name, **args)` | Implements `call`; linked source is authoritative. | [`scripts/mcp_grab_ctem_html.py:20`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_grab_ctem_html.py#L20) |
| function | `def exec_mod(proc, session, m, **p)` | Implements `exec_mod`; linked source is authoritative. | [`scripts/mcp_grab_ctem_html.py:31`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_grab_ctem_html.py#L31) |
| function | `def main(base, org)` | Implements `main`; linked source is authoritative. | [`scripts/mcp_grab_ctem_html.py:36`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_grab_ctem_html.py#L36) |

## `scripts/mcp_shot_url.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def send(proc, req)` | Implements `send`; linked source is authoritative. | [`scripts/mcp_shot_url.py:11`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_shot_url.py#L11) |
| function | `def call(proc, name, **args)` | Implements `call`; linked source is authoritative. | [`scripts/mcp_shot_url.py:20`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_shot_url.py#L20) |
| function | `def main(url, out_png)` | Implements `main`; linked source is authoritative. | [`scripts/mcp_shot_url.py:27`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_shot_url.py#L27) |

## `scripts/mcp_tour.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def send(proc, req)` | Implements `send`; linked source is authoritative. | [`scripts/mcp_tour.py:55`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour.py#L55) |
| function | `def call(proc, name, **args)` | Implements `call`; linked source is authoritative. | [`scripts/mcp_tour.py:69`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour.py#L69) |
| function | `def ok(r)` | Implements `ok`; linked source is authoritative. | [`scripts/mcp_tour.py:86`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour.py#L86) |
| function | `def execute(proc, session, module_id, **params)` | Implements `execute`; linked source is authoritative. | [`scripts/mcp_tour.py:90`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour.py#L90) |
| function | `def shot(proc, session, name, base_url, path)` | Implements `shot`; linked source is authoritative. | [`scripts/mcp_tour.py:96`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour.py#L96) |
| function | `def main(base_url)` | Implements `main`; linked source is authoritative. | [`scripts/mcp_tour.py:115`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour.py#L115) |

## `scripts/mcp_tour_ctem_uglies.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def send(proc, req)` | Implements `send`; linked source is authoritative. | [`scripts/mcp_tour_ctem_uglies.py:43`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_ctem_uglies.py#L43) |
| function | `def call(proc, name, **args)` | Implements `call`; linked source is authoritative. | [`scripts/mcp_tour_ctem_uglies.py:57`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_ctem_uglies.py#L57) |
| function | `def ok(r)` | Implements `ok`; linked source is authoritative. | [`scripts/mcp_tour_ctem_uglies.py:75`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_ctem_uglies.py#L75) |
| function | `def exec_mod(proc, session, module_id, **params)` | Implements `exec_mod`; linked source is authoritative. | [`scripts/mcp_tour_ctem_uglies.py:79`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_ctem_uglies.py#L79) |
| function | `def main(base_url, org_id)` | Implements `main`; linked source is authoritative. | [`scripts/mcp_tour_ctem_uglies.py:85`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_ctem_uglies.py#L85) |

## `scripts/mcp_tour_custom_picker.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def send(proc, req)` | Implements `send`; linked source is authoritative. | [`scripts/mcp_tour_custom_picker.py:27`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_custom_picker.py#L27) |
| function | `def call(proc, name, **args)` | Implements `call`; linked source is authoritative. | [`scripts/mcp_tour_custom_picker.py:41`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_custom_picker.py#L41) |
| function | `def ok(r)` | Implements `ok`; linked source is authoritative. | [`scripts/mcp_tour_custom_picker.py:59`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_custom_picker.py#L59) |
| function | `def exec_mod(proc, session, module_id, **params)` | Implements `exec_mod`; linked source is authoritative. | [`scripts/mcp_tour_custom_picker.py:63`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_custom_picker.py#L63) |
| function | `def shot(proc, session, name)` | Implements `shot`; linked source is authoritative. | [`scripts/mcp_tour_custom_picker.py:69`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_custom_picker.py#L69) |
| function | `def eval_js(proc, session, script)` | Implements `eval_js`; linked source is authoritative. | [`scripts/mcp_tour_custom_picker.py:78`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_custom_picker.py#L78) |
| function | `def click_in_dialog(proc, session, text)` | Implements `click_in_dialog`; linked source is authoritative. | [`scripts/mcp_tour_custom_picker.py:136`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_custom_picker.py#L136) |
| function | `def main(base_url)` | Implements `main`; linked source is authoritative. | [`scripts/mcp_tour_custom_picker.py:144`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_custom_picker.py#L144) |

## `scripts/mcp_tour_projecttype.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def send(proc, req)` | Implements `send`; linked source is authoritative. | [`scripts/mcp_tour_projecttype.py:27`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_projecttype.py#L27) |
| function | `def call(proc, name, **args)` | Implements `call`; linked source is authoritative. | [`scripts/mcp_tour_projecttype.py:41`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_projecttype.py#L41) |
| function | `def ok(r)` | Implements `ok`; linked source is authoritative. | [`scripts/mcp_tour_projecttype.py:59`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_projecttype.py#L59) |
| function | `def exec_mod(proc, session, module_id, **params)` | Implements `exec_mod`; linked source is authoritative. | [`scripts/mcp_tour_projecttype.py:63`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_projecttype.py#L63) |
| function | `def shot(proc, session, name)` | Implements `shot`; linked source is authoritative. | [`scripts/mcp_tour_projecttype.py:69`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_projecttype.py#L69) |
| function | `def click_any(proc, session, selectors, label)` | Try each selector in turn, return True on first success. | [`scripts/mcp_tour_projecttype.py:81`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_projecttype.py#L81) |
| function | `def click_by_text(proc, session, text, label, scope='document')` | Click any element whose textContent matches `text`. | [`scripts/mcp_tour_projecttype.py:92`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_projecttype.py#L92) |
| function | `def eval_js(proc, session, script)` | Implements `eval_js`; linked source is authoritative. | [`scripts/mcp_tour_projecttype.py:128`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_projecttype.py#L128) |
| function | `def main(base_url)` | Implements `main`; linked source is authoritative. | [`scripts/mcp_tour_projecttype.py:133`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_projecttype.py#L133) |

## `scripts/mcp_tour_workspace.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def send(proc, req)` | Implements `send`; linked source is authoritative. | [`scripts/mcp_tour_workspace.py:27`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_workspace.py#L27) |
| function | `def call(proc, name, **args)` | Implements `call`; linked source is authoritative. | [`scripts/mcp_tour_workspace.py:41`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_workspace.py#L41) |
| function | `def ok(r)` | Implements `ok`; linked source is authoritative. | [`scripts/mcp_tour_workspace.py:59`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_workspace.py#L59) |
| function | `def exec_mod(proc, session, module_id, **params)` | Implements `exec_mod`; linked source is authoritative. | [`scripts/mcp_tour_workspace.py:63`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_workspace.py#L63) |
| function | `def shot(proc, session, name)` | Implements `shot`; linked source is authoritative. | [`scripts/mcp_tour_workspace.py:69`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_workspace.py#L69) |
| function | `def eval_js(proc, session, script)` | Implements `eval_js`; linked source is authoritative. | [`scripts/mcp_tour_workspace.py:79`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_workspace.py#L79) |
| function | `def api_call(method, path, body=None, token='')` | Direct HTTP to the engine (no MCP — simpler for the setup step). | [`scripts/mcp_tour_workspace.py:84`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_workspace.py#L84) |
| function | `def main(base_url)` | Implements `main`; linked source is authoritative. | [`scripts/mcp_tour_workspace.py:99`](https://github.com/flytohub/flyto-core/blob/main/scripts/mcp_tour_workspace.py#L99) |

## `scripts/migrate_module.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ModuleInfo` | Information extracted from a module. | [`scripts/migrate_module.py:29`](https://github.com/flytohub/flyto-core/blob/main/scripts/migrate_module.py#L29) |
| class | `class ModuleMigrator` | Migrates existing modules to plugin format. | [`scripts/migrate_module.py:47`](https://github.com/flytohub/flyto-core/blob/main/scripts/migrate_module.py#L47) |
| method | `def ModuleMigrator.__init__(self, src_path: Path, plugins_path: Path)` | Implements `ModuleMigrator.__init__`; linked source is authoritative. | [`scripts/migrate_module.py:69`](https://github.com/flytohub/flyto-core/blob/main/scripts/migrate_module.py#L69) |
| method | `def ModuleMigrator.discover_modules(self, category: Optional&#91;str&#93;=None) -> List&#91;ModuleInfo&#93;` | Discover all modules in a category. | [`scripts/migrate_module.py:74`](https://github.com/flytohub/flyto-core/blob/main/scripts/migrate_module.py#L74) |
| method | `def ModuleMigrator._extract_module_info(self, file_path: Path, category: str) -> Optional&#91;ModuleInfo&#93;` | Extract module information from a Python file. | [`scripts/migrate_module.py:101`](https://github.com/flytohub/flyto-core/blob/main/scripts/migrate_module.py#L101) |
| method | `def ModuleMigrator._get_permissions(self, category: str) -> List&#91;str&#93;` | Get required permissions for a category. | [`scripts/migrate_module.py:166`](https://github.com/flytohub/flyto-core/blob/main/scripts/migrate_module.py#L166) |
| method | `def ModuleMigrator.generate_manifest(self, category: str, modules: List&#91;ModuleInfo&#93;) -> Dict&#91;str, Any&#93;` | Generate a plugin manifest for a category. | [`scripts/migrate_module.py:176`](https://github.com/flytohub/flyto-core/blob/main/scripts/migrate_module.py#L176) |
| method | `def ModuleMigrator._get_required_secrets(self, category: str) -> List&#91;str&#93;` | Get required secrets for a category. | [`scripts/migrate_module.py:227`](https://github.com/flytohub/flyto-core/blob/main/scripts/migrate_module.py#L227) |
| method | `def ModuleMigrator.generate_main_py(self, category: str, modules: List&#91;ModuleInfo&#93;) -> str` | Generate main.py entry point for a plugin. | [`scripts/migrate_module.py:237`](https://github.com/flytohub/flyto-core/blob/main/scripts/migrate_module.py#L237) |
| method | `def ModuleMigrator.generate_step_file(self, module: ModuleInfo) -> str` | Generate a step implementation file that wraps the legacy module. | [`scripts/migrate_module.py:463`](https://github.com/flytohub/flyto-core/blob/main/scripts/migrate_module.py#L463) |
| method | `def ModuleMigrator.generate_init_file(self, modules: List&#91;ModuleInfo&#93;) -> str` | Generate __init__.py for steps package. | [`scripts/migrate_module.py:548`](https://github.com/flytohub/flyto-core/blob/main/scripts/migrate_module.py#L548) |
| method | `def ModuleMigrator.generate_requirements(self, category: str) -> str` | Generate requirements.txt for a plugin. | [`scripts/migrate_module.py:567`](https://github.com/flytohub/flyto-core/blob/main/scripts/migrate_module.py#L567) |
| method | `def ModuleMigrator.migrate_category(self, category: str, module_ids: Optional&#91;List&#91;str&#93;&#93;=None) -> Path` | Migrate a category or specific modules to plugin format. | [`scripts/migrate_module.py:577`](https://github.com/flytohub/flyto-core/blob/main/scripts/migrate_module.py#L577) |
| function | `def main()` | Implements `main`; linked source is authoritative. | [`scripts/migrate_module.py:642`](https://github.com/flytohub/flyto-core/blob/main/scripts/migrate_module.py#L642) |

## `scripts/publish_core.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_project_root() -> Path` | Get project root directory | [`scripts/publish_core.py:21`](https://github.com/flytohub/flyto-core/blob/main/scripts/publish_core.py#L21) |
| function | `def get_version() -> str` | Read current version from pyproject.toml | [`scripts/publish_core.py:26`](https://github.com/flytohub/flyto-core/blob/main/scripts/publish_core.py#L26) |
| function | `def bump_version(version: str, bump_type: str='patch') -> str` | Bump version number | [`scripts/publish_core.py:36`](https://github.com/flytohub/flyto-core/blob/main/scripts/publish_core.py#L36) |
| function | `def update_version(new_version: str) -> None` | Update version in pyproject.toml | [`scripts/publish_core.py:57`](https://github.com/flytohub/flyto-core/blob/main/scripts/publish_core.py#L57) |
| function | `def clean_build() -> None` | Clean build artifacts | [`scripts/publish_core.py:70`](https://github.com/flytohub/flyto-core/blob/main/scripts/publish_core.py#L70) |
| function | `def run_tests() -> bool` | Run tests before publishing | [`scripts/publish_core.py:82`](https://github.com/flytohub/flyto-core/blob/main/scripts/publish_core.py#L82) |
| function | `def validate_modules() -> bool` | Validate all modules can be imported | [`scripts/publish_core.py:92`](https://github.com/flytohub/flyto-core/blob/main/scripts/publish_core.py#L92) |
| function | `def build_package() -> bool` | Build the package | [`scripts/publish_core.py:102`](https://github.com/flytohub/flyto-core/blob/main/scripts/publish_core.py#L102) |
| function | `def publish_to_pypi(test: bool=False) -> bool` | Publish to PyPI or TestPyPI | [`scripts/publish_core.py:121`](https://github.com/flytohub/flyto-core/blob/main/scripts/publish_core.py#L121) |
| function | `def main()` | Implements `main`; linked source is authoritative. | [`scripts/publish_core.py:136`](https://github.com/flytohub/flyto-core/blob/main/scripts/publish_core.py#L136) |

## `scripts/validate_all_modules.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def run_mypy_check(paths: List&#91;str&#93;=None) -> Dict&#91;str, Any&#93;` | Run mypy type checking on the codebase. | [`scripts/validate_all_modules.py:47`](https://github.com/flytohub/flyto-core/blob/main/scripts/validate_all_modules.py#L47) |
| function | `def load_all_modules() -> Dict&#91;str, Dict&#91;str, Any&#93;&#93;` | Load all modules by importing the module packages. | [`scripts/validate_all_modules.py:117`](https://github.com/flytohub/flyto-core/blob/main/scripts/validate_all_modules.py#L117) |
| function | `def get_module_source_paths() -> Dict&#91;str, str&#93;` | Get file paths for all module source files. | [`scripts/validate_all_modules.py:154`](https://github.com/flytohub/flyto-core/blob/main/scripts/validate_all_modules.py#L154) |
| function | `def get_module_source_codes(paths: Dict&#91;str, str&#93;) -> Dict&#91;str, str&#93;` | Read source code for all modules. | [`scripts/validate_all_modules.py:177`](https://github.com/flytohub/flyto-core/blob/main/scripts/validate_all_modules.py#L177) |
| function | `def format_text_report(report, verbose: bool=False) -> str` | Format aggregate report as text. | [`scripts/validate_all_modules.py:188`](https://github.com/flytohub/flyto-core/blob/main/scripts/validate_all_modules.py#L188) |
| function | `def format_json_report(report) -> str` | Format aggregate report as JSON. | [`scripts/validate_all_modules.py:269`](https://github.com/flytohub/flyto-core/blob/main/scripts/validate_all_modules.py#L269) |
| function | `def main()` | Implements `main`; linked source is authoritative. | [`scripts/validate_all_modules.py:302`](https://github.com/flytohub/flyto-core/blob/main/scripts/validate_all_modules.py#L302) |

## `scripts/validate_schemas.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def load_all_modules() -> Dict&#91;str, Dict&#91;str, Any&#93;&#93;` | Load all modules by importing the module packages. | [`scripts/validate_schemas.py:30`](https://github.com/flytohub/flyto-core/blob/main/scripts/validate_schemas.py#L30) |
| function | `def validate_schemas(metadata: Dict&#91;str, Dict&#91;str, Any&#93;&#93;, category_filter: Optional&#91;str&#93;=None) -> Dict&#91;str, Any&#93;` | Validate all module schemas. | [`scripts/validate_schemas.py:51`](https://github.com/flytohub/flyto-core/blob/main/scripts/validate_schemas.py#L51) |
| function | `def generate_text_report(data: Dict&#91;str, Any&#93;) -> str` | Generate human-readable text report. | [`scripts/validate_schemas.py:139`](https://github.com/flytohub/flyto-core/blob/main/scripts/validate_schemas.py#L139) |
| function | `def generate_fix_report(modules_needing_fix: List&#91;Dict&#93;, output_path: Path) -> None` | Generate a detailed fix report file. | [`scripts/validate_schemas.py:204`](https://github.com/flytohub/flyto-core/blob/main/scripts/validate_schemas.py#L204) |
| function | `def main()` | Implements `main`; linked source is authoritative. | [`scripts/validate_schemas.py:253`](https://github.com/flytohub/flyto-core/blob/main/scripts/validate_schemas.py#L253) |
