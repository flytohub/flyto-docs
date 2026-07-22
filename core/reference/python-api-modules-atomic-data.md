<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Data

Source-backed signatures for **41 declarations** across **13 files** in the modules: atomic / data area.

## `src/core/modules/atomic/data/csv_read.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def csv_read(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Read and parse CSV file into array of objects. | [`src/core/modules/atomic/data/csv_read.py:95`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/csv_read.py#L95) |

## `src/core/modules/atomic/data/csv_write.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def csv_write(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Write array of objects to CSV file. | [`src/core/modules/atomic/data/csv_write.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/csv_write.py#L85) |

## `src/core/modules/atomic/data/dedup.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _record_hash(record: dict, keys: list) -> str` | Compute a stable hash for a record based on specified keys. | [`src/core/modules/atomic/data/dedup.py:26`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/dedup.py#L26) |
| class | `class DataDedupModule(BaseModule)` | Deduplicate records by key fields. | [`src/core/modules/atomic/data/dedup.py:102`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/dedup.py#L102) |
| method | `def DataDedupModule.validate_params(self) -> None` | Implements `DataDedupModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/data/dedup.py:108`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/dedup.py#L108) |
| method | `async def DataDedupModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `DataDedupModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/data/dedup.py:118`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/dedup.py#L118) |
| method | `def DataDedupModule._load_hashes(self) -> Dict&#91;str, None&#93;` | Load hashes as ordered dict (preserves insertion order for eviction). | [`src/core/modules/atomic/data/dedup.py:161`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/dedup.py#L161) |
| method | `def DataDedupModule._save_hashes(self, hashes: Dict&#91;str, None&#93;)` | Save hashes to disk. | [`src/core/modules/atomic/data/dedup.py:174`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/dedup.py#L174) |

## `src/core/modules/atomic/data/json_parse.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def json_parse(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Parse JSON string into object. | [`src/core/modules/atomic/data/json_parse.py:75`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/json_parse.py#L75) |

## `src/core/modules/atomic/data/json_stringify.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def json_stringify(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Convert object to JSON string. | [`src/core/modules/atomic/data/json_stringify.py:74`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/json_stringify.py#L74) |

## `src/core/modules/atomic/data/json_to_csv.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def json_to_csv(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Convert JSON to CSV | [`src/core/modules/atomic/data/json_to_csv.py:105`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/json_to_csv.py#L105) |
| function | `def _flatten_dict(d: Dict, parent_key: str='', sep: str='.') -> Dict` | Flatten nested dictionary with dot notation | [`src/core/modules/atomic/data/json_to_csv.py:201`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/json_to_csv.py#L201) |
| function | `def _get_value(item: Dict, key: str) -> str` | Get value from dict, handling nested keys and missing values | [`src/core/modules/atomic/data/json_to_csv.py:216`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/json_to_csv.py#L216) |

## `src/core/modules/atomic/data/pipeline.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _evaluate_condition(item: Any, condition: str, value: Any) -> bool` | Evaluate a filter condition against an item. | [`src/core/modules/atomic/data/pipeline.py:33`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/pipeline.py#L33) |
| function | `def _get_nested_value(obj: Any, path: str) -> Any` | Get a nested value from an object using dot notation. | [`src/core/modules/atomic/data/pipeline.py:82`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/pipeline.py#L82) |
| class | `class DataPipelineModule(BaseModule)` | Data Pipeline module. | [`src/core/modules/atomic/data/pipeline.py:234`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/pipeline.py#L234) |
| method | `def DataPipelineModule.validate_params(self) -> None` | Implements `DataPipelineModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/data/pipeline.py:257`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/pipeline.py#L257) |
| method | `async def DataPipelineModule.execute(self) -> Dict&#91;str, Any&#93;` | Apply all transformation steps to input data. | [`src/core/modules/atomic/data/pipeline.py:277`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/pipeline.py#L277) |
| method | `def DataPipelineModule._apply_step(self, data: Any, step: Dict&#91;str, Any&#93;) -> Any` | Apply a single transformation step. | [`src/core/modules/atomic/data/pipeline.py:328`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/pipeline.py#L328) |
| method | `def DataPipelineModule._apply_filter(self, data: Any, filter_config: Any) -> List&#91;Any&#93;` | Apply filter operation. | [`src/core/modules/atomic/data/pipeline.py:381`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/pipeline.py#L381) |
| method | `def DataPipelineModule._apply_map(self, data: Any, map_config: Any) -> List&#91;Any&#93;` | Apply map operation. | [`src/core/modules/atomic/data/pipeline.py:406`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/pipeline.py#L406) |
| method | `def DataPipelineModule._apply_sort(self, data: Any, sort_config: Any) -> List&#91;Any&#93;` | Apply sort operation. | [`src/core/modules/atomic/data/pipeline.py:438`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/pipeline.py#L438) |
| method | `def DataPipelineModule._apply_unique(self, data: Any, unique_config: Any) -> List&#91;Any&#93;` | Apply unique operation. | [`src/core/modules/atomic/data/pipeline.py:464`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/pipeline.py#L464) |
| method | `def DataPipelineModule._apply_flatten(self, data: Any, flatten_config: Any) -> List&#91;Any&#93;` | Apply flatten operation. | [`src/core/modules/atomic/data/pipeline.py:491`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/pipeline.py#L491) |
| method | `def DataPipelineModule._apply_flatten._flatten(lst: List, d: int) -> List` | Implements `DataPipelineModule._apply_flatten._flatten`; linked source is authoritative. | [`src/core/modules/atomic/data/pipeline.py:502`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/pipeline.py#L502) |
| method | `def DataPipelineModule._apply_pick(self, data: Any, fields: List&#91;str&#93;) -> Any` | Apply pick operation - select specific fields. | [`src/core/modules/atomic/data/pipeline.py:513`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/pipeline.py#L513) |
| method | `def DataPipelineModule._apply_pick.pick_from_item(item: Any) -> Dict&#91;str, Any&#93;` | Implements `DataPipelineModule._apply_pick.pick_from_item`; linked source is authoritative. | [`src/core/modules/atomic/data/pipeline.py:515`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/pipeline.py#L515) |
| method | `def DataPipelineModule._apply_omit(self, data: Any, fields: List&#91;str&#93;) -> Any` | Apply omit operation - remove specific fields. | [`src/core/modules/atomic/data/pipeline.py:524`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/pipeline.py#L524) |
| method | `def DataPipelineModule._apply_omit.omit_from_item(item: Any) -> Dict&#91;str, Any&#93;` | Implements `DataPipelineModule._apply_omit.omit_from_item`; linked source is authoritative. | [`src/core/modules/atomic/data/pipeline.py:526`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/pipeline.py#L526) |

## `src/core/modules/atomic/data/text_template.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def text_template(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Fill text template with variables. | [`src/core/modules/atomic/data/text_template.py:76`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/text_template.py#L76) |

## `src/core/modules/atomic/data/validate_records.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class DataValidateRecordsModule(BaseModule)` | Validate and filter extracted records. | [`src/core/modules/atomic/data/validate_records.py:110`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/validate_records.py#L110) |
| method | `def DataValidateRecordsModule.validate_params(self) -> None` | Implements `DataValidateRecordsModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/data/validate_records.py:116`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/validate_records.py#L116) |
| method | `async def DataValidateRecordsModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `DataValidateRecordsModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/data/validate_records.py:127`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/validate_records.py#L127) |
| method | `def DataValidateRecordsModule._validate_record(self, record: dict) -> List&#91;str&#93;` | Validate a single record against all rules. | [`src/core/modules/atomic/data/validate_records.py:175`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/validate_records.py#L175) |

## `src/core/modules/atomic/data/xml_generate.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _dict_to_element(tag: str, data: Any) -> ET.Element` | Convert a Python dict/value to an XML Element. | [`src/core/modules/atomic/data/xml_generate.py:18`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/xml_generate.py#L18) |
| function | `async def xml_generate(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Generate XML string from Python dict. | [`src/core/modules/atomic/data/xml_generate.py:185`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/xml_generate.py#L185) |

## `src/core/modules/atomic/data/xml_parse.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _element_to_dict(element: ET.Element, preserve_attributes: bool) -> Any` | Convert an XML element to a nested dict. | [`src/core/modules/atomic/data/xml_parse.py:18`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/xml_parse.py#L18) |
| function | `async def xml_parse(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Parse XML string or file into Python dict. | [`src/core/modules/atomic/data/xml_parse.py:168`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/xml_parse.py#L168) |

## `src/core/modules/atomic/data/yaml_generate.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def yaml_generate(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Generate YAML string from Python object. | [`src/core/modules/atomic/data/yaml_generate.py:137`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/yaml_generate.py#L137) |

## `src/core/modules/atomic/data/yaml_parse.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _classify_type(data: Any) -> str` | Classify the parsed YAML result type. | [`src/core/modules/atomic/data/yaml_parse.py:22`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/yaml_parse.py#L22) |
| function | `async def yaml_parse(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Parse YAML string or file into Python object. | [`src/core/modules/atomic/data/yaml_parse.py:150`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/data/yaml_parse.py#L150) |
