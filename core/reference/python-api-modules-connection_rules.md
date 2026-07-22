<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Connection Rules

Source-backed signatures for **10 declarations** across **2 files** in the modules: connection rules area.

## `src/core/modules/connection_rules/management.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_module_category(module_id: str) -> str` | Extract category from module ID. | [`src/core/modules/connection_rules/management.py:19`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/connection_rules/management.py#L19) |
| function | `def get_connection_rules(category: str) -> ConnectionRule` | Get connection rules for a category. | [`src/core/modules/connection_rules/management.py:40`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/connection_rules/management.py#L40) |
| function | `def matches_pattern(module_id: str, pattern: str) -> bool` | Check if a module ID matches a pattern. | [`src/core/modules/connection_rules/management.py:54`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/connection_rules/management.py#L54) |
| function | `def add_connection_rule(category: str, rule: ConnectionRule) -> None` | Add or update a connection rule for a category | [`src/core/modules/connection_rules/management.py:79`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/connection_rules/management.py#L79) |
| function | `def get_all_rules() -> Dict&#91;str, ConnectionRule&#93;` | Get all defined connection rules | [`src/core/modules/connection_rules/management.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/connection_rules/management.py#L85) |
| function | `def get_suggested_connections(module_id: str) -> List&#91;str&#93;` | Get list of categories that can be connected from this module. | [`src/core/modules/connection_rules/management.py:90`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/connection_rules/management.py#L90) |
| function | `def get_acceptable_sources(module_id: str) -> List&#91;str&#93;` | Get list of categories that can connect TO this module. | [`src/core/modules/connection_rules/management.py:111`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/connection_rules/management.py#L111) |
| function | `def get_default_connection_rules(category: str) -> Tuple&#91;List&#91;str&#93;, List&#91;str&#93;&#93;` | Get default can_connect_to and can_receive_from for a category. | [`src/core/modules/connection_rules/management.py:132`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/connection_rules/management.py#L132) |

## `src/core/modules/connection_rules/models.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ConnectionCategory(str, Enum)` | Categories for connection rule grouping | [`src/core/modules/connection_rules/models.py:14`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/connection_rules/models.py#L14) |
| class | `class ConnectionRule` | Connection rule for a category of modules. | [`src/core/modules/connection_rules/models.py:31`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/connection_rules/models.py#L31) |
