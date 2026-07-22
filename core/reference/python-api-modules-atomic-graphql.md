<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / GraphQL

Source-backed signatures for **6 declarations** across **2 files** in the modules: atomic / graphql area.

## `src/core/modules/atomic/graphql/mutation.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _prepare_graphql_request(params: Dict&#91;str, Any&#93;, operation_key: str='mutation')` | Validate and prepare GraphQL request components. | [`src/core/modules/atomic/graphql/mutation.py:20`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/graphql/mutation.py#L20) |
| function | `async def _execute_graphql(url: str, payload: dict, headers: dict, label: str) -> Dict&#91;str, Any&#93;` | Send the GraphQL POST and return the parsed response. | [`src/core/modules/atomic/graphql/mutation.py:54`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/graphql/mutation.py#L54) |
| function | `async def graphql_mutation(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Execute a GraphQL mutation against an endpoint. | [`src/core/modules/atomic/graphql/mutation.py:196`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/graphql/mutation.py#L196) |

## `src/core/modules/atomic/graphql/query.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _prepare_graphql_request(params: Dict&#91;str, Any&#93;, operation_key: str='query')` | Validate and prepare GraphQL request components. | [`src/core/modules/atomic/graphql/query.py:20`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/graphql/query.py#L20) |
| function | `async def _execute_graphql(url: str, payload: dict, headers: dict, label: str) -> Dict&#91;str, Any&#93;` | Send the GraphQL POST and return the parsed response. | [`src/core/modules/atomic/graphql/query.py:54`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/graphql/query.py#L54) |
| function | `async def graphql_query(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Execute a GraphQL query against an endpoint. | [`src/core/modules/atomic/graphql/query.py:205`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/graphql/query.py#L205) |
