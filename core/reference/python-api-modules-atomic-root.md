<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Root

Source-backed signatures for **24 declarations** across **3 files** in the modules: atomic / root area.

## `src/core/modules/atomic/__init__.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def register_all()` | Register all community atomic modules. | [`src/core/modules/atomic/__init__.py:49`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/__init__.py#L49) |

## `src/core/modules/atomic/_deprecation.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def deprecation_warning(module_id: str)` | Issue deprecation warning for non-flow atomic modules. | [`src/core/modules/atomic/_deprecation.py:38`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/_deprecation.py#L38) |
| function | `def deprecated_module(category: str) -> Callable` | Decorator to mark a module class as deprecated. | [`src/core/modules/atomic/_deprecation.py:51`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/_deprecation.py#L51) |
| method | `def deprecated_module.decorator(cls)` | Implements `deprecated_module.decorator`; linked source is authoritative. | [`src/core/modules/atomic/_deprecation.py:60`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/_deprecation.py#L60) |
| method | `def deprecated_module.decorator.new_init(self, *args, **kwargs)` | Implements `deprecated_module.decorator.new_init`; linked source is authoritative. | [`src/core/modules/atomic/_deprecation.py:64`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/_deprecation.py#L64) |
| function | `def is_core_category(category: str) -> bool` | Check if category should remain in core. | [`src/core/modules/atomic/_deprecation.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/_deprecation.py#L85) |
| function | `def should_use_plugin(module_id: str) -> bool` | Check if module should use plugin system instead. | [`src/core/modules/atomic/_deprecation.py:90`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/_deprecation.py#L90) |

## `src/core/modules/atomic/element_registry.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ElementRegistry` | Element Registry - Instance-based Pattern | [`src/core/modules/atomic/element_registry.py:20`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/element_registry.py#L20) |
| method | `def ElementRegistry.__init__(self)` | Initialize a new element registry instance. | [`src/core/modules/atomic/element_registry.py:35`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/element_registry.py#L35) |
| method | `def ElementRegistry.register(self, element: Any) -> str` | Register element and return UUID. | [`src/core/modules/atomic/element_registry.py:39`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/element_registry.py#L39) |
| method | `def ElementRegistry.register_many(self, elements: list) -> list` | Register multiple elements. | [`src/core/modules/atomic/element_registry.py:53`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/element_registry.py#L53) |
| method | `def ElementRegistry.get(self, element_id: str) -> Optional&#91;Any&#93;` | Get element by ID. | [`src/core/modules/atomic/element_registry.py:65`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/element_registry.py#L65) |
| method | `def ElementRegistry.remove(self, element_id: str) -> bool` | Remove element reference. | [`src/core/modules/atomic/element_registry.py:77`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/element_registry.py#L77) |
| method | `def ElementRegistry.clear(self)` | Clear all element references. | [`src/core/modules/atomic/element_registry.py:92`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/element_registry.py#L92) |
| method | `def ElementRegistry.count(self) -> int` | Return the number of currently stored elements. | [`src/core/modules/atomic/element_registry.py:96`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/element_registry.py#L96) |
| method | `def ElementRegistry._get_global(cls) -> 'ElementRegistry'` | Get or create global instance (for backward compatibility). | [`src/core/modules/atomic/element_registry.py:109`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/element_registry.py#L109) |
| method | `def ElementRegistry.register_global(cls, element: Any) -> str` | Register element using global instance (backward compatible). | [`src/core/modules/atomic/element_registry.py:116`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/element_registry.py#L116) |
| method | `def ElementRegistry.register_many_global(cls, elements: list) -> list` | Register multiple elements using global instance (backward compatible). | [`src/core/modules/atomic/element_registry.py:125`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/element_registry.py#L125) |
| method | `def ElementRegistry.get_global(cls, element_id: str) -> Optional&#91;Any&#93;` | Get element from global instance (backward compatible). | [`src/core/modules/atomic/element_registry.py:134`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/element_registry.py#L134) |
| method | `def ElementRegistry.remove_global(cls, element_id: str) -> bool` | Remove element from global instance (backward compatible). | [`src/core/modules/atomic/element_registry.py:143`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/element_registry.py#L143) |
| method | `def ElementRegistry.clear_global(cls)` | Clear global instance (backward compatible). | [`src/core/modules/atomic/element_registry.py:152`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/element_registry.py#L152) |
| method | `def ElementRegistry.count_global(cls) -> int` | Count elements in global instance (backward compatible). | [`src/core/modules/atomic/element_registry.py:161`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/element_registry.py#L161) |
| function | `def get_element_registry(context: Dict&#91;str, Any&#93;) -> ElementRegistry` | Get or create element registry from context. | [`src/core/modules/atomic/element_registry.py:174`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/element_registry.py#L174) |
| function | `def create_element_registry() -> ElementRegistry` | Create a new element registry instance. | [`src/core/modules/atomic/element_registry.py:192`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/element_registry.py#L192) |
