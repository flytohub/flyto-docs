# Language Support

flyto-indexer includes parsers for 6 languages. Each parser extracts symbols, dependencies, and metadata.

## Supported Languages

| Language | Parser Type | Symbols Extracted |
|----------|-------------|-------------------|
| Python | AST-based | Classes, functions, methods, variables, imports |
| TypeScript | Regex-based | Classes, functions, interfaces, types, decorators |
| JavaScript | Regex-based | Classes, functions, exports, imports |
| Vue | Custom SFC | Components, composables, stores, routes |
| Go | Regex-based | Structs, functions, methods, interfaces |
| Rust | Regex-based | Structs, functions, impls, traits, enums |
| Java | Regex-based | Classes, methods, interfaces, annotations |

## Symbol Types

| Type | Description |
|------|-------------|
| `file` | Source file |
| `class` | Class definition |
| `function` | Standalone function |
| `method` | Class method |
| `component` | Vue/React component |
| `composable` | Vue composable (use* functions) |
| `store` | State store (Pinia/Vuex) |
| `route` | Route definition |
| `api` | API endpoint |
| `variable` | Module-level variable |
| `type` | Type alias |
| `interface` | Interface definition |

## Dependency Types

| Type | Description |
|------|-------------|
| `imports` | Module/file imports |
| `calls` | Function/method calls |
| `extends` | Class inheritance |
| `implements` | Interface implementation |
| `uses` | General usage reference |
| `routes_to` | Route navigation |
| `api_calls` | HTTP API calls (fetch/axios) |

## Adding Language Support

Parsers follow a standard interface. Each scanner receives a file path and returns a list of `Symbol` objects with their dependencies.
