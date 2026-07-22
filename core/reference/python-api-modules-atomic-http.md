<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / HTTP

Source-backed signatures for **46 declarations** across **7 files** in the modules: atomic / http area.

## `src/core/modules/atomic/http/batch.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _normalize_body(body: Any) -> str` | Coerce response body to a string for pattern matching. | [`src/core/modules/atomic/http/batch.py:30`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/batch.py#L30) |
| function | `async def _execute_single_request(session, req: Dict&#91;str, Any&#93;, timeout_s: int, verify_ssl: bool) -> Dict&#91;str, Any&#93;` | Execute one HTTP request from the batch spec, always returning a dict. | [`src/core/modules/atomic/http/batch.py:48`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/batch.py#L48) |
| function | `def _failed_request(label, method, url, duration_ms, code, msg) -> Dict&#91;str, Any&#93;` | Implements `_failed_request`; linked source is authoritative. | [`src/core/modules/atomic/http/batch.py:112`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/batch.py#L112) |
| function | `def _compute_pattern_matches(results: List&#91;Dict&#91;str, Any&#93;&#93;, patterns: List&#91;str&#93;) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Scan each result's body for each pattern, return per-pattern indices. | [`src/core/modules/atomic/http/batch.py:128`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/batch.py#L128) |
| function | `async def http_batch(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Execute a batch of HTTP requests, capturing per-request status + timing. | [`src/core/modules/atomic/http/batch.py:220`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/batch.py#L220) |

## `src/core/modules/atomic/http/get.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _append_query_params(url: str, query: dict) -> str` | Append query parameters to URL. | [`src/core/modules/atomic/http/get.py:26`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/get.py#L26) |
| function | `async def _parse_response_body(response) -> Any` | Parse response body, attempting JSON for JSON content types. | [`src/core/modules/atomic/http/get.py:36`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/get.py#L36) |
| function | `async def http_get(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Send HTTP GET request. | [`src/core/modules/atomic/http/get.py:91`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/get.py#L91) |

## `src/core/modules/atomic/http/paginate.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _make_result(ok: bool, all_items: List&#91;Any&#93;, pages_fetched: int, start_time: float, error: str='', error_code: str='') -> Dict&#91;str, Any&#93;` | Build a standardised paginate result dict. | [`src/core/modules/atomic/http/paginate.py:23`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/paginate.py#L23) |
| function | `def _merge_query(url: str, params: dict) -> str` | Merge query params into URL. | [`src/core/modules/atomic/http/paginate.py:45`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/paginate.py#L45) |
| function | `def _extract_by_path(data: Any, path: str) -> Any` | Extract value from nested dict using dot notation. | [`src/core/modules/atomic/http/paginate.py:54`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/paginate.py#L54) |
| function | `def _parse_link_header(link_header: str) -> Optional&#91;str&#93;` | Parse RFC 5988 Link header and return the 'next' URL. | [`src/core/modules/atomic/http/paginate.py:62`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/paginate.py#L62) |
| function | `def _extract_items(data: Any, data_path: str) -> List&#91;Any&#93;` | Extract items list from response data. | [`src/core/modules/atomic/http/paginate.py:75`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/paginate.py#L75) |
| function | `async def _paginate_offset(session, method: str, base_url: str, headers: dict, verify_ssl: bool, data_path: str, page_size: int, max_pages: int, delay_ms: int, params: dict, all_items: List&#91;Any&#93;, pages_fetched: int) -> tuple` | Offset + limit pagination strategy. | [`src/core/modules/atomic/http/paginate.py:83`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/paginate.py#L83) |
| function | `async def _paginate_page(session, method: str, base_url: str, headers: dict, verify_ssl: bool, data_path: str, page_size: int, max_pages: int, delay_ms: int, params: dict, all_items: List&#91;Any&#93;, pages_fetched: int) -> tuple` | Page number pagination strategy. | [`src/core/modules/atomic/http/paginate.py:113`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/paginate.py#L113) |
| function | `async def _paginate_cursor(session, method: str, base_url: str, headers: dict, verify_ssl: bool, data_path: str, page_size: int, max_pages: int, delay_ms: int, params: dict, all_items: List&#91;Any&#93;, pages_fetched: int) -> tuple` | Cursor / next-token pagination strategy. | [`src/core/modules/atomic/http/paginate.py:147`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/paginate.py#L147) |
| function | `async def _paginate_link_header(session, method: str, base_url: str, headers: dict, verify_ssl: bool, data_path: str, page_size: int, max_pages: int, delay_ms: int, params: dict, all_items: List&#91;Any&#93;, pages_fetched: int) -> tuple` | Link header (RFC 5988) pagination strategy. | [`src/core/modules/atomic/http/paginate.py:185`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/paginate.py#L185) |
| function | `async def http_paginate(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Iterate through paginated API and collect all results. | [`src/core/modules/atomic/http/paginate.py:473`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/paginate.py#L473) |

## `src/core/modules/atomic/http/request.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _build_url_with_query(url: str, query: dict) -> str` | Merge query params into the URL. | [`src/core/modules/atomic/http/request.py:32`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/request.py#L32) |
| function | `def _apply_auth(headers: Dict&#91;str, str&#93;, auth: Dict&#91;str, Any&#93;) -> None` | Apply authentication headers in-place. | [`src/core/modules/atomic/http/request.py:43`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/request.py#L43) |
| function | `def _build_request_kwargs(headers: dict, body: Any, method: str, content_type: str, follow_redirects: bool, verify_ssl: bool) -> Dict&#91;str, Any&#93;` | Build kwargs dict for aiohttp session.request(). | [`src/core/modules/atomic/http/request.py:59`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/request.py#L59) |
| function | `async def _read_response_body(response, response_type: str) -> Any` | Read response body according to the requested type. | [`src/core/modules/atomic/http/request.py:79`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/request.py#L79) |
| function | `def _compute_content_length(content_length_header: Optional&#91;str&#93;, body_content: Any) -> int` | Compute content length from header or body. | [`src/core/modules/atomic/http/request.py:97`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/request.py#L97) |
| function | `def _error_result(error_msg: str, error_code: str, url: str, duration_ms: int) -> Dict&#91;str, Any&#93;` | Build a standard error result dict. | [`src/core/modules/atomic/http/request.py:104`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/request.py#L104) |
| function | `async def http_request(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Send HTTP request and return response | [`src/core/modules/atomic/http/request.py:286`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/request.py#L286) |
| function | `def _compute_backoff(attempt: int, base_delay: float, strategy: str) -> float` | Compute retry delay based on backoff strategy. | [`src/core/modules/atomic/http/request.py:415`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/request.py#L415) |

## `src/core/modules/atomic/http/response_assert.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _get_nested_value(obj: Any, path: str) -> Any` | Get value from nested object using dot notation path. | [`src/core/modules/atomic/http/response_assert.py:19`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/response_assert.py#L19) |
| function | `def _add_assertion(assertions: List&#91;Dict&#91;str, Any&#93;&#93;, errors: List&#91;str&#93;, name: str, passed: bool, expected: Any, actual: Any, message: str='', fail_fast: bool=False)` | Record an assertion result and optionally raise on failure. | [`src/core/modules/atomic/http/response_assert.py:27`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/response_assert.py#L27) |
| function | `def _get_body_str(response: dict) -> str` | Extract body from response as string. | [`src/core/modules/atomic/http/response_assert.py:44`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/response_assert.py#L44) |
| function | `def _parse_json_body(response: dict) -> Any` | Parse body as JSON, returning empty dict on failure. | [`src/core/modules/atomic/http/response_assert.py:50`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/response_assert.py#L50) |
| function | `def _assert_status(params: dict, response: dict, assertions: list, errors: list, fail_fast: bool)` | Assert HTTP status code. | [`src/core/modules/atomic/http/response_assert.py:62`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/response_assert.py#L62) |
| function | `def _assert_body_contains(params: dict, response: dict, assertions: list, errors: list, fail_fast: bool)` | Assert body contains / not contains / regex. | [`src/core/modules/atomic/http/response_assert.py:81`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/response_assert.py#L81) |
| function | `def _assert_json_paths(params: dict, response: dict, assertions: list, errors: list, fail_fast: bool)` | Assert JSON path values and existence. | [`src/core/modules/atomic/http/response_assert.py:110`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/response_assert.py#L110) |
| function | `def _assert_headers_and_meta(params: dict, response: dict, assertions: list, errors: list, fail_fast: bool)` | Assert headers, content-type, duration, and JSON schema. | [`src/core/modules/atomic/http/response_assert.py:130`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/response_assert.py#L130) |
| function | `def _assert_json_schema(params: dict, response: dict, assertions: list, errors: list, fail_fast: bool)` | Assert response body against JSON schema. | [`src/core/modules/atomic/http/response_assert.py:156`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/response_assert.py#L156) |
| function | `async def http_response_assert(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Assert HTTP response properties | [`src/core/modules/atomic/http/response_assert.py:289`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/response_assert.py#L289) |

## `src/core/modules/atomic/http/session.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _apply_auth(headers: Dict&#91;str, Any&#93;, auth: Dict&#91;str, Any&#93;) -> None` | Apply authentication headers in-place. | [`src/core/modules/atomic/http/session.py:22`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/session.py#L22) |
| function | `async def _read_body(response, response_type: str) -> Any` | Read response body according to type. | [`src/core/modules/atomic/http/session.py:35`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/session.py#L35) |
| function | `async def _execute_request(session, req: Dict&#91;str, Any&#93;, index: int, auth: Optional&#91;Dict&#91;str, Any&#93;&#93;, verify_ssl: bool) -> Dict&#91;str, Any&#93;` | Execute a single request within a session. | [`src/core/modules/atomic/http/session.py:50`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/session.py#L50) |
| function | `async def http_session(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Execute a sequence of HTTP requests with persistent cookies. | [`src/core/modules/atomic/http/session.py:256`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/session.py#L256) |

## `src/core/modules/atomic/http/webhook_wait.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _find_free_port() -> int` | Find a free port on localhost. | [`src/core/modules/atomic/http/webhook_wait.py:24`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/webhook_wait.py#L24) |
| function | `async def _start_ngrok(port: int, ngrok_token: Optional&#91;str&#93;=None) -> Optional&#91;str&#93;` | Try to create an ngrok tunnel. | [`src/core/modules/atomic/http/webhook_wait.py:31`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/webhook_wait.py#L31) |
| function | `async def _stop_ngrok(port: int) -> None` | Stop ngrok tunnel for the given port. | [`src/core/modules/atomic/http/webhook_wait.py:49`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/webhook_wait.py#L49) |
| function | `async def http_webhook_wait(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Start a temporary HTTP server and wait for an incoming webhook. | [`src/core/modules/atomic/http/webhook_wait.py:246`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/webhook_wait.py#L246) |
| method | `async def http_webhook_wait.handle_webhook(request: web.Request) -> web.Response` | Handle incoming webhook request. | [`src/core/modules/atomic/http/webhook_wait.py:271`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/webhook_wait.py#L271) |
| method | `async def http_webhook_wait.handle_health(request: web.Request) -> web.Response` | Implements `http_webhook_wait.handle_health`; linked source is authoritative. | [`src/core/modules/atomic/http/webhook_wait.py:307`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/http/webhook_wait.py#L307) |
