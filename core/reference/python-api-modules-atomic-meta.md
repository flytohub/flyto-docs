<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Meta

Source-backed signatures for **16 declarations** across **3 files** in the modules: atomic / meta area.

## `src/core/modules/atomic/meta/generator.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class TestGeneratorModule(BaseModule)` | Test the module generator (stub for OSS) | [`src/core/modules/atomic/meta/generator.py:41`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/meta/generator.py#L41) |
| method | `def TestGeneratorModule.validate_params(self) -> None` | Validate and extract parameters | [`src/core/modules/atomic/meta/generator.py:57`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/meta/generator.py#L57) |
| method | `async def TestGeneratorModule.execute(self) -> Any` | Stub implementation - returns info about Pro version | [`src/core/modules/atomic/meta/generator.py:63`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/meta/generator.py#L63) |
| class | `class GenerateModuleModule(BaseModule)` | Generate a new module from specification (stub for OSS) | [`src/core/modules/atomic/meta/generator.py:102`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/meta/generator.py#L102) |
| method | `def GenerateModuleModule.validate_params(self) -> None` | Validate and extract parameters | [`src/core/modules/atomic/meta/generator.py:123`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/meta/generator.py#L123) |
| method | `async def GenerateModuleModule.execute(self) -> Any` | Stub implementation - returns info about Pro version | [`src/core/modules/atomic/meta/generator.py:137`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/meta/generator.py#L137) |

## `src/core/modules/atomic/meta/list_modules.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ListModulesModule(BaseModule)` | List all available modules from registry | [`src/core/modules/atomic/meta/list_modules.py:151`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/meta/list_modules.py#L151) |
| method | `def ListModulesModule.validate_params(self) -> None` | Implements `ListModulesModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/meta/list_modules.py:154`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/meta/list_modules.py#L154) |
| method | `async def ListModulesModule.execute(self) -> Any` | Implements `ListModulesModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/meta/list_modules.py:161`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/meta/list_modules.py#L161) |
| method | `def ListModulesModule._format_output(self, modules: List&#91;Dict&#93;) -> str` | Format module list based on requested format | [`src/core/modules/atomic/meta/list_modules.py:203`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/meta/list_modules.py#L203) |
| method | `def ListModulesModule._format_markdown(self, modules: List&#91;Dict&#93;) -> str` | Format as markdown documentation | [`src/core/modules/atomic/meta/list_modules.py:212`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/meta/list_modules.py#L212) |
| method | `def ListModulesModule._format_compact(self, modules: List&#91;Dict&#93;) -> str` | Format as compact list for AI prompts | [`src/core/modules/atomic/meta/list_modules.py:250`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/meta/list_modules.py#L250) |

## `src/core/modules/atomic/meta/update_docs.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class UpdateModuleDocsModule(BaseModule)` | Generate MODULES.md from current module registry | [`src/core/modules/atomic/meta/update_docs.py:82`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/meta/update_docs.py#L82) |
| method | `def UpdateModuleDocsModule.validate_params(self) -> None` | Implements `UpdateModuleDocsModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/meta/update_docs.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/meta/update_docs.py#L85) |
| method | `async def UpdateModuleDocsModule.execute(self) -> Any` | Implements `UpdateModuleDocsModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/meta/update_docs.py:89`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/meta/update_docs.py#L89) |
| method | `def UpdateModuleDocsModule._generate_markdown(self, by_category: Dict) -> str` | Generate complete MODULES.md content | [`src/core/modules/atomic/meta/update_docs.py:115`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/meta/update_docs.py#L115) |
