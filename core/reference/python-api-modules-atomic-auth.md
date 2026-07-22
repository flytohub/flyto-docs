<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Auth

Source-backed signatures for **3 declarations** across **1 files** in the modules: atomic / auth area.

## `src/core/modules/atomic/auth/oauth2.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _build_token_body(params: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Build the token request body based on grant_type. | [`src/core/modules/atomic/auth/oauth2.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/auth/oauth2.py#L21) |
| function | `def _apply_client_auth(headers: Dict&#91;str, str&#93;, body: Dict&#91;str, Any&#93;, params: Dict&#91;str, Any&#93;) -> None` | Apply client authentication (header vs body). | [`src/core/modules/atomic/auth/oauth2.py:53`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/auth/oauth2.py#L53) |
| function | `async def auth_oauth2(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Exchange OAuth2 credentials for an access token. | [`src/core/modules/atomic/auth/oauth2.py:330`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/auth/oauth2.py#L330) |
