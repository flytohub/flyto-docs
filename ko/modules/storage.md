# Storage

Persistent key-value storage.

**3 modules**

| Module | Description |
|--------|-------------|
| [저장된 값 삭제](#저장된-값-삭제) | 영구 키-값 저장소에서 값을 삭제합니다 |
| [저장된 값 가져오기](#저장된-값-가져오기) | 영구 키-값 저장소에서 값을 검색합니다 |
| [값 저장](#값-저장) | 영구 키-값 저장소에 값을 저장합니다 |

## Modules

### 저장된 값 삭제

`storage.delete`

영구 키-값 저장소에서 값을 삭제합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | 저장소 네임스페이스 |
| `key` | string | Yes | - | 저장소 네임스페이스 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 삭제할 키 |
| `deleted` | boolean | 작업이 성공했는지 여부 |
| `key` | string | 작업이 성공했는지 여부 |

**Example:** Delete cached value

```yaml
namespace: cache
key: api_response
```

### 저장된 값 가져오기

`storage.get`

영구 키-값 저장소에서 값을 검색합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | 저장소 네임스페이스 (예: 워크플로 이름 또는 프로젝트) |
| `key` | string | Yes | - | 저장소 네임스페이스 (예: 워크플로 이름 또는 프로젝트) |
| `default` | any | No | - | 검색할 키 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 키가 존재하지 않을 경우 반환할 값 |
| `found` | boolean | 작업이 성공했는지 여부 |
| `value` | any | 작업이 성공했는지 여부 |
| `key` | string | 키가 발견되었는지 여부(만료되지 않음) |

**Example:** Get last BTC price

```yaml
namespace: crypto-alerts
key: btc_last_price
default: 0
```

**Example:** Get workflow state

```yaml
namespace: my-workflow
key: last_run_status
```

### 값 저장

`storage.set`

영구 키-값 저장소에 값을 저장합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | 저장소 네임스페이스 (예: 워크플로 이름 또는 프로젝트) |
| `key` | string | Yes | - | 저장소 네임스페이스 (예: 워크플로 이름 또는 프로젝트) |
| `value` | any | Yes | - | 값을 저장할 키 |
| `ttl_seconds` | number | No | `0` | Time to live in seconds (optional, 0 = no expiration) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 초 단위의 수명 (선택 사항, 0 = 만료 없음) |
| `key` | string | 작업이 성공했는지 여부 |
| `stored_at` | number | 작업이 성공했는지 여부 |
| `expires_at` | number | 저장된 키 |

**Example:** Store BTC price

```yaml
namespace: crypto-alerts
key: btc_last_price
value: 42350.5
```

**Example:** Store with expiration

```yaml
namespace: cache
key: api_response
value: {"data": "cached"}
ttl_seconds: 3600
```
