<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Types

Source-backed signatures for **20 declarations** across **7 files** in the modules: types area.

## `src/core/modules/types/context.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def is_context_compatible(source_category: str, target_category: str) -> bool` | Check if source category's output context is compatible with target category's input requirements. | [`src/core/modules/types/context.py:87`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/context.py#L87) |
| function | `def get_context_error_message(source_category: str, target_category: str) -> str` | Get human-readable error message for context incompatibility. | [`src/core/modules/types/context.py:102`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/context.py#L102) |

## `src/core/modules/types/data_types.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def is_data_type_compatible(source: DataType, target: DataType) -> bool` | Check if source data type can connect to target data type. | [`src/core/modules/types/data_types.py:46`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/data_types.py#L46) |

## `src/core/modules/types/enums.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ExecutionEnvironment(str, Enum)` | Execution environment - determines where modules can safely run. | [`src/core/modules/types/enums.py:12`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/enums.py#L12) |
| class | `class ModuleLevel(str, Enum)` | Module level - determines priority and trust level. | [`src/core/modules/types/enums.py:27`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/enums.py#L27) |
| class | `class UIVisibility(str, Enum)` | UI visibility level for modules. | [`src/core/modules/types/enums.py:48`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/enums.py#L48) |
| class | `class ContextType(str, Enum)` | Context types that modules can require or provide. | [`src/core/modules/types/enums.py:61`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/enums.py#L61) |
| class | `class NodeType(str, Enum)` | Node types for workflow canvas. | [`src/core/modules/types/enums.py:76`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/enums.py#L76) |
| class | `class EdgeType(str, Enum)` | Edge types for workflow connections. | [`src/core/modules/types/enums.py:101`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/enums.py#L101) |
| class | `class DataType(str, Enum)` | Data types for port type checking. | [`src/core/modules/types/enums.py:112`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/enums.py#L112) |
| class | `class StabilityLevel(str, Enum)` | Module stability level - determines which environment sees the module. | [`src/core/modules/types/enums.py:146`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/enums.py#L146) |
| class | `class ModuleTier(str, Enum)` | Module tier - determines UI display grouping and visibility. | [`src/core/modules/types/enums.py:161`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/enums.py#L161) |

## `src/core/modules/types/environment.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_module_environment(module_id: str, category: str) -> ExecutionEnvironment` | Get the execution environment for a module. | [`src/core/modules/types/environment.py:50`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/environment.py#L50) |
| function | `def is_module_allowed_in_environment(module_id: str, category: str, current_env: ExecutionEnvironment) -> bool` | Check if a module is allowed to run in the current environment. | [`src/core/modules/types/environment.py:78`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/environment.py#L78) |

## `src/core/modules/types/ports.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_default_ports(node_type: NodeType) -> Dict&#91;str, List&#91;Dict&#91;str, Any&#93;&#93;&#93;` | Get default port configuration for a node type. | [`src/core/modules/types/ports.py:186`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/ports.py#L186) |

## `src/core/modules/types/stability.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_current_env() -> str` | Get current runtime environment from FLYTO_ENV variable. | [`src/core/modules/types/stability.py:31`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/stability.py#L31) |
| function | `def get_allowed_stability_levels(env: Optional&#91;str&#93;=None) -> Set&#91;StabilityLevel&#93;` | Get stability levels allowed for a given environment. | [`src/core/modules/types/stability.py:41`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/stability.py#L41) |
| function | `def is_module_visible(stability: StabilityLevel, env: Optional&#91;str&#93;=None) -> bool` | Check if a module with given stability should be visible. | [`src/core/modules/types/stability.py:57`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/stability.py#L57) |
| function | `def get_default_stability() -> StabilityLevel` | Get default stability level for new modules. | [`src/core/modules/types/stability.py:72`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/stability.py#L72) |

## `src/core/modules/types/visibility.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_default_visibility(category: str) -> UIVisibility` | Get default UI visibility for a category. | [`src/core/modules/types/visibility.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/types/visibility.py#L85) |
