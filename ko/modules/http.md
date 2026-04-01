# HTTP

HTTP request utilities.

**1 modules**

| Module | Description |
|--------|-------------|
| [HTTP GET](#http-get) | HTTP GET 요청을 보내고 응답 받기 |

## Modules

### HTTP GET

`http.get`

HTTP GET 요청을 보내고 응답 받기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | GET 요청을 보낼 URL |
| `headers` | object | No | `{}` | 키-값 객체로 된 요청 헤더 |
| `query` | object | No | `{}` | 키-값 객체로 된 쿼리 문자열 매개변수 |
| `timeout` | number | No | `30` | 밀리초 단위의 요청 시간 초과 |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |
| `ssrf_protection` | boolean | No | `True` | Block requests to private/internal networks. Disable only for trusted internal targets. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 요청이 성공했는지 여부 (2xx 상태) |
| `status` | number | HTTP 상태 코드 |
| `body` | any | 응답 본문 (파싱된 JSON 또는 텍스트) |
| `headers` | object | 응답 헤더 |
